const { count } = require("console");
const puppeteer = require("puppeteer");
async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    const inputFiled = await page.$(
        "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
    );


    await inputFiled.type("bd");
    await page.keyboard.press("Enter");

    await page.waitForSelector(".v7W49e");
    await page.waitForSelector(".a4bIc");
    await page.waitForSelector(".MjjYud");
    // await page.waitForSelector(".sATSHe");
    await page.waitForSelector(".iJ1Kvb");

    const results = await page.evaluate(async () => {

        const description = await document.querySelector(".MjjYud").innerText;
        const searchResults = document.querySelectorAll(".MjjYud");
        const countAll = document.querySelectorAll('.MjjYud').length;
        const countAllvideos = document.querySelectorAll('.uOId3b').length;
        const searchResultvideos = document.querySelectorAll(".sI5x9c");
         const searchResultimages = document.querySelectorAll(".sATSHe");
        const searchResultsocial = document.querySelectorAll(".MjjYud");

        // const mediacount =document.querySelector('EDblX.m8vZ3d').length;
        // const x = document.getElementsByClassName("gLFyf.gsfi").value;
        // alert(x);
        // const cites = document.querySelector(".TbwUpd.NJjxre cite").innerText;
        const searchResultsite = document.querySelectorAll(".yuRUbf");
        var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
        // alert(loadTime);

        console.log("The number of results", countAll);
        const maininfo = [];
        const maininfo2 = [];
        const temp = [];
        const site = [];
        const video = [];
        const media = [];
        const social = [];
        const  website = [];
        let slinkcount = 0;
        let slinkcount2 = 0;
        let slinkcount3 = 0;
        let slinkcount4 = 0;
        let slinkcount5 = 0;
        const fb = "https://www.facebook.com";
        const li = "https://www.linkedin.com";
        const tw = "https://twitter.com";
        const ig = "https://www.instagram.com";
        const rd = "https://www.reddit.com";


        //     if (cites== "https://www.facebook.com" || ""){
        //         alert("Equal");
        //         slinkcount = slinkcount + 1;
        // }
        //     else
        //         console.log("No record found");


        var el = document.getElementById("span");
        searchResultsite.forEach(searchItems => {
            let item = {
                site: searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1),



            };

            
            for (var i = 0; i < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; i++) {
                if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == fb) {
                    slinkcount = slinkcount + 1;
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == li) {
                    slinkcount2 = slinkcount2 + 1;
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == tw) {
                    slinkcount3 = slinkcount3 + 1;
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == ig) {
                    slinkcount4 = slinkcount4 + 1;
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == rd) {
                    slinkcount5 = slinkcount5 + 1;
                }
            }
            for (var j= 0; j < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; j++) {
          
                if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == fb) {
                    let socialitem = {
                        Social_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                        Social_URL: searchItems.querySelector(".MjjYud a").href,
        
                    };
                    social.push(socialitem);
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == li) {
                    let socialitem = {
                        Social_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                        Social_URL: searchItems.querySelector(".MjjYud a").href,
        
                    };
                    social.push(socialitem);
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == tw) {
                    let socialitem = {
                        Social_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                        Social_URL: searchItems.querySelector(".MjjYud a").href,
        
                    };
                    social.push(socialitem);
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == ig) {
                    let socialitem = {
                        Social_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                        Social_URL: searchItems.querySelector(".MjjYud a").href,
        
                    };
                    social.push(socialitem);
                }
                else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == rd) {
                    let socialitem = {
                        Social_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                        Social_URL: searchItems.querySelector(".MjjYud a").href,
        
                    };
                    social.push(socialitem);
                }
        };

        for (var k= 0; k < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; k++) {
          
            if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != fb && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != li && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != tw && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != ig && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != rd) {
                let websiteitem = {
                    Website_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                    Website_URL: searchItems.querySelector(".MjjYud a").href,
    
                };
                website.push(websiteitem);
            }
           
    };


            //  alert(searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length);
            site.push(item);


        });
        let item2 = {
            // q: x,
            timeTakenInMs:loadTime,
            pageOneResultCount: countAll,
            pageOneVideoResultCount: countAllvideos,
            Total_Facebook_links: slinkcount,
            Total_Linkedin_links: slinkcount2,
            Total_Twitter_links: slinkcount3,
            Total_Instagram_links: slinkcount4,
            Total_Reddit_links: slinkcount5,

        }
        maininfo.push(item2);





        searchResults.forEach(searchItem => {
        //     const duration = document.querySelector('.R4Cuhd').innerText;
        // alert(duration);

            let item = {
                // pageOneResultCount: countAll,
                // pageOneVideoResultCount: countAllvideos,
                // Website:cites,
                Title: searchItem.querySelector(".MjjYud h3").innerHTML,
                URL: searchItem.querySelector(".MjjYud a").href,
                
                // Description: searchItem.querySelector('.MjjYud').innerHTML,



            };




            temp.push(item);
        });

        searchResultvideos.forEach(searchItemss => {
            let videoitem = {
                Video_Title: searchItemss.querySelector(".uOId3b span").innerHTML,
                Video_duration: searchItemss.querySelector('.lR1utd span').innerText,
            };

            video.push(videoitem);
        });

       
        searchResultimages.forEach(searchItemsss => {
            let mediaitem = {
                media_Title: searchItemsss.querySelector(".sATSHe a").innerText,
                media_URL: searchItemsss.querySelector(".sATSHe a").href,
            };

           media.push(mediaitem);
        });

        // searchResultsocial.forEach(searchItem2 => {
        //     if(searchItem2.querySelector(".yuRUbf cite").innerText.split(' ', 1) == fb || li || tw || ig || rd){
        //         let socialitem = {
        //             Title: searchItem2.querySelector(".MjjYud h3").innerHTML,
        //             URL: searchItem2.querySelector(".MjjYud a").href,
        //         };
        //         social.push(socialitem);
        //     };
            
        // });


        maininfo.push(temp);
        temp.push(site);
        site.push(website);
        site.push(social);
        site.push(video);
        site.push(media);
        
        return maininfo;
    });
    require("fs").writeFile("Webpages.json", JSON.stringify(results), () => { });





    browser.close();
}





scrape("https://google.com");
