import { World, setWorldConstructor } from "@cucumber/cucumber";

class CustomWorld extends World {
  constructor(options) {
    super(options);

    // Declare fixtures
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}
// setting new world constructor to be my custom constructor
setWorldConstructor(CustomWorld);
