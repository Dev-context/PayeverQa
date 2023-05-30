const {element, by, browser} = require("protractor");


class RegistrationPage {

  

    setFirstName(name) { 
        element(by.xpath('//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/peb-form-background/div/two-column-form/div/peb-form-field-input[1]/div/div/span')).sendKeys(name);
       
    }

    setlastName(lastName) {
        element(by.xpath("//input[@class='ng-tns-c170-18 ng-pristine ng-invalid ng-touched']")).sendKeys(lastName);
    }


    enter_url(Urlpage) {
        browser.get(Urlpage)
    }


}


module.exports = new RegistrationPage();
