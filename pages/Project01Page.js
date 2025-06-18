import { BasePage } from "./BasePage.js";

class Project01Page extends BasePage {
  constructor(page) {
    super(page);

    // locators
    this.tableHeaders = this.page.locator("#product_table th");
    this.tableRows = this.page.locator("tbody tr");
    this.totalAmountText = this.page.locator("#total_amount");

    this.addProductButton = this.page.locator("#add_product_btn");
    this.modalXButton = this.page.locator("button[aria-label='close']");
    this.modalSubmitButton = this.page.locator("#submit");

    this.modalHeader = this.page.locator("#modal_title");
    this.modalLabels = this.page.locator(".field label");

    this.modalProductQuantityInput = this.page.locator("#quantity");
    this.modalProductNameInput = this.page.locator("#product");
    this.modalProductPriceInput = this.page.locator("#price");

    this.modalCard = this.page.locator("[class*='DynamicTables_modal__']");
    this.modalContainer = this.page.locator(".modal");
    this.tableContainer = this.page.locator(".table-container");
  }

  // reusable methods
  async clickAddButton() {
    await this.addProductButton.click();
  }
  async clickOnXButton(buttonText) {
    await this.page
      .getByRole("button", {
        name: buttonText,
      })
      .click();
  }
  async clickSubmitButton() {
    await this.modalSubmitButton.click();
  }
  async enterProductQuantity(quantity) {
    await this.modalProductQuantityInput.fill(quantity);
  }
  async enterProductName(nameOfProduct) {
    await this.modalProductNameInput.fill(nameOfProduct);
  }
  async enterProductPrice(priceOfProduct) {
    await this.modalProductPriceInput.fill(priceOfProduct);
  }
  async enterNewProduct(qiantity, nameOfProduct, priceOfProduct) {
    await this.enterProductQuantity(qiantity);
    await this.enterProductName(nameOfProduct);
    await this.enterProductPrice(priceOfProduct);
  }
}
export { Project01Page };
