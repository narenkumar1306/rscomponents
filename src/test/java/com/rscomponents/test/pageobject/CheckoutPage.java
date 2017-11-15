package com.rscomponents.test.pageobject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static com.rscomponents.test.util.BrowserConfig.driver;
import static com.rscomponents.test.util.Waiter.SMALL_TIMEOUT_SEC;

public class CheckoutPage
{
  public static WebElement checkoutSecurelyButton()
  {
    return driver.findElement(By.id("checkoutSecurelyAndPuchBtn"));
  }

  public static WebDriver myBasketTitle()
  {
    WebDriverWait wait = new WebDriverWait(driver, SMALL_TIMEOUT_SEC);
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("pageTitleBlack")));
    Assert.assertEquals(driver.findElement(By.className("pageTitleBlack")).getText(),"My basket");
    return driver;
  }

  public static WebElement stockRefNo()
  {
    return driver.findElement(By.cssSelector(".descriptionTd > div:nth-child(2)"));
  }

}
