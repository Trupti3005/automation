exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Device',
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': './app/app-debug.apk',
    'appium:autoGrantPermissions': true,
    'appium:chromedriverAutodownload': true, // ✅ Fixes your issue
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  services: ['appium'],
};