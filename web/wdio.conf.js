export const config = {
  runner: 'local',

  specs: ['./tests/**/*.js'], // or your path

  maxInstances: 1,

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

  baseUrl: 'http://localhost:5173', // 👈 change to your web app’s URL
};
