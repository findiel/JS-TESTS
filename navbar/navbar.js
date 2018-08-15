'use strict';
let Page = require('./../pages/page');

class Navbar extends Page {
    constructor() {
       super();
    }
    
    get sectionProduct() {
        return this.element('')
    }
    
    get sectionBusiness() {
        return this.element('')
    }

    get sectionBlog() {
        return this.element('')
    }
    
    get sectionPricing() {
        return this.element('')
    }
    
    get sectionExplore() {
        return this.element('')
    }

    get sectionMain() {
        return this.element('');
    }
}

module.exports = new Navbar();