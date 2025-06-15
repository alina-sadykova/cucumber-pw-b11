@Wiki
Feature: Wikipedia App

    Background:
    Given I am on "https://en.wikipedia.org/"
    
    Scenario: Search verification for Cucumber
    When I search for "Cucumber"
    Then I see "Cucumber" in the url
    And I see "Cucumber" in the title
    And I see "Cucumber" in the main heading