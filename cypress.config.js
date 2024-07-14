const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  videoCompression: false,
  chromeWebSecurity: false,
  viewportWidth: 1800,
  viewportHeight: 900,
  defaultCommandTimeout: 30000,
  requestTimeout: 80000,
  env: {
    url: `https://site.getnet.com.br`
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,feature,tsx}',
  },
})
