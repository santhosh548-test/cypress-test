const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "ann8w1",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.automationexercise.com/',
    chromeWebSecurity: false,
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/trainingTests'
  },
  video: true,
  screenshotOnRunFailure: true,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  env: {
      grepFilterSpecs: true, // Only load matching test files
    },
});