@Wiki
Feature: Wikipedia App Verification

  Background:
    Given I am on "https://www.wikipedia.org/"

  Scenario Outline: Search verification for <query>
    When I search for "<query>"
    Then I see "<query>" in the url
    And I see "<query>" in the title
    And I see "<query>" in the main heading

    Examples:
      | query      |
      | Cucumber   |
      | TypeScript |
      | JavaScript |
      | Playwright |
      | Cypress    |