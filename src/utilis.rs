
#[derive(Debug)]
pub struct Tag<'a> {
    pub label : &'a str,
    pub tags : Vec<&'a str>
}

#[derive(Debug)]
pub struct News {
    pub url: String,
    pub summary : String,
    pub title : String,
    pub image : String,
    pub tag : String
}

pub fn tags () ->Vec<Tag<'static>> {
     
    vec![

        Tag{
            label: "Sport", 
            tags:vec!["football", "cricket", "formula", "rugby", 
            "tennis", "golf", "athletics", "cycling"],
        },
        Tag {
            label: "Asia",
            tags: vec!["china", "india", "asia"]
        },
        Tag {
            label: "UK",
            tags: vec!["england", "northern ireland", "scotland", "wales", "isle of man", "guernsey", "jersey", "local", "uk"]
        },
        Tag {
            label: "World",
            tags: vec!["africa", "australia", "europe", "latin", "middle", "canada"]
        },
        Tag {
            label: "Business",
            tags: vec!["business"]
        },
        Tag {
            label: "Technology and Science",
            tags: vec!["technology", "science"]
        },
        Tag {
            label: "Entertainments and Arts",
            tags: vec!["entertainment", "arts"]
        },
        Tag {
            label: "Health",
            tags: vec!["health"]
        },
        Tag {
            label: "Other",
            tags: Vec::new()
        },
    ]
}