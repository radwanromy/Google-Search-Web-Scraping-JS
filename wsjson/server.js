const { count } = require("console");
const puppeteer = require("puppeteer");
async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    const inputFiled = await page.$(
        "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
    );
    

    await inputFiled.type("Elobyte BD");
    await page.keyboard.press("Enter");

    await page.waitForSelector(".v7W49e");
    
    const resultsmain = await page.evaluate(async () => {

        // const descriptionmain= await document.querySelector(".MjjYud").innerText;

        // const x = document.querySelectorAll('.gLFyf').value;

        const searchResultsMain = document.querySelectorAll(".MjjYud");
        
        const countAll = document.querySelectorAll('.MjjYud').length;
        const countAllvideos = document.querySelectorAll('.uOId3b').length;
        const Websites = document.querySelector(".yuRUbf cite").innerText;
        console.log("The number of results", countAll);
        
        const temp = [];

        searchResultsMain.forEach(searchItems => {
            let info = {
                pageOneResultCount: countAll,
                pageOneVideoResultCount: countAllvideos,
                Website: Websites,

            };

            
           
            temp.push(info);
        });
        
        return temp;
    });
    require("fs").writeFile("database.json", JSON.stringify(resultsmain), () => { });


    await page.waitForSelector(".MjjYud");
    
    const results = await page.evaluate(async () => {

        const description= await document.querySelector(".MjjYud").innerText;
        const searchResults = document.querySelectorAll(".MjjYud");
        const countAll = document.querySelectorAll('.MjjYud').length;
        const countAllvideos = document.querySelectorAll('.uOId3b').length;
        const cites = document.querySelector(".yuRUbf cite").innerText;
        console.log("The number of results", countAll);
        const maininfo =[]
        const temp = [];
        let item2 = {
                 pageOneResultCount: countAll,
                pageOneVideoResultCount: countAllvideos,
        }
        maininfo.push(item2);
        searchResults.forEach(searchItem => {
            let item = {
                // pageOneResultCount: countAll,
                // pageOneVideoResultCount: countAllvideos,
                Website:cites,
                Title: searchItem.querySelector(".MjjYud h3").innerHTML,
                URL: searchItem.querySelector(".MjjYud a").href,
                Description:description,

            };
           

            
           
            temp.push(item);
        });
        maininfo.push(temp);
        return maininfo;
    });
    require("fs").writeFile("Webpages.json", JSON.stringify(results), () => { });


    browser.close();
}





scrape("https://google.com");
