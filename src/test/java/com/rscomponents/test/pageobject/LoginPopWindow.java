package com.rscomponents.test.pageobject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static com.rscomponents.test.util.BrowserConfig.driver;

public class LoginPopWindow
{

  public static WebElement newPopWindowUsername()
  {
    return driver.findElement(By.id("loginForm:LoginWidgetAction_username_decorate:LoginWidgetAction_username"));
  }

  public static WebElement newPopWindowPassword()
  {
    return driver.findElement(By.id("loginForm:LoginWidgetAction_password_decorate:LoginWidgetAction_password"));
  }

  public static WebElement newPopWindowLoginButton()
  {
    return driver.findElement(By.id("loginForm:login"));
  }

  public static WebDriver popWindowLoginDetails()
  {
      LoginPage.loginTitle();
      newPopWindowUsername().sendKeys("naren1306");
      newPopWindowPassword().sendKeys("test123");
      newPopWindowLoginButton().click();
      return driver;
  }

}
