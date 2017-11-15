package com.rscomponents.test.pageobject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static com.rscomponents.test.util.BrowserConfig.driver;
import static com.rscomponents.test.util.Waiter.*;

public class PaymentPage
{
  public static WebDriver secureCheckoutHeader()
  {
    WebDriverWait wait = new WebDriverWait(driver, SMALL_TIMEOUT_SEC);
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".checkoutHeader")));
    Assert.assertEquals(driver.findElement(By.cssSelector(".checkoutHeader")).getText(),"Secure checkout");
   return driver;
  }
}
