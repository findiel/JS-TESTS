//IMPORTS
const assert = require('assert');
const globals = require('../globals');
const page = require('../pages/home');
const registerModal = require('../pages/home/registerModal');
const loginModal = require('../pages/home/loginModal');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//REAL TESTS
describe('Alfa Evryplace register and login tests.', () => {

    //Defines what to do before each of tests.
    beforeEach(() => {
        browser.windowHandleMaximize();
      });

    it('Should check registration errors', () => {
        
    })

   it('Should register properly', () => {
       //1. Creating new unique mail to register.
        let uniqueDate = new Date();
        let uniqueNumber = uniqueDate.getTime();
        let uniqueEmail = 'Your mail goes here' + uniqueNumber + '@gmail.com';
        globals.newUser.login = uniqueEmail;
        globals.newUser.password = 'Set your password here';
        //2. Creating an object to send
        let registerData = { //Remember to use your own valid object here
            "displayName": "Test",
            "email": uniqueEmail,
            "password": "Use your password here"
        }
        //3. Difine endpoint and creating a response function
        let apiEndpoint = 'Put your API register endpoint here';
        let xhr = new XMLHttpRequest();
        let getObject = () => {
            responseObject = JSON.parse(xhr.responseText);
            assert.equal(responseObject.email, globals.newUser.login);
        }
        //4. Sending request
        xhr.onload = getObject;
        xhr.open('POST', apiEndpoint, true);
        registerDataString = JSON.stringify(registerData);
        xhr.setRequestHeader('Content-Type', 'application/json'); //Remamber to use your headers here
        xhr.send(registerDataString);
    })

    it('Should check login modal invalid email errors', () => {
        
    })

    it('Should check if login modal password is not too short error', () => {

    })

    it('Should check login modal wrong password email error', () => {
        
    })

    it('Should use recover password modal', () => {
        
    })

    it('Should login properly', () => {
        
    })
});
