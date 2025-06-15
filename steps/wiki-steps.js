import { Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

When("I search for {string}", async function (query) {
  await this.wikiSearchPage.search(query);
});

Then("I see {string} in the url", async function (query) {
  await this.basePage.waitForUrlToContain(query);
  expect(this.page.url()).toContain(query);
});

Then("I see {string} in the title", async function (query) {
  expect(await this.wikiSearchPage.getTitle()).toContain(query);
});

Then("I see {string} in the main heading", async function (query) {
  await expect(
    await this.page.getByRole("heading", { name: query }).first()
  ).toBeVisible();
});
