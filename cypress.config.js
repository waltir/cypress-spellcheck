const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const spellcheck = require("spellcheck-js");
      on('task', {
        spelling(value) {
          let val = null;
          if (value.customword !== undefined && value.customword.length >= 1) {
            const lower = value.customword.map(element => {
              return element.toString().toLowerCase();
            });
            val = spellcheck(value.string.toString().toLowerCase(), false, lower);
          } else {
            val = spellcheck(value.string.toString().toLowerCase());
          }
          const partial = `Text in the ${value.desc} ("${value.string}") `;
          const message = (val !== null && val == true)? `${partial} is spelled correctly` : `${partial} contains a spelling error`;
          return {
            val: val,
            message: message,
            adv: spellcheck(value.string.toString().toLowerCase(), true)
          };
        }
      })
    }
  },
});
