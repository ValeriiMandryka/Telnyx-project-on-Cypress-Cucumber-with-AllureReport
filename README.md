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

## 3. Install cypress-browserify-preprocessor<br>
```
npm install --save-dev @cypress/browserify-preprocessor
```
## 4. Install allure reporter
```
npm install --save-dev mocha-allure-reporter allure-commandline
```
## 4. Install xpath plugin
```
npm i cypress-xpath
```
## 5. Run tests
```
npx cypress open   (it will open cypress GUI where you can run tests)  
npm run test:      (run test in headless mode in chrome browser)
   

```


## 6 Generate report
```
npm run allure-generate
npm run allure-serve
```
