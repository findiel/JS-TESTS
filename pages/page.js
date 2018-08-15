'use strict';
class Page {
  constructor() {
    this.path = 'Your company url adress goes there';
  }

  element(selector) {
    console.log(selector);
    return browser.element(selector);
  }

  elements(selector) {
    return browser.elements(selector);
  }

  open() {
    browser.url(this.path);
  }
}
module.exports = Page;