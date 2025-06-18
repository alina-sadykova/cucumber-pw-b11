import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

Given("I am on the dynamic tables page", async function () {
  await this.basePage.goto(
    "https://techglobal-training.com/frontend/dynamic-tables"
  );
});

Then("I see the {string} heading", async function (query) {
  await expect(
    await this.page.getByRole("heading", { name: query }).first()
  ).toBeVisible();
});

Then("I see the table with the headers below", async function (tableData) {
  // get an array of expected headers
  const expectedHeaders = tableData.rawTable[0];

  // get an array of actual headers
  const actualHeaders = await this.project01Page.tableHeaders.allTextContents();

  for (let i = 0; i < actualHeaders.length; i++) {
    expect(actualHeaders[i]).toEqual(expectedHeaders[i]);
  }
});

Then("I see the table with the rows below", async function (tableData) {
  // convert table data from gherkin format into an array
  const expectedRows = tableData.rawTable;
  const actualRows = [];

  const countRows = await this.project01Page.tableRows.count();
  for (let i = 0; i < countRows; i++) {
    const row = this.project01Page.tableRows.nth(i);
    const rowCells = await row.locator("td").allTextContents();
    actualRows.push(rowCells.map((cell) => cell.trim()));
  }

  expect(actualRows).toEqual(expectedRows);
});

Then("I see the {string} button is enabled", async function (elText) {
  await expect(
    await this.page.getByRole("button", { name: elText })
  ).toBeEnabled();
});

Then("I should see the {string} text displayed", async function (text) {
  await expect(this.project01Page.totalAmountText).toHaveText(text);
});

// Test Case 02
When("I click on the {string} button", async function (buttonName) {
  switch (buttonName) {
    case "ADD PRODUCT":
      await this.project01Page.clickAddButton();
      break;
    case "close":
      await this.project01Page.clickOnXButton(buttonName);
      break;
    case "SUBMIT":
      await this.project01Page.clickSubmitButton();
      break;
    default:
      throw new Error(`No button with name ${buttonName}`);
  }
});

Then("I see the {string} modal with its heading", async function (heading) {
  await expect(
    await this.page.getByRole("heading", { name: heading })
  ).toBeVisible();
});

When("I see the {string} button", async function (buttonText) {
  const xButton = this.page.getByRole("button", {
    name: buttonText,
  });

  await expect(xButton).toBeEnabled();
});

Then("I see the {string} label", async function (labelText) {
  const label = this.page.getByText(labelText);
  await expect(label).toBeVisible();
});

Then("I see the corresponding input box is enabled", async function () {
  await expect(this.project01Page.modalProductQuantityInput).toBeEnabled();
  await expect(this.project01Page.modalProductNameInput).toBeEnabled();
  await expect(this.project01Page.modalProductPriceInput).toBeEnabled();
});

// Test Case 03
Then(
  "I should see the {string} modal with its heading",
  async function (headingText) {
    const modalHeading = this.project01Page.modalCard.locator("h2");
    await expect(modalHeading).toHaveText(headingText);
  }
);

Then('I should not see the "Add New Product" modal', async function () {
  await expect(this.project01Page.modalContainer).toBeHidden();
});

// Test Case 04
When("I enter the quantity as {string}", async function (quantity) {
  await this.project01Page.enterProductQuantity(quantity);
  await expect(this.project01Page.modalProductQuantityInput).toHaveValue(
    quantity
  );
});

When("I enter the product name as {string}", async function (nameOfProduct) {
  await this.project01Page.enterProductName(nameOfProduct);
  await expect(this.project01Page.modalProductNameInput).toHaveValue(
    nameOfProduct
  );
});

When("I enter the price as {string}", async function (priceOfProduct) {
  await this.project01Page.enterProductPrice(priceOfProduct);
  await expect(this.project01Page.modalProductPriceInput).toHaveValue(
    priceOfProduct
  );
});

Then(
  "I should see the table with the new row below",
  async function (tableData) {
    const expectedNewRow = tableData.rawTable[0];
    await this.page.waitForSelector("tbody tr");
    const actualRowCount = await this.project01Page.tableRows.count();

    const lastRow = this.project01Page.tableRows.nth(actualRowCount - 1);
    const newRowCells = await lastRow.locator("td").allTextContents();
    expect(newRowCells.map((cell) => cell.trim())).toEqual(expectedNewRow);
  }
);
