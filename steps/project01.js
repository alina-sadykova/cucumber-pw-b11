import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

Given(/^I am on the dynamic tables page$/, async function () {
  await this.basePage.goto(
    "https://techglobal-training.com/frontend/dynamic-tables"
  );
});

Then("I see the {string} heading", async function (query) {
  await expect(
    await this.page.getByRole("heading", { name: query }).first()
  ).toBeVisible();
});

Then(/^I see the table with the headers below$/, async function (tableData) {
  // convert table data from gherkin format into an array and grab the first row
  const expectedHeaders = tableData.raw()[0];

  // get an array of actual headers
  const actualHeaders = await this.project01Page.tableHeaders.allTextContents();
  expect(actualHeaders.map((header) => header.trim())).toEqual(expectedHeaders);
});

Then(/^I see the table with the rows below$/, async function (tableData) {
  // convert table data from gherkin format into an array
  const expectedRows = tableData.raw();

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

Then("I see the {string} text displayed", async function (text) {
  await expect(this.project01Page.totalAmountText).toHaveText(text);
});

// Test Case 02
When("I click on the {string} button", async function (buttonName) {
  if (buttonName == "ADD PRODUCT") {
    await this.project01Page.clickAddButton();
  }
});

Then("I see the {string} modal with its heading", async function (heading) {
  await expect(
    await this.page.getByRole("heading", { name: heading })
  ).toBeVisible();
});

When("I see the {string} button", async function (buttonText) {
  //   await expect(this.project01Page.modalCard).toBeVisible();

  //   const xButton = this.project01Page.modalXButton;

  //   const xButton = this.page.getByRole("button", {
  //     name: "close",
  //   });

  await this.page.waitForSelector("button[aria-label='close']", {
    state: "visible",
  });
  //   await expect(xButton).toBeEnabled();

  //   await expect(this.project01Page.modalXButton).toBeEnabled();
});

Then("I see the {string} label", async function (labelText) {
  const label = this.page.getByText(labelText);
  await expect(label).toBeVisible();
});

Then("I see the {string} input box is enabled", async function (inputLabel) {
  const input = this.page.getByLabel(inputLabel);
  await expect(input).toBeEnabled();
});

// Test Case 03

When(/^I click on the “ADD PRODUCT” button$/, async function () {
  await this.project01Page.clickAddButton();
});

Then(
  /^I should see the "Add New Product" modal with its heading$/,
  async function () {
    const modalHeading = this.project01Page.modalCard.locator("h2");
    await expect(modalHeading).toHaveText("Add New Product");
  }
);

When(/^I click on the “X” button$/, async function () {
  await this.project01Page.clickOnXButton();
});

Then(/^I should not see the "Add New Product" modal$/, async function () {
  await expect(this.project01Page.modalContainer).toBeHidden();
});
