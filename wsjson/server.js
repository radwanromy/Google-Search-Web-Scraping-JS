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
    await page.waitForSelector(".MjjYud");
    const results = await page.evaluate(() => {



        const searchResults = document.querySelectorAll(".MjjYud");
        const countAll = document.querySelectorAll('.MjjYud').length;
        const countAllvideos = document.querySelectorAll('.uOId3b').length;
        console.log("The number of results", countAll);
        // const { gotScraping } = require('got-scraping');

        // gotScraping
        //     .get('https://www.facebook.com/')
        //     .then( ({ body }) => console.log(body))


        //     $.getJSON( 'http://graph.facebook.com/?id=' + $URL, function( fbdata ) {
        //     $('#facebook-count').text( 'The URL has ' + ReplaceNumberWithCommas(fbdata.shares) + ' shares count on Facebook')
        // });

        //    const countfbsearchResults = fbdata.length;

        const temp = [];

        searchResults.forEach(searchItem => {
            // let myString = searchItem.querySelectorAll(".MjjYud a").href;
            // let mySubString = "/facebook.com/";
            // let countfb = myString.split(mySubString).length - 1;
            // console.log(countfb);

            // var temp = searchItem.querySelectorAll(".MjjYud a").href;
            // var fbcount = (temp.match("facebook") || []).length;
            // console.log(fbcount);
            //     const nodeList =  searchItem.querySelector(".MjjYud a").herf;  // get only <a> elements that have the classname 'survey-processed' and whose 'href' attribute contains the phrase "/media-release"
            //    var fbcount = (nodeList.match("facebook") || []).length;
            //     console.log(fbcount);
            // const fbcount=0;
            // nodeList?forEach((nodeList)=>{
            //     if(nodeList.hasOwnProperty('facebook'))
            //       fbcount++;
            //   });

            let item = {


                The_number_of_results: countAll,
                // fb:countfbsearchResults,
                // facebook:arr, //
                // fb: fbcount,
                // facebook:nodeList.length,
                The_number_of_results_that_are_video_links: countAllvideos,
                Title: searchItem.querySelector(".MjjYud h3").innerHTML,
                URL: searchItem.querySelector(".MjjYud a").href,



            };


            temp.push(item);
        });
        return temp;
    });
    require("fs").writeFile("result.json", JSON.stringify(results), () => { });
    browser.close();
}





scrape("https://google.com");
