const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
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
    runMode: 2,
    openMode: 0,
  },
});
