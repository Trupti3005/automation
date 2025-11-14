// exports.config = {
//   runner: 'local',
//   specs: ['./tests/**/*.js'],
//   maxInstances: 1,
// //   capabilities: [{
// //     browserName: 'chrome',
// //     'goog:chromeOptions': {
// //       debuggerAddress: 'localhost:9222'
// //     }
// //   }],
// // capabilities: [{
// //     browserName: 'electron',
// //   }],
// //   services: ['electron'],
// //   electron: {
// //     appPath: 'C:\\Users\\Ethics\\Downloads\\gt-pos Setup 1.0.0.exe', // Replace with actual path to your Electron app
// //   },
//   capabilities: [{
//     browserName: 'chrome', // Use 'chrome' here, not 'electron'
//   }],
//   services: [
//     ['electron', {
//       appPath: 'C:\\Users\\Ethics\\Downloads\\gt-pos Setup 1.0.0.exe', // Replace with actual path
//       chromeDriverArgs: ['--no-sandbox'],
//       chromeDriverPath: './node_modules/.bin/chromedriver'
//     }]
//   ],
//   logLevel: 'info',
//   framework: 'mocha',
//   reporters: ['spec'],
//   services: ['chromedriver'],
// };

//below is working fine but not got electron app launched
// exports.config = {
//   runner: 'local',
//   specs: ['./tests/**/*.js'],
//   maxInstances: 1,
//   capabilities: [{
//     browserName: 'electron', // This tells WebDriverIO to use the Electron service
//     browserVersion: '138.*.*.*'
//   }],
//   services: [
//     ['electron', {
//       //appPath: 'C:\\Users\\Ethics\\Downloads\\gt-pos Setup 1.0.0.exe', // Path to your Electron app
//       appBinaryPath: 'C:\\Users\\Ethics\\Downloads\\gt-pos Setup 1.0.0.exe', // Path to your Electron app binary
//       chromeDriverArgs: ['--no-sandbox'],
//       chromeDriverPath: './node_modules/.bin/chromedriver'
//     }]
//   ],
//   logLevel: 'info',
//   framework: 'mocha',
//   reporters: ['spec'],
// };


//below is working fine and got electron app launched but not able to interact with app
// exports.config = {
//   runner: 'local',
//   specs: ['./tests/**/*.js'],
//   maxInstances: 1,
//   capabilities: [{
//     browserName: 'chrome',
//     'goog:chromeOptions': {
//       binary: 'C:\\Program Files\\gt-pos\\gt-pos.exe', // Path to your Electron app
//       args: ['--no-sandbox', '--disable-dev-shm-usage'],
//     }
//   //   'goog:chromeOptions': {
//   // debuggerAddress: 'localhost:9222',
//   // args: ['--no-sandbox', '--disable-dev-shm-usage'],
// //},
//   }],
//   services: [
//     ['chromedriver', {
//       chromedriverCustomPath: 'D:\\GTPOS\\automation\\chromedriver-win64\\chromedriver.exe',
//       port: 9222
//     }]
//   ],
//   logLevel: 'info',
//   framework: 'mocha',
//   reporters: ['spec'],
// };


//Working for manually launched chromedriver and app but not able to launch app automatically, but nor running test cases
// exports.config = {
//   runner: 'local',
//   specs: ['./tests/**/*.js'],
//   maxInstances: 1,
//   capabilities: [{
//     browserName: 'chrome',
//     'goog:chromeOptions': {
//       debuggerAddress: 'localhost:9515',
//       args: ['--no-sandbox', '--disable-dev-shm-usage'],
//     }
//   }],

//     // ✅ Point WebDriver to your manually running Chromedriver
//   hostname: 'localhost',
//   port: 9515,
//   path: '/', // ← very important for Chromedriver

//   logLevel: 'info',
//   framework: 'mocha',
//   reporters: ['spec'],
//   // services: ['chromedriver'], 
// //   services: [
// //   ['chromedriver', {
// //     chromedriverOptions: {
// //       version: '138.0.7204.183' // Or whichever 138.x version matches your Chrome
// //     }
// //   }]
// // ],
// };


export const config = {
  runner: 'local',
  specs: ['./tests/**/*.js'],
  maxInstances: 1,
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],

  services: ['devtools'], // 👈 important

  automationProtocol: 'devtools', // 👈 required to connect via debuggerAddress

  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      debuggerAddress: 'localhost:9515' // 👈 your Electron app's debugger port
    }
  }]
};



