package com.rscomponents.test.pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import static com.rscomponents.test.util.BrowserConfig.driver;

public class HomePage
{

  public static WebElement searchField()
  {
    return driver.findElement(By.id("searchTerm"));
  }

  public static WebElement searchFieldCog()
  {
    return driver.findElement(By.id("btnSearch"));
  }

  public static WebElement login()
  {
    return driver.findElement(By.cssSelector(".loginName > a:nth-child(1)"));
  }

  public static WebElement quickOrderSearchField()
  {
    return driver.findElement(By.name("stocknum"));
  }

  public static WebElement quickOrderAddToBasketButton()
  {
    return driver.findElement(By.id("quickOrderBtn"));
  }

  public static WebElement trackAnOrderSearchField()
  {
    return driver.findElement(By.name("refNumber"));
  }

  public static WebElement trackOrderButton()
  {
    return driver.findElement(By.xpath("//*[@value='Track Order']"));
  }

  public static WebElement newProductsMenu()
  {
    return driver.findElement(By.xpath("//*[@title='New Products']"));
  }
}


