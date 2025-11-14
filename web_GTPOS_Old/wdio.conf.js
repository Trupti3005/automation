export const config = {
  runner: 'local',

  specs: ['./tests/**/*.js'], // or your path

  maxInstances: 1,
  // Default timeout for all waitFor* commands
  waitforTimeout: 30000, // 30 seconds

  // Timeout for all WebDriver requests
  connectionRetryTimeout: 30000, // 30 seconds

  // Timeout for page loads
  timeouts: {
    pageLoad: 30000, // 30 seconds
    implicit: 30000, // 30 seconds
  },

  mochaOpts: {
    timeout: 30000 // 30 seconds
  },

  capabilities: [{
    browserName: 'chrome', // or 'firefox'
    'goog:chromeOptions': {
      args: ['--no-sandbox', '--disable-dev-shm-usage']
    }
  }],

  automationProtocol: 'webdriver', // 👈 use WebDriver for browser testing

  //services: ['chromedriver'], // 👈 ensure this is installed

  framework: 'mocha',
  reporters: ['spec'],

  baseUrl: 'http://qa.gtpos.ethicstechnology.net/', // 👈 change to your web app’s URL
};
