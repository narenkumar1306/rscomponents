package com.rscomponents.test.stepdefintions;

import com.rscomponents.test.pageobject.BrandPage;
import com.rscomponents.test.pageobject.CheckoutPage;
import com.rscomponents.test.pageobject.HomePage;
import com.rscomponents.test.pageobject.LoginPage;
import com.rscomponents.test.pageobject.LoginPopWindow;
import com.rscomponents.test.pageobject.NewProductPage;
import com.rscomponents.test.pageobject.PaymentPage;
import com.rscomponents.test.pageobject.TrackingPage;
import com.rscomponents.test.util.BrowserConfig;
import org.junit.Assert;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static com.rscomponents.test.util.BrowserConfig.driver;

public class EndToEndUserJourney
{
  @Given("^a web browser is at rs components home page \"([^\"]*)\"$")
  public void aWebBrowserIsAtRsComponentsHomePage(String Url) throws Throwable
  {
    BrowserConfig.openBrowser("firefox");
    driver.get(Url);
  }

  @And("^enters the username as \"([^\"]*)\" and the password as \"([^\"]*)\"$")
  public void entersTheUsernameAsAndThePasswordAs(String username, String password) throws Throwable
  {
    HomePage.login().click();
    LoginPage.username().sendKeys(username);
    LoginPage.password().sendKeys(password);
  }

  @And("^clicks on the login button to login$")
  public void clicksOnTheLoginButtonToLogin() throws Throwable
  {
    LoginPage.loginTitle();
    LoginPage.loginButton().click();
  }

  @And("^clicks on New products menu$")
  public void clicksOnNewProductsMenu() throws Throwable
  {
    HomePage.newProductsMenu().click();
    NewProductPage.newProductTitle();
  }

  @And("^selects the pi-top laptop from new products list$")
  public void selectsThePiTopLaptopFromNewProductsList() throws Throwable
  {
    NewProductPage.selectProduct().click();
  }

  @And("^confirm the selected product and units$")
  public void confirmTheSelectedProductAndUnits() throws Throwable
  {
     NewProductPage.selectedProductAndUnits();
  }


  @And("^clicks on the add to basket button$")
  public void clicksOnTheAddToBasketButton() throws Throwable
  {
    NewProductPage.addToBasketButton().click();
  }

  @And("^clicks on the view basket button$")
  public void clicksOnTheViewBasketButton() throws Throwable
  {
    NewProductPage.viewBasketButton().click();
  }

  @Then("^I will be able to see the checkout page$")
  public void iWillBeAbleToSeeTheCheckoutPage() throws Throwable
  {
    CheckoutPage.myBasketTitle();
    Assert.assertTrue(CheckoutPage.checkoutSecurelyButton().isDisplayed());
  }


  @When("^I clicks on the checkout securely button to checkout$")
  public void iClicksOnTheCheckoutSecurelyButtonToCheckout() throws Throwable
  {
    CheckoutPage.checkoutSecurelyButton().click();
  }

  @Then("^I should able to navigate to the payments page$")
  public void iShouldAbleToNavigateToThePaymentsPage() throws Throwable
  {
    PaymentPage.secureCheckoutHeader();
  }

  @And("^should able to see a pop window asking to enter the login details$")
  public void shouldAbleToSeeAPopWindowAskingToEnterTheLoginDetails() throws Throwable
  {
    LoginPopWindow.popWindowLoginDetails();
  }

  @And("^entered invalid track order number \"([^\"]*)\" in the rs order number search field$")
  public void enteredInvalidTrackOrderNumberInTheRsOrderNumberSearchField(String invalidtrackno) throws Throwable
  {
    HomePage.trackAnOrderSearchField().sendKeys(invalidtrackno);
  }

  @When("^I click on the track order button$")
  public void iClickOnTheTrackOrderButton() throws Throwable
  {
    HomePage.trackOrderButton().click();
  }

  @Then("^i will be navigate to parcel tracking page$")
  public void iWillBeNavigateToParcelTrackingPage() throws Throwable
  {
    TrackingPage.parcelTracking();
  }

  @And("^i should able to see error notification message \"([^\"]*)\"$")
  public void iShouldAbleToSeeErrorNotificationMessage(String errorMessage) throws Throwable
  {
    Assert.assertEquals(TrackingPage.errorMessageText().getText(),errorMessage);
  }

  @And("^entered the brand as \"([^\"]*)\" in the search field$")
  public void enteredTheBrandAsInTheSearchField(String brandname) throws Throwable
  {
    HomePage.searchField().sendKeys(brandname);
  }

  @When("^I click on the search cog$")
  public void iClickOnTheSearchCog() throws Throwable
  {
    HomePage.searchFieldCog().click();
  }


  @Then("^I should able to see \"([^\"]*)\" in the microchip brand page$")
  public void iShouldAbleToSeeInTheMicrochipBrandPage(String brandcategory) throws Throwable
  {
    Assert.assertEquals(BrandPage.brandCategoryTitle().getText(),brandcategory);
  }

  @And("^entered the product code \"([^\"]*)\" in the rs stock number search field$")
  public void enteredTheProductCodeInTheRsStockNumberSearchField(String stockrefno) throws Throwable
  {
    HomePage.quickOrderSearchField().sendKeys(stockrefno);
  }

  @When("^I click on the add to basket button$")
  public void iClickOnTheAddToBasketButton() throws Throwable
  {
    HomePage.quickOrderAddToBasketButton().click();
  }

  @And("^I should able see product the product code \"([^\"]*)\"$")
  public void iShouldAbleSeeProductTheProductCode(String stockrefno) throws Throwable
  {
    Assert.assertEquals(CheckoutPage.stockRefNo().getText(),stockrefno);
  }

  @After
  public void tearDown()
  {
    if(driver != null)
    {
      driver.quit();
    }
  }

}


