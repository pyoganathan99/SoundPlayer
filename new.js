const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({ headless: false, defaultViewport: null, });
    const page = await browser.newPage();
    await page.goto('https://tinder.com');

    // await sleep(1000 * 60 * 2);

    // while (true) {
    //     page.keyboard.press('ArrowRight');
    //     await sleep(2000);
    // }

})();

function sleep(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}