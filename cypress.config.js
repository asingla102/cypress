const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 50000,
  responseTimeout: 60000
});
