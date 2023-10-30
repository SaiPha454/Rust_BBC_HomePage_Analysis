# Rust_BBC_HomePage_Analysis

### About the project

This is a Rust scraping program that analyzes the BBC Homepage ( [www](https://www.bbc.com/)https://www.bbc.com/) and categorize the articles and report a statistics.

![Screenshot from 2023-10-30 16-25-17](https://github.com/SaiPha454/Rust_BBC_HomePage_Analysis/assets/58585809/2e661781-a4b0-418e-8f23-1e8294e5a132)


### Usage guide

<br/>
cargo run or cargo run -- -s  <br/>
Command to scrape data online directly from the bbc website

<br/><br/>
cargo run or cargo run -- -s --offline
<br>
Command to scrape data offline from local bbc.html file in the project directory


<br/><br/>
cargo run or cargo run -- -n<br/>
Command to analyze data and categorize articles. This is will generate a statistics in svg file called report.svg.

<br/><br/>

cargo run -- -h
<br> Command for more information about the commands' usage
```
BBC HomePage Analyser 1.0.0
Sai Marn Pha<66011203>, saimarnpha@gmail.com
This project is to scrape BBC Homepage News and 
make efficient analysis to categorize the collected data

USAGE:
    bbc_analyser [FLAGS]

FLAGS:
    -n               Flag for analysing
    -h, --help       Prints help information
        --offline    Flag for scraping offline
    -s               Flag for scraping
    -V, --version    Prints version information
```



