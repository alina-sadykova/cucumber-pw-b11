import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { BasePage } from "../pages/BasePage.js";
import { Project01Page } from "../pages/Project01Page.js";
import { TGBasePage } from "../pages/tg-app-pages/TGBasePage.js";
import { TGFrontendTestingPage } from "../pages/tg-app-pages/TGFrontendTestingPage.js";
import { TGLoginPage } from "../pages/tg-app-pages/TGLoginPage.js";
import { WikiSearchPage } from "../pages/WikiSearchPage.js";
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

  this.basePage = new BasePage(this.page);
  this.wikiSearchPage = new WikiSearchPage(this.page);
  this.tgBasePage = new TGBasePage(this.page);
  this.tgFrontendTestingPage = new TGFrontendTestingPage(this.page);
  this.project01Page = new Project01Page(this.page);
  this.tgLoginPage = new TGLoginPage(this.page);
});
// after each scenario
After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await this.browser?.close();
});
