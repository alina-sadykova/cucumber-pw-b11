import { BasePage } from "./BasePage.js";

class WikiSearchPage extends BasePage {
  constructor(page) {
    super(page);

    // locators
    this.searchInput = this.page.locator("#searchInput");
  }

  // reusable methods
  async search(str) {
    await this.searchInput.fill(str);
    await this.page.keyboard.press("Enter");
  }
}
export { WikiSearchPage };
