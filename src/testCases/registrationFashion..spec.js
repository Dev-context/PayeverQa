const {element, by, browser} = require("protractor");
const {describe} = require("mocha");
const {enter_url, setFirstName, setlastName} = require("../pages/registration.spec.js");

describe("Registration user with role Fashion ", () => {


    before("openNavigator", () => {
        enter_url("https://commerceos.staging.devpayever.com/registration/fashion");

    })
    it("Fill the fields", () => {
        setFirstName("Testing");
        setlastName("t");
        browser.sleep(2000)

    })
    after("Close webpage", () => { // registration.teardown();

    })

});
