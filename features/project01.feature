@DynamicTables 
Feature: Dynamic Tables Verification

    Feature Description - Validate the default content of the inventory table

    Background: 
        Given I am on "https://techglobal-training.com/frontend/dynamic-tables"

    @Regression 
    Scenario: Test Case 01 - Validate the default content of the inventory table
        Then I see the "Inventory" heading
        And I see the table with the headers below
            | Quantity | Product | Price $ | Total $ |  
        And I see the table with the rows below
            | 1 | iPhone  | 1,000 | 1,000 |  
            | 3 | Airpods | 100   | 300   |  
            | 2 | iPad    | 500   | 1,000 |  
        And I see the "ADD PRODUCT" button is enabled
        And I should see the "Total = $2,300" text displayed

    @Regression 
    Scenario: Test Case 02 - Validate the Add New Product modal
        When I click on the "ADD PRODUCT" button
        Then I see the "Add New Product" modal with its heading
        And I see the "close" button is enabled
        And I see the "Please select the quantity" label
        And I see the corresponding input box is enabled 
        And I see the "Please enter the name of the product" label
        And I see the corresponding input box is enabled
        And I see the "Please enter the price of the product" label
        And I see the corresponding input box is enabled
        And I see the "SUBMIT" button is enabled

    @Regression
    Scenario: Test Case 03 - Validate the Add New Product modal X button
        When I click on the "ADD PRODUCT" button
        Then I should see the "Add New Product" modal with its heading
        When I click on the "close" button
        Then I should not see the "Add New Product" modal

    @Regression 
    Scenario: Test Case 04 - Validate the new product added
        When I click on the "ADD PRODUCT" button
        And I enter the quantity as "2"
        And I enter the product name as "Mouse"
        And I enter the price as "100"
        And I click on the "SUBMIT" button
        Then I should see the table with the new row below
            | 2 | Mouse | 100 | 200 |
        And I should see the "Total = $2,500" text displayed

