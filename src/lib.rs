pub mod scape {
    use std::{error::Error, io::Write};
    use json::{JsonValue, stringify_pretty};

    use std::fs::File;

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


        let mut jsonfile = File::create("out.json")?;
        jsonfile.write_all(stringify_pretty(json_object, 4).as_bytes())?;
        println!("Saved successfully");

        Ok(())
    }


}