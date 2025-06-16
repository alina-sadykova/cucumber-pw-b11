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
        And I see the "Total = $2,300" text displayed

    @Regression
    Scenario: Test Case 02 - Validate the Add New Product modal
        When I click on the "ADD PRODUCT" button
        Then I see the "Add New Product" modal with its heading
        And I see the "X" button is enabled
        
        And I see the "Please select the quantity" label
        And I see the "Quantity" input box is enabled
        And I see the "Please enter the name of the product" label
        And I see the "Product" input box is enabled
        And I see the "Please enter the price of the product" label
        And I see the "Price" input box is enabled
        And I see the "SUBMIT" button is enabled

    @Regression
    Scenario: Test Case 03 - Validate the Add New Product modal X button
        When I click on the “ADD PRODUCT” button
        Then I should see the “Add New Product” modal with its heading
        When I click on the “X” button
        Then I should not see the “Add New Product” modal
            

