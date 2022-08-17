const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor');


Given('User opens main page', () => {
    cy.visit('https://www.google.com/');
})
Given('Type "Google"', () => {
    cy.xpath('[type="text"]').type('Google');
})
