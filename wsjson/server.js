
const wordc = process.argv[2];

if (wordc == "1") {
    let values = process.argv[3];
    catch_One_string(values);
}
else if (wordc == "2") {
    let values = process.argv[3] + " " + process.argv[4];
    catchstring(values);
}
else if (wordc == "3") {
    let values = process.argv[3] + " " + process.argv[4] + " " + process.argv[5];
    catchstring(values);
}
else if (wordc == "4") {
    let values = process.argv[3] + " " + process.argv[4] + " " + process.argv[5] + " " + process.argv[6];
    catchstring(values);
}
else if(wordc == "5") {
    let values = process.argv[3] + " " + process.argv[4] + " " + process.argv[5] + " " + process.argv[6] + " " + process.argv[7];
    catchstring(values);
}
else if(wordc == "6") {
    let values = process.argv[3] + " " + process.argv[4] + " " + process.argv[5] + " " + process.argv[6] + " " + process.argv[7] + " " + process.argv[8];
    catchstring(values);
}
else if(wordc == "7") {
    let values = process.argv[3] + " " + process.argv[4] + " " + process.argv[5] + " " + process.argv[6] + " " + process.argv[7] + " " + process.argv[8] + " " + process.argv[9];
   
    catchstring(values);
}
else if(wordc == "8") {
    let values = process.argv[3] + " " + process.argv[4] + " " + process.argv[5] + " " + process.argv[6] + " " + process.argv[7] + " " + process.argv[8] + " " + process.argv[9] + " " + process.argv[10];
    catchstring(values);
    
}
else {
    console.log("Too many words");

}
function catchstring(values) {
    const { count } = require("console");
    const puppeteer = require("puppeteer");
    async function scrape(url) {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        const v =(values);
        console.log(v);
        await page.goto(url);
        const inputFiled = await page.$(
            "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
        );

        await inputFiled.type(values);
        await page.keyboard.press("Enter");
        await page.waitForSelector(".v7W49e");
        await page.waitForSelector(".a4bIc");
        await page.waitForSelector(".MjjYud");
        await page.waitForSelector(".iJ1Kvb"); //uPYAZc ///MjjYud
        await page.waitForSelector(".gLFyf.gsfi");
        const results = await page.evaluate(async () => {
            const description = await document.querySelector(".MjjYud").innerText;
            const searchResults = document.querySelectorAll(".MjjYud");
            const countAll = document.querySelectorAll('.MjjYud').length;
            const countAllvideos = document.querySelectorAll('.uOId3b').length;
            const searchResultvideos = document.querySelectorAll(".sI5x9c");
            const searchResultimages = document.querySelectorAll(".sATSHe");
            const searchResultsocial = document.querySelectorAll(".MjjYud");
            const searchResultsite = document.querySelectorAll(".yuRUbf");
            var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
            console.log("The number of results", countAll);
            const maininfo = [];
            const maininfo2 = [];
            const temp = [];
            const site = [];
            const video = [];
            const media = [];
            const social = [];
            const website = [];
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
            const libd = "https://bd.linkedin.com";
            const mfb = "https://m.facebook.com";
            var el = document.getElementById("span");
            searchResultsite.forEach(searchItems => {
                let item = {
                    site: searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1),
                };

                for (var i = 0; i < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; i++) {
                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == fb) {
                        slinkcount = slinkcount + 1;
                    }
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == mfb) {
                        slinkcount = slinkcount + 1;
                    }
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == li) {
                        slinkcount2 = slinkcount2 + 1;
                    }
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == libd) {
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
                for (var j = 0; j < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; j++) {

                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == fb) {
                        let socialitem = {
                            Social_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                            Social_URL: searchItems.querySelector(".MjjYud a").href,
                        };
                        social.push(socialitem);
                    }
                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == mfb) {
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
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == libd) {
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
                for (var k = 0; k < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; k++) {
                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != fb && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != li && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != tw && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != ig && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != rd) {
                        let websiteitem = {
                            Website_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                            Website_URL: searchItems.querySelector(".MjjYud a").href,
                        };
                        website.push(websiteitem);
                    }
                };
                site.push("Search Result Sites Main Domain: ");
                site.push(item);
            });
            let item2 = {
                q: this.v,
                timeTakenInMs: loadTime,
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
                let item = {
                    Title: searchItem.querySelector(".MjjYud h3").innerHTML,
                    URL: searchItem.querySelector(".MjjYud a").href,
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
            maininfo.push("Grouped of All Category");
            maininfo.push("Website Category");
            maininfo.push(website);
            maininfo.push("Social Category");
            maininfo.push(social);
            maininfo.push("Video Category");
            maininfo.push(video);
            maininfo.push("Media Category");
            maininfo.push(media);
            maininfo.push("All Website Main Domains");
            maininfo.push("All Site Results");
            maininfo.push(temp);
            maininfo.push(site);
            return maininfo;
        });
        require("fs").writeFile("database.json", JSON.stringify(results), () => { });
        browser.close();
    }

    scrape("https://google.com");
}

