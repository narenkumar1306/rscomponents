package com.rscomponents.test.pageobject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static com.rscomponents.test.util.BrowserConfig.driver;
import static com.rscomponents.test.util.Waiter.SMALL_TIMEOUT_SEC;

public class NewProductPage
{
  public static WebDriver newProductTitle()
  {
    WebDriverWait wait = new WebDriverWait(driver, SMALL_TIMEOUT_SEC);
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("heading-border-bold-btm")));
    Assert.assertEquals(driver.findElement(By.className("heading-border-bold-btm")).getText(),"New Products");
    return driver;
  }

  public static WebElement selectProduct()
  {
    return driver.findElement(By.xpath("//*[@title='Pi -Top Laptop']"));
  }

  public static WebDriver selectedProductAndUnits()
  {
    Assert.assertEquals(driver.findElement(By.xpath("//*[@title='Buy Pi-Top products online']")).getAttribute("alt"),"Pi-Top");
    Assert.assertEquals(driver.findElement(By.className("cartInput")).getAttribute("value"),"1");
    return driver;
  }

  public static WebElement addToBasketButton()
  {
    return driver.findElement(By.id("addToCartForm_39226034:addToOrder"));
  }

  public static WebElement viewBasketButton()
  {
    return driver.findElement(By.xpath("//*[@alt='View Basket']"));
  }
}
