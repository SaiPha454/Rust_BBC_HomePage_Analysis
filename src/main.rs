use bbc_analyser::bbc_analyser_module::{scrape, analyze};
use std::error::Error;
use clap::{App, Arg};

fn main()-> Result<(), Box<dyn Error>> {

    let _matches = App::new("BBC HomePage Analyser")
                                    .version("1.0.0")
                                    .about("This project is to scrape BBC Homepage News and \nmake efficient analysis to categorize the collected data")
                                    .author("Sai Marn Pha<66011203>, saimarnpha@gmail.com")
                                    .arg(
                                        Arg::with_name("scape")
                                        .value_name("Scrape")
                                        .short("s")
                                        .conflicts_with("analyse")
                                        .takes_value(false)
                                        .help("Flag for scraping")
                                        
                                    )
                                    .arg(
                                        Arg::with_name("offline")
                                        .value_name("Offline")
                                        .long("offline")
                                        .conflicts_with("analyse")
                                        .takes_value(false)
                                        .help("Flag for scraping offline")
                                        
                                    )
                                    .arg(
                                        Arg::with_name("analyse")
                                        .value_name("Analyse")
                                        .short("n")
                                        .conflicts_with("scrape")
                                        .takes_value(false)
                                        .help("Flag for analysing")
                                    )
                                    .get_matches();

    let analysing = _matches.is_present("analyse");

    if analysing {
        println!("Please wait while analzying...");
        analyze()?;
        println!("Analyzed successfully!");
    }else {
        //set default run to scraping
        println!("Please wiat while scraping ...");
        scrape(_matches.is_present("offline"))?;
        println!("Scraped and Stored Data successfully!");
    }             

    Ok(())

}
