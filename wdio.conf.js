export const config = {
    runner: 'local',
    port: 4721,
    specs: [
        './test/features/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '13',
        'appium:automationName': 'UiAutomator2',
        'appium:app':'./sample_app.apk',
        'appium:appActivity':'com.swaglabsmobileapp.MainActivity'
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services:[
        [
            'appium',
            {
                args: {
                    allowCors : true
                },
                command: 'appium',
            },
        ],
    ],
    framework: 'cucumber',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./test/step-definitions/*.spec.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
      
        source: true,
      
        strict: false,
     
        tagExpression: '',
      
        timeout: 60000,
     
        ignoreUndefinedDefinitions: false
    },
}
