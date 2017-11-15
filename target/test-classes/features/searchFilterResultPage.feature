@SearchFilterResultPage
Feature: As a User, I want to use search filter so that I can do search what i need from the RS Component Website

  Background:
    Given a web browser is at rs components home page "http://uk.rs-online.com/web/"

  Scenario: Invalid track order number should display error notification message
    And entered invalid track order number "2145abcd" in the rs order number search field
    When I click on the track order button
    Then i will be navigate to parcel tracking page
    And i should able to see error notification message "No orders matched your search criteria"

  Scenario: Search for the brand in the search field
    And entered the brand as "microchip" in the search field
    When I click on the search cog
    Then I should able to see "Categories for Microchip" in the microchip brand page

  Scenario: User can search and process the order through quick order feature
    And entered the product code "884-1310" in the rs stock number search field
    When I click on the add to basket button
    Then I will be able to see the checkout page
    And I should able see product the product code "RS Stock No. 884-1310"