function  catch_One_string(values) {
    const { count } = require("console");
    const puppeteer = require("puppeteer");
    async function scrape(url) {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        const v =(values);
        console.log(v);
        await page.goto(url);
        const inputFiled = await page.$(
            "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
        );

        await inputFiled.type(values);
        await page.keyboard.press("Enter");
        await page.waitForSelector(".v7W49e");
        await page.waitForSelector(".a4bIc");
        await page.waitForSelector(".MjjYud");
        // await page.waitForSelector(".aoPfOc");
        // await page.waitForSelector(".iJ1Kvb"); //uPYAZc ///MjjYud
        await page.waitForSelector(".gLFyf.gsfi");
        const results = await page.evaluate(async () => {
            const description = await document.querySelector(".MjjYud").innerText;
            const searchResults = document.querySelectorAll(".MjjYud");
            const countAll = document.querySelectorAll('.MjjYud').length;
            const countAllvideos = document.querySelectorAll('.uOId3b').length;
            // const searchResultvideos = document.querySelectorAll(".sI5x9c");
            const searchResultimages = document.querySelectorAll(".fgHGvaxenBt__blg fgHGvaxenBt__pqa-ask-btn");
            const searchResultsocial = document.querySelectorAll(".MjjYud");
            const searchResultsite = document.querySelectorAll(".yuRUbf");
            var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
            console.log("The number of results", countAll);
            const maininfo = [];
            const maininfo2 = [];
            const temp = [];
            const site = [];
            const video = [];
            const media = [];
            const social = [];
            const website = [];
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
            const libd = "https://bd.linkedin.com";
            const mfb = "https://m.facebook.com";
            var el = document.getElementById("span");
            searchResultsite.forEach(searchItems => {
                let item = {
                    site: searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1),
                };

                for (var i = 0; i < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; i++) {
                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == fb) {
                        slinkcount = slinkcount + 1;
                    }
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == mfb) {
                        slinkcount = slinkcount + 1;
                    }
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == li) {
                        slinkcount2 = slinkcount2 + 1;
                    }
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == libd) {
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
                for (var j = 0; j < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; j++) {

                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == fb) {
                        let socialitem = {
                            Social_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                            Social_URL: searchItems.querySelector(".MjjYud a").href,
                        };
                        social.push(socialitem);
                    }
                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == mfb) {
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
                    else if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) == libd) {
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
                for (var k = 0; k < searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1).length; k++) {
                    if (searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != fb && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != li && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != tw && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != ig && searchItems.querySelector(".yuRUbf cite").innerText.split(' ', 1) != rd) {
                        let websiteitem = {
                            Website_Title: searchItems.querySelector(".MjjYud h3").innerHTML,
                            Website_URL: searchItems.querySelector(".MjjYud a").href,
                        };
                        website.push(websiteitem);
                    }
                };
                site.push("Search Result Sites Main Domain: ");
                site.push(item);
            });
            let item2 = {
                q: this.v,
                timeTakenInMs: loadTime,
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
                let item = {
                    Title: searchItem.querySelector(".MjjYud h3").innerHTML,
                    URL: searchItem.querySelector(".MjjYud a").href,
                };
                temp.push(item);
            });
            // searchResultvideos.forEach(searchItemss => {
            //     let videoitem = {
            //         Video_Title: searchItemss.querySelector(".uOId3b span").innerHTML,
            //         Video_duration: searchItemss.querySelector('.lR1utd span').innerText,
            //     };

            //     video.push(videoitem);
            // });
            searchResultimages.forEach(searchItemsss => {
                let mediaitem = {
                    media_Title: searchItemsss.querySelector(".fgHGvaxenBt__blg fgHGvaxenBt__pqa-ask-btn a").innerText,
                    media_URL: searchItemsss.querySelector(".fgHGvaxenBt__blg fgHGvaxenBt__pqa-ask-btn a").href,
                };

                media.push(mediaitem);
            });
            maininfo.push("Grouped of All Category");
            maininfo.push("Website Category");
            maininfo.push(website);
            maininfo.push("Social Category");
            maininfo.push(social);
            maininfo.push("Video Category");
            maininfo.push(video);
            maininfo.push("Media Category");
            maininfo.push(media);
            maininfo.push("All Website Main Domains");
            maininfo.push("All Site Results");
            maininfo.push(temp);
            maininfo.push(site);
            return maininfo;
        });
        require("fs").writeFile("database.json", JSON.stringify(results), () => { });
        browser.close();
    }

    scrape("https://google.com");
}