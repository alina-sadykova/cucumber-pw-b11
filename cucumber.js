// core file - cucumber's own runner where we set all configurations

module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: ["steps/**/*.js", "support/**/*.js"],
    formatOptions: {
      snippetInterface: "async-await",
      colorsEnabled: true,
    },
    // Define all the reports to be generated
    format: [
      // to share with a manager in a readable format
      "html:reports/cucumber-report.html",
      // for CI/CD
      "junit:reports/cucumber-report.xml",
      "@cucumber/pretty-formatter",
    ],
    /* dryRyn: true will check all my feature files and provide code-snippets 
    for the unimplemented gherkin steps without execution */
    dryRun: false,
    tags: "@DynamicTables",
    // tags: "", // "" run everything
  },
};
