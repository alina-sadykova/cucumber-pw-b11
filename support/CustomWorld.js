import { World, setWorldConstructor } from "@cucumber/cucumber";

class CustomWorld extends World {
  /* class inherit World (parent) properties we declired in our constructor.
  World requires an argument in constructor, that is why we pass options means an object {} 
  <this> keyword refers to CustomWorld class.
  After we set properties to null we ove to hooks and set their values
  */
  constructor(options) {
    super(options);

    // Declare fixtures
    this.browser = null;
    this.context = null;
    this.page = null;

    // Declare POM fixtures
    this.basePage = null;
    this.wikiSearchPage = null;
    this.tgBasePage = null;
    this.tgFrontendTestingPage = null;
    this.project01Page = null;
    this.tgLoginPage = null;
  }
}
// setting new world constructor to be my custom constructor
setWorldConstructor(CustomWorld);
