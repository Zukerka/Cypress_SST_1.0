const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, // to stop running tests automatically after any change is made and saved
    defaultCommandTimeout: 5000, // to set up timeout globally
    baseUrl: 'https://sst2-staging.herokuapp.com', 
    viewportWidth: 1325, 
    viewportHeight: 880,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
