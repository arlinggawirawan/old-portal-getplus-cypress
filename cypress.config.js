const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gkrfpd',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
