package com.rscomponents.test.pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import static com.rscomponents.test.util.BrowserConfig.driver;

public class BrandPage
{
  public static WebElement brandCategoryTitle()
  {
    return driver.findElement(By.className("categoryListingTitle"));
  }
}

