const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter:"mochawesome",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

