use std::error::Error;

use bbcscraper::scape::{fetch_html, News, save_to_json};
use scraper::{Html, Selector};


fn main()-> Result<(), Box<dyn Error>> {
    
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
