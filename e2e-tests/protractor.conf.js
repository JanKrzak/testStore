//jshint strict: false
exports.config = {

    allScriptsTimeout: 11000,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized']
        },
        specs: ["./features/*.feature"]
    },

    baseUrl: 'https://rekrutacjaqa2.xsolve.software/',

    // Cucumber configuration
    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    cucumberOpts: {
        //Specify path to Cucumber steps definitions, and a path to Hooks
        require: ["./steps/**/*.ts", "./src/support/Hooks.ts"],
        //With strict set to true, cucumber will fail if you are missing step definitions.
        strict: true,
        //Specify format and path for Cucumber Report
        timeout: 120000
    },

    onPrepare: function () {
        // for non-angular page
        browser.ignoreSynchronization = true;
    },

    beforeLaunch: function () {
        require('ts-node').register({
            project: 'tsconfig.e2e.json'
        });
    }


};
