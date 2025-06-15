import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { chromium } from "@playwright/test";

// This file runs before/after anything else in the steps folder
setDefaultTimeout(60000);

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: false,
  });
});
// before each scenario
Before(async function () {
  this.browser = global.browser;
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});
// after each scenario
After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await this.browser?.close();
});
