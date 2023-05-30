exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'mocha',
    directConnect: true,
  
  
    capabilities: {
      'browserName': 'chrome'
  
  
    },
    
    specs: [
      '../testCases/*js'
    ],
     mochaOpts: {
     timeout: 100000,
       reporter: 'mochawesome',
      reporterOptions: {
        overwrite: false 
        }
    }
}