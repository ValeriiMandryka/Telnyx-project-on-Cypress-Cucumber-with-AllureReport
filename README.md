# Telnyx_cypress_cucumber_allure



## 1. Install 
in terminal enter
```
npm init
npm install cypress

```
## 2. Install plugin Cucumber:
```
npm install @badeball/cypress-cucumber-preprocesso

```

Install cypress-browserify-preprocessor<br>
```
npm install --save-dev @cypress/browserify-preprocessor
```
## 3. Run tests
```
npx cypress open   (it will open cypress GUI where you can run tests)  
npm run test:      (run test in headless mode in chrome browser)
    "allure-generate": "allure generate allure-results --clean",
    "allure-serve": " npx allure serve allure-results"

```


## Generate report
```
npm run allure-generate
npm run allure-serve
```
