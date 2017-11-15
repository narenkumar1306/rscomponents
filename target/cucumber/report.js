$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("endToEndUserJourney.feature");
formatter.feature({
  "line": 2,
  "name": "As a User, I want to go through end to end tests so that I can be familiar with RS Component website",
  "description": "",
  "id": "as-a-user,-i-want-to-go-through-end-to-end-tests-so-that-i-can-be-familiar-with-rs-component-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEndTest"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a web browser is at rs components home page \"http://uk.rs-online.com/web/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://uk.rs-online.com/web/",
      "offset": 45
    }
  ],
  "location": "EndToEndUserJourney.aWebBrowserIsAtRsComponentsHomePage(String)"
});
formatter.result({
  "duration": 5898425496,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login user should navigate to payment page to process the order",
  "description": "",
  "id": "as-a-user,-i-want-to-go-through-end-to-end-tests-so-that-i-can-be-familiar-with-rs-component-website;login-user-should-navigate-to-payment-page-to-process-the-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "enters the username as \"naren1306\" and the password as \"test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "clicks on the login button to login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on New products menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "selects the pi-top laptop from new products list",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "confirm the selected product and units",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "clicks on the add to basket button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on the view basket button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I will be able to see the checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I clicks on the checkout securely button to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should able to navigate to the payments page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "naren1306",
      "offset": 24
    },
    {
      "val": "test123",
      "offset": 56
    }
  ],
  "location": "EndToEndUserJourney.entersTheUsernameAsAndThePasswordAs(String,String)"
});
formatter.result({
  "duration": 2161806407,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.clicksOnTheLoginButtonToLogin()"
});
formatter.result({
  "duration": 1769872290,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.clicksOnNewProductsMenu()"
});
formatter.result({
  "duration": 2547557182,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.selectsThePiTopLaptopFromNewProductsList()"
});
formatter.result({
  "duration": 3353754660,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.confirmTheSelectedProductAndUnits()"
});
formatter.result({
  "duration": 176637587,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.clicksOnTheAddToBasketButton()"
});
formatter.result({
  "duration": 368849816,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.clicksOnTheViewBasketButton()"
});
formatter.result({
  "duration": 4634603282,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iWillBeAbleToSeeTheCheckoutPage()"
});
formatter.result({
  "duration": 213242737,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iClicksOnTheCheckoutSecurelyButtonToCheckout()"
});
formatter.result({
  "duration": 4802174273,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iShouldAbleToNavigateToThePaymentsPage()"
});
formatter.result({
  "duration": 115246969,
  "status": "passed"
});
formatter.after({
  "duration": 460739213,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a web browser is at rs components home page \"http://uk.rs-online.com/web/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://uk.rs-online.com/web/",
      "offset": 45
    }
  ],
  "location": "EndToEndUserJourney.aWebBrowserIsAtRsComponentsHomePage(String)"
});
formatter.result({
  "duration": 4638835542,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User will be asking to login to process the order",
  "description": "",
  "id": "as-a-user,-i-want-to-go-through-end-to-end-tests-so-that-i-can-be-familiar-with-rs-component-website;user-will-be-asking-to-login-to-process-the-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "clicks on New products menu",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "selects the pi-top laptop from new products list",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "confirm the selected product and units",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "clicks on the add to basket button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "clicks on the view basket button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I will be able to see the checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I clicks on the checkout securely button to checkout",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "should able to see a pop window asking to enter the login details",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I should able to navigate to the payments page",
  "keyword": "And "
});
formatter.match({
  "location": "EndToEndUserJourney.clicksOnNewProductsMenu()"
});
formatter.result({
  "duration": 2102902985,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.selectsThePiTopLaptopFromNewProductsList()"
});
formatter.result({
  "duration": 2197813059,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.confirmTheSelectedProductAndUnits()"
});
formatter.result({
  "duration": 111217991,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.clicksOnTheAddToBasketButton()"
});
formatter.result({
  "duration": 271015298,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.clicksOnTheViewBasketButton()"
});
formatter.result({
  "duration": 5960210545,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iWillBeAbleToSeeTheCheckoutPage()"
});
formatter.result({
  "duration": 300990537,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iClicksOnTheCheckoutSecurelyButtonToCheckout()"
});
formatter.result({
  "duration": 365769304,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.shouldAbleToSeeAPopWindowAskingToEnterTheLoginDetails()"
});
formatter.result({
  "duration": 419048924,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iShouldAbleToNavigateToThePaymentsPage()"
});
formatter.result({
  "duration": 1541384018,
  "status": "passed"
});
formatter.after({
  "duration": 325628656,
  "status": "passed"
});
formatter.uri("searchFilterResultPage.feature");
formatter.feature({
  "line": 2,
  "name": "As a User, I want to use search filter so that I can do search what i need from the RS Component Website",
  "description": "",
  "id": "as-a-user,-i-want-to-use-search-filter-so-that-i-can-do-search-what-i-need-from-the-rs-component-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SearchFilterResultPage"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a web browser is at rs components home page \"http://uk.rs-online.com/web/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://uk.rs-online.com/web/",
      "offset": 45
    }
  ],
  "location": "EndToEndUserJourney.aWebBrowserIsAtRsComponentsHomePage(String)"
});
formatter.result({
  "duration": 4810634011,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Invalid track order number should display error notification message",
  "description": "",
  "id": "as-a-user,-i-want-to-use-search-filter-so-that-i-can-do-search-what-i-need-from-the-rs-component-website;invalid-track-order-number-should-display-error-notification-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "entered invalid track order number \"2145abcd\" in the rs order number search field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on the track order button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i will be navigate to parcel tracking page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i should able to see error notification message \"No orders matched your search criteria\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2145abcd",
      "offset": 36
    }
  ],
  "location": "EndToEndUserJourney.enteredInvalidTrackOrderNumberInTheRsOrderNumberSearchField(String)"
});
formatter.result({
  "duration": 156554774,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iClickOnTheTrackOrderButton()"
});
formatter.result({
  "duration": 1537875919,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iWillBeNavigateToParcelTrackingPage()"
});
formatter.result({
  "duration": 132555595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No orders matched your search criteria",
      "offset": 49
    }
  ],
  "location": "EndToEndUserJourney.iShouldAbleToSeeErrorNotificationMessage(String)"
});
formatter.result({
  "duration": 52372442,
  "status": "passed"
});
formatter.after({
  "duration": 423426645,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a web browser is at rs components home page \"http://uk.rs-online.com/web/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://uk.rs-online.com/web/",
      "offset": 45
    }
  ],
  "location": "EndToEndUserJourney.aWebBrowserIsAtRsComponentsHomePage(String)"
});
formatter.result({
  "duration": 4495833535,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search for the brand in the search field",
  "description": "",
  "id": "as-a-user,-i-want-to-use-search-filter-so-that-i-can-do-search-what-i-need-from-the-rs-component-website;search-for-the-brand-in-the-search-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "entered the brand as \"microchip\" in the search field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on the search cog",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should able to see \"Categories for Microchip\" in the microchip brand page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "microchip",
      "offset": 22
    }
  ],
  "location": "EndToEndUserJourney.enteredTheBrandAsInTheSearchField(String)"
});
formatter.result({
  "duration": 92055969,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iClickOnTheSearchCog()"
});
formatter.result({
  "duration": 3297149274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Categories for Microchip",
      "offset": 22
    }
  ],
  "location": "EndToEndUserJourney.iShouldAbleToSeeInTheMicrochipBrandPage(String)"
});
formatter.result({
  "duration": 94644717,
  "status": "passed"
});
formatter.after({
  "duration": 456861992,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a web browser is at rs components home page \"http://uk.rs-online.com/web/\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://uk.rs-online.com/web/",
      "offset": 45
    }
  ],
  "location": "EndToEndUserJourney.aWebBrowserIsAtRsComponentsHomePage(String)"
});
formatter.result({
  "duration": 4633076926,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User can search and process the order through quick order feature",
  "description": "",
  "id": "as-a-user,-i-want-to-use-search-filter-so-that-i-can-do-search-what-i-need-from-the-rs-component-website;user-can-search-and-process-the-order-through-quick-order-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "entered the product code \"884-1310\" in the rs stock number search field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on the add to basket button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I will be able to see the checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I should able see product the product code \"RS Stock No. 884-1310\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "884-1310",
      "offset": 26
    }
  ],
  "location": "EndToEndUserJourney.enteredTheProductCodeInTheRsStockNumberSearchField(String)"
});
formatter.result({
  "duration": 113684687,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iClickOnTheAddToBasketButton()"
});
formatter.result({
  "duration": 4454796299,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndUserJourney.iWillBeAbleToSeeTheCheckoutPage()"
});
formatter.result({
  "duration": 293074848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RS Stock No. 884-1310",
      "offset": 44
    }
  ],
  "location": "EndToEndUserJourney.iShouldAbleSeeProductTheProductCode(String)"
});
formatter.result({
  "duration": 32865191,
  "status": "passed"
});
formatter.after({
  "duration": 350235693,
  "status": "passed"
});
});