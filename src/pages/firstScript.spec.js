const {By, Builder, Browser} = require('selenium-webdriver');


async function run (){
  let driver=await new Builder().forBrowser('chrome').build();
  await driver.get("https://www.google.com.br/")

}

run();