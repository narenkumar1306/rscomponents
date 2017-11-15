package com.rscomponents.test.pageobject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static com.rscomponents.test.util.BrowserConfig.driver;
import static com.rscomponents.test.util.Waiter.SMALL_TIMEOUT_SEC;

public class TrackingPage
{
  public static WebDriver parcelTracking()
  {
    WebDriverWait wait = new WebDriverWait(driver, SMALL_TIMEOUT_SEC);
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".pageTitleBlack")));
    Assert.assertEquals(driver.findElement(By.cssSelector(".pageTitleBlack")).getText(),"Parcel tracking");
    return driver;

  }

  public static WebElement errorMessageText()
  {
    return driver.findElement(By.className("errorMessageText"));
  }
}
