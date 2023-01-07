const { defineConfig } = require("cypress");
const spellCheck = require("./task.js");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      spellCheck(on)
    }
  },
});
