'use strict';
class Section {
  constructor() {
  }

  element(selector) {
    return browser.element(this.selector ? `${this.selector} ${selector}` : selector);
  }
}
module.exports = Section;