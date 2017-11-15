package com.rscomponents.test.pageobject;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import static com.rscomponents.test.util.BrowserConfig.driver;

public class LoginPage
{
  public static WebDriver loginTitle()
  {
    Assert.assertEquals(driver.findElement(By.linkText("Forgotten your username?")).getText(),"Forgotten your username?");
    return driver;
  }

  public static WebElement username()
  {
    return driver.findElement(By.name("username"));
  }

  public static WebElement password()
  {
    return driver.findElement(By.name("j_password"));
  }

  public static WebElement loginButton()
  {
    return driver.findElement(By.name("loginBtn"));
  }
}
