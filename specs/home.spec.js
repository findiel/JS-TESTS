//CONSTS IMPORTS.
const assert = require('assert');
const page = require('../pages/home');
const navbar = require('../navbar/navbar');
const registerModal = require('../pages/home/registerModal');
const loginModal = require('../pages/home/loginModal');

//REAL TESTS.
describe('Your company index.html page tests.', () => {

    //Defines what to do before each of tests.
    beforeEach(() => {
        browser.windowHandleMaximize();
      });

    it('Page should load and have a proper tite', () => {
        page.open();
        let title = browser.getTitle();
        assert.equal(title, '');
    })

    it('Should check "Register" button', () => {
    
    })

    it('Should check "Login" button', () => {

    })
});
