const {browser} = require('protractor');

class BasePage {

    constructor() {}

    // async navigate_to_url(pageUrl) {
    //     await browser.navigate(pageUrl)
    // }

    async teardown() {
        await browser.quit();
    }
}

module.exports = new BasePage();
