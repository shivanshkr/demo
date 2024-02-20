module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-jasmine-html-reporter'),
            require('karma-chrome-launcher'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-teamcity-reporter')
        ],
        client: {
            clearContext: false,
            captureConsole: true
        },
        coverageIstanbulReporter: {
            reports: ['teamcity', 'html'],
            fixWebpackSourcePath: true,
            thresholds: {
                statements: 80,
                lines: 80,
                branches: 80,
                functions: 80
            }
        },
        singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        customLaunchers: {
            ChromeHeadless: {
                base: 'Chrome',
                flags: ['--headless', '--disable-gpu', '--no-sandbox']
            }
        },
        coverageReporter: {
            type: 'in-memory'
        }
    });
}