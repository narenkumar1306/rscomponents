@EndToEndTest
Feature: As a User, I want to go through end to end tests so that I can be familiar with RS Component website

  Background:
    Given a web browser is at rs components home page "http://uk.rs-online.com/web/"

  Scenario: Login user should navigate to payment page to process the order
    And enters the username as "naren1306" and the password as "test123"
    And clicks on the login button to login
    And clicks on New products menu
    And selects the pi-top laptop from new products list
    And confirm the selected product and units
    And clicks on the add to basket button
    And clicks on the view basket button
    And I will be able to see the checkout page
    When I clicks on the checkout securely button to checkout
    Then I should able to navigate to the payments page

  Scenario: User will be asking to login to process the order
    And clicks on New products menu
    And selects the pi-top laptop from new products list
    And confirm the selected product and units
    And clicks on the add to basket button
    And clicks on the view basket button
    And I will be able to see the checkout page
    When I clicks on the checkout securely button to checkout
    Then should able to see a pop window asking to enter the login details
    And I should able to navigate to the payments page



















