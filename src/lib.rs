mod tags;

pub mod bbc_analyser_module {

    use std::io::Read;
    use std::{error::Error, io::Write};
    use json::{JsonValue, stringify_pretty};
    use scraper::{Html, Selector, html};
    use std::fs::File;
    use std::collections::HashMap;
    use crate::tags::tags;

    #[derive(Debug)]
    pub struct News {
        pub url: String,
        pub summary : String,
        pub title : String,
        pub image : String,
        pub tag : String
    }

    #[derive(Debug)]
    pub struct Tag<'a> {
        pub label : &'a str,
        pub tags : Vec<&'a str>
    }


    pub fn fetch_html(url : &str)-> Result<String, reqwest::Error> {

        let response = reqwest::blocking::get(url)?;
        return response.text();
    }

    pub fn read_json(filename : &str) -> Result<JsonValue, Box<dyn Error>> {

        let mut file = File::open(filename)?;
        let mut content = String::new();
        file.read_to_string(&mut content)?;

        let parsed_json = json::parse(&content)?;

        Ok(parsed_json)
    }


    pub fn save_svg(data: Vec<(&str, i32)>) {
        
        let mut svg = String::new();
        svg.push_str("<svg width=\"700\" height=\"400\" xmlns=\"http://www.w3.org/2000/svg\">");
        svg.push_str("<rect x=\"0\" y=\"0\" width=\"700\" height=\"400\" fill=\"white\" stroke=\"black\" stroke-width=\"2\" />");
        svg.push_str("<text x=\"300\" y=\"50\" text-anchor=\"middle\" font-size=\"23\"> BBC Home Page Analysis </text>");
        let mut total: i32 = 0;
        for i in &data {
            total += i.1;
        }
        
        let mut y = 80;
        let bar_hegiht = 15;
        for (k, v) in &data {
            
            let percent = (*v as f32 )/ (total as f32) * 100.0;
            let bar_len = percent*10.0;
            let bar = format!("<rect x=\"180\" y=\"{}\" width=\"{}\" height=\"{}\" fill=\"blue\" />", y, bar_len, bar_hegiht);
            let label = format!("<text x=\"160\" y=\"{}\" text-anchor=\"end\" font-size=\"13\"> {} </text>", (y+ (bar_hegiht/2)) , k);
            let percent_label = format!("<text x=\"{}\" y=\"{}\" font-size=\"13\"> {} %</text>", bar_len+200.0,(y+ (bar_hegiht/2)) , percent.round());

            let total_news = format!("<text x=\"300\" text-anchor=\"middle\" y=\"350\" font-size=\"16\"> Total : {}</text>", total);
            
            svg.push_str(&bar);
            svg.push_str(&label);
            svg.push_str(&percent_label);
            svg.push_str(&total_news);
            y += bar_hegiht+10;
            
        }
        svg.push_str("</svg>");

        let mut svg_file = File::create("data.svg").unwrap();
        svg_file.write_all(svg.as_bytes()).unwrap();

    }
    pub fn save_to_json(data : Vec<News>) -> Result<(), Box<dyn Error>> {

        let mut json_object = JsonValue::new_object();
        let mut news_array = JsonValue::new_array();

        for new in data {

            if new.title == "" && new.summary == "" {
                continue;
            }
            let mut each_new = JsonValue::new_object();
            each_new["url"] = JsonValue::String(new.url);
            each_new["summary"] = JsonValue::String(new.summary);
            each_new["title"] = JsonValue::String(new.title);
            each_new["image"] = JsonValue::String(new.image);
            each_new["tag"] = JsonValue::String(new.tag);

            news_array.push(each_new)?;
        }

        json_object["Agency"] = JsonValue::String("BBC NEWS AGENCY".to_string());
        json_object["news"] = news_array;


        let mut jsonfile = File::create("data.json")?;
        jsonfile.write_all(stringify_pretty(json_object, 4).as_bytes())?;

        Ok(())
    }

    pub fn scrape(offline : bool)-> Result<(), Box<dyn Error>> {

        let mut html:Html;

        if !offline {
            html = Html::parse_document(&fetch_html("https://www.bbc.com")?);
        }else {
            let mut html_content = String::new();
            let mut html_file = File::open("./test.html")?;
            html_file.read_to_string(&mut html_content)?;
            html = Html::parse_document(html_content.as_str());
        }
        
    
        //each news is wrapped in the li tag
        let li_tag = Selector::parse("li.media-list__item")?;
        let p_summary_tag = Selector::parse("p.media__summary")?;
        let title_tag = Selector::parse("a.media__link")?;
        let img_tag = Selector::parse("div.media__image")?;
        let category_tag = Selector::parse("a.media__tag")?;
    
        let mut collected_news = Vec::new();
    
        for li in html.select(&li_tag) {
    
            let mut title = String::new();
            let mut summary = String::new();
            let mut url = String::new();
            let mut image = String::new();
            let mut category = String::new();
            
            //extract title
            if let Some(tl) = li.select(&title_tag).into_iter().next() {

                title = tl.text().collect::<String>();
                if let Some(link) = tl.value().attr("href") {
                    url = link.to_string();
                }
            }

            //extract the summary of the news
            if let Some(p_sm) = li.select(&p_summary_tag).into_iter().next() {
                summary=  p_sm.text().collect::<String>();
            }
            
            //extract the image source url
            if let Some(img_div) = li.select(&img_tag).into_iter().next() {
    
                let img = Selector::parse("img").unwrap();
                if let  Some(img) = img_div.select(&img).into_iter().next() {
    
                    if let Some(img_url) = img.value().attr("src") {
    
                        image = img_url.to_string();
                    }
                }
            }

            //extract the tag 
            if let  Some(md_tg) = li.select(&category_tag).into_iter().next() {
                category = md_tg.text().collect::<String>();
            }

            collected_news.push(
                News { 
                    url,
                    summary: summary.trim().to_string(), 
                    title : title.trim().to_string(),
                    image: image,
                    tag: category
                }
            );
        }
        
        save_to_json(collected_news)?;
        Ok(())
    }

    pub fn analyze() -> Result<(), Box<dyn Error>> {

        let categories = tags();

        let mut tags: HashMap<&str, i32> = HashMap::new();
        for t in &categories {
            tags.insert(t.label, 0);
        }

        let json_data = read_json("data.json")?;

        let mut extracted: Vec<&str> = Vec::new();
        for data in json_data["news"].members() {
            
            let mut status = false;
            
            //protect not to check the same item
            if extracted.contains(&data["title"].as_str().unwrap()) {
                continue;
            }

            for tag in &categories {

                //check buy tag
                if let Some(t) = data["tag"].as_str() {

                    if tag.tags.contains(&t.to_lowercase().as_str()) {

                        tags.entry(&tag.label).and_modify(|x| *x = *x +1);
                        status = true;
                        extracted.push(&data["title"].as_str().unwrap());
                        break;
                    }
                }

                //check by url
                if let Some(t) = data["url"].as_str() {

                    for each_tag in &tag.tags {
                        if t.to_string().contains(&each_tag.to_lowercase().as_str()) {
                            
                            tags.entry(&tag.label).and_modify(|x| *x = *x +1);
                            status = true;

                            extracted.push(&data["title"].as_str().unwrap());
                            break;
                        }
                    }
                }
            }
            
            if status == false {
                tags.entry("Other").and_modify(|x| *x = *x +1);
            }
        }

        let mut tags : Vec<_>= tags.into_iter().collect();
        tags.sort_by(|a, b| a.1.cmp(&b.1));
        save_svg(tags);
        Ok(())
    }

}