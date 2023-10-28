
use std::io::Read;
use std::{error::Error, io::Write};
use json::{JsonValue, stringify_pretty};
use std::fs::File;
use crate::utilis::News;



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

    let mut svg_file = File::create("report.svg").unwrap();
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