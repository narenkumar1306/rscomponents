package com.rscomponents.test.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import cucumber.api.java.Before;

public class BrowserConfig
{
  public static WebDriver driver;

  @Before
  public static void openBrowser(String browserType) throws MalformedURLException
  {
    if(browserType.equalsIgnoreCase("firefox"))
    {
      System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "/geckodriver");
      driver = new FirefoxDriver();
    } else
    {
      throw new IllegalArgumentException("Unknown Browser Driver" + browserType);
    }
    driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
  }

  public static String getUrl()
  {
    return "http://uk.rs-online.com/web/";
  }
}
