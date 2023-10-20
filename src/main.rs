use bbcscraper::scape::{runscrape, analyze};
use std::error::Error;
use clap::{App, SubCommand};


fn main()-> Result<(), Box<dyn Error>> {

    let _matches = App::new("bbcscrape")
                    .subcommand(
                        SubCommand::with_name("scrape")
                        .about("Scrape and extract data from bbc.com")
                    )
                    .subcommand(
                        SubCommand::with_name("analyze")
                        .about("Analyze collected data based on the tag category.")
                    ).get_matches();

    match _matches.subcommand() {
                        ("scrape", Some(_)) => {
                            runscrape()?;
                        }
                        ("analyze", Some(_)) => {
                            analyze()?;
                        }
                        _ => println!("No subcommand provided."),
                    }                  

    Ok(())

}
