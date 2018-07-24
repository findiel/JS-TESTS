var assert = require('assert');

browser.timeouts('pageLoad', 30000); //Use this command in tests if your connection SUCKS.

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        console.log(globals);
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});