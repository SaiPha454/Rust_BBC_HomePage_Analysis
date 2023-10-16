pub mod scape {
    use std::io::Read;
    use std::{error::Error, io::Write};
    use json::{JsonValue, stringify_pretty};
    use scraper::{Html, Selector};
    use std::fs::File;
    use std::collections::HashMap;

    #[derive(Debug)]
    pub struct News {
        pub url: String,
        pub summary : String,
        pub title : String,
        pub image : String,
        pub tag : String
    }

    pub fn fetch_html(url : &str)-> Result<String, reqwest::Error> {
        let response = reqwest::blocking::get(url)?;
        return response.text();
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
        println!("Saved successfully");

        Ok(())
    }

    pub fn runscrape()-> Result<(), Box<dyn Error>> {

        let html = fetch_html("https://www.bbc.com")?;
        let html = Html::parse_document(&html);
    
        let li_tag = Selector::parse("li.media-list__item")?;
        let p_summary_tag = Selector::parse("p.media__summary")?;
        let title_tag = Selector::parse("a.media__link")?;
        let media_image = Selector::parse("div.media__image")?;
        let media_tag = Selector::parse("a.media__tag")?;
    
        let mut news :Vec<News>= Vec::new();
    
        for li in html.select(&li_tag) {
    
            let mut title = String::new();
            let mut summary = String::new();
            let mut url = String::new();
            let mut image = String::new();
            let mut tag = String::new();
    
            for tl in li.select(&title_tag) {
                title = tl.text().collect::<String>();
                if let Some(link) = tl.value().attr("href") {
                    url = link.to_string();
                }
            }
            for p_sm in li.select(&p_summary_tag) {
                summary=  p_sm.text().collect::<String>();
            }
    
            for img_div in li.select(&media_image) {
    
                let img = Selector::parse("img").unwrap();

                for img in img_div.select(&img) {
    
                    if let Some(img_url) = img.value().attr("src") {
    
                        image = img_url.to_string();
                    }
                }
            }
            for md_tg in li.select(&media_tag) {
                tag = md_tg.text().collect::<String>();
            }
            news.push(
                News { 
                    url,
                    summary: summary.trim().to_string(), 
                    title : title.trim().to_string(),
                    image: image,
                    tag: tag
                }
            );
        }
    
        save_to_json(news)?;
        Ok(())
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
        let total: usize = data.len();
        let mut y = 80;
        let bar_hegiht = 15;
        for (k, v) in &data {
            
            let percent = (*v as f32 )/ (total as f32);
            let bar = format!("<rect x=\"180\" y=\"{}\" width=\"{}\" height=\"{}\" fill=\"blue\" />", y, percent*300.0, bar_hegiht);
            let label = format!("<text x=\"160\" y=\"{}\" text-anchor=\"end\" font-size=\"13\"> {} </text>", (y+ (bar_hegiht/2)) , k);
            let percent_label = format!("<text x=\"{}\" y=\"{}\" font-size=\"13\"> {} %</text>", percent*300.0+200.0,(y+ (bar_hegiht/2)) , (percent *100.0) as i32);
            
            svg.push_str(&bar);
            svg.push_str(&label);
            svg.push_str(&percent_label);

            y += bar_hegiht+10;
            
        }
        svg.push_str("</svg>");

        let mut svg_file = File::create("data.svg").unwrap();
        svg_file.write_all(svg.as_bytes()).unwrap();

    }


    pub fn analyze() -> Result<(), Box<dyn Error>> {

        let categories = [
            "sport", "culture", "future",
            "travel", "asia","business", 
            "science", "entertainment", "health",
            "other"
        ];

        let mut tags: HashMap<&str, i32> = HashMap::new();
        for c in categories {
            tags.insert(c, 0);
        }

        for data in read_json("data.json")?["news"].members() {
            
            let mut status = false;

            for tag in categories {
                
                if data["url"].to_string().contains(tag) || data["tag"].to_string().contains(tag) {
                    status = true;
                    tags.entry(tag).and_modify(|x| *x = *x +1);
                    break;
                }
            }

            if status == false {
                tags.entry("other").and_modify(|x| *x = *x +1);
            }
        }

        let mut tags : Vec<_>= tags.into_iter().collect();
        tags.sort_by(|a, b| a.1.cmp(&b.1));
        save_svg(tags);
        Ok(())
    }


}