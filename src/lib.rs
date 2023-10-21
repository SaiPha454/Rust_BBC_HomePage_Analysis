mod utilis;
mod helpers;
pub mod bbc_analyser_module {

    use std::io::Read;
    use std::error::Error;
    use scraper::{Html, Selector};
    use std::fs::File;
    use std::collections::HashMap;
    use crate::utilis::{tags, News};
    use crate::helpers::{fetch_html, read_json, save_svg, save_to_json};

    pub fn scrape(offline : bool)-> Result<(), Box<dyn Error>> {

        let html:Html;

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
        //loop through li tag which is a wraper of each news
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
            
            //protect not to check the same item again
            if extracted.contains(&data["title"].as_str().unwrap()) {
                continue;
            }

            for tag in &categories {

                //check by tag
                if let Some(t) = data["tag"].as_str() {

                    if tag.tags.contains(&t.to_lowercase().as_str()) {

                        //increase the corresponding tag by 1
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

                            //increase the corresponding tag by 1
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