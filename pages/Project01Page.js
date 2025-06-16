import { BasePage } from "./BasePage.js";

class Project01Page extends BasePage {
  constructor(page) {
    super(page);

    // locators
    this.tableHeaders = this.page.locator("#product_table th");
    this.tableRows = this.page.locator("tbody tr");
    this.addProductButton = this.page.locator("#add_product_btn");
    this.totalAmountText = this.page.locator("#total_amount");
    this.modalHeader = this.page.locator("#modal_title");
    this.modalXButton = this.page.locator("button[aria-label='close']");
    this.modalLabels = this.page.locator(".field label");
    this.modalCard = this.page.locator("[class*='DynamicTables_modal__']");
    this.modalContainer = this.page.locator(".modal");
    this.tableContainer = this.page.locator(".table-container");
  }

  // reusable methods
  async clickAddButton() {
    await this.addProductButton.click();
  }
  async clickOnXButton() {
    await this.modalXButton.click();
  }
}
export { Project01Page };
