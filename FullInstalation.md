# Telnyx_cypress_cucumber_HTMLreport full instalation without cloning


## 1. Install 
in IDE enter
```
npm init
npm install cypress

```
## 1.1. Install plugin Cucumber:
```
npm install @badeball/cypress-cucumber-preprocesso

```
## 1.2. Install cypress-browserify-preprocessor<br>
```
npm install --save-dev @cypress/browserify-preprocessor
```
## 1.3. configure cypress.config.js as follows:
```
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
```
## 1.4. Add to package.json stepDefinition:
```
"stepDefinitions": [
    "cypress/e2e/**/*.{js,ts}",
    "cypress/e2e/.{js,ts}",
    "cypress/support/step_definitions/**/*.{js,ts}"
  ]

```
## 1.5. Install xpath plugin
```
npm i cypress-xpath
```
Then add path to plugin: 
```
import 'cypress-xpath'
```

into:  cypress/support/e2e.js


## 2. Install Allure reporter
```
npm install --save-dev mocha-allure-reporter allure-commandline


```

## 2.1. Write scripts for run tests with allure report into package.json:

```
    "test": "npx cypress run --reporter mocha-allure-reporter",
    "allure-generate": "allure generate allure-results --clean -o allure-report",
    "allure-serve": " allure open  allure-report"
```

## 3. Run tests
```
npx cypress open   (it will open cypress GUI where you can run tests)  
npm run test:      (run test in headless mode )
   

```


## 3.1. Generate report
```
npm run allure-generate
```
## 3.1.Show report:
```
npm run allure-serve

```
## 4.    If some problem, delete node_moduls,  then: npm i

## 5. Package.json looks like:

```
{
  "name": "cypres",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "npx cypress run  --browser chrome --reporter mocha-allure-reporter",
    "allure-generate": "allure generate allure-results --clean",
    "allure-serve": " npx allure serve allure-results"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@cypress/browserify-preprocessor": "^3.0.2",
    "allure-commandline": "^2.18.1",
    "cypress": "^10.6.0",
    "cypress-xpath": "^2.0.1",
    "mocha-allure-reporter": "^1.4.0"
  },
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^12.0.1"
  },
  "stepDefinitions": [
    "cypress/e2e/**/*.{js,ts}",
    "cypress/e2e/.{js,ts}",
    "cypress/support/step_definitions/**/*.{js,ts}"
  ]
}
```
## 6. cypress.config.js looks like:
```
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    video: false,
    specPattern: "**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents,
  },
});
```
