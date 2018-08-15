'use strict';
let Page = require('./../pages/page');

class Footer extends Page {
    constructor() {
       super();
    }
    
    get sectionFAQ() {
        return this.element('')
    }
    
    get sectionContact() {
        return this.element('')
    }

    get sectionCopyrights() {
        return this.element('')
    }
}

module.exports = new Footer();