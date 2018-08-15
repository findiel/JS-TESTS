'use strict'
let Section = require('./../section');

class registerModal extends Section {
    constructor() {
        super();
        //nothing yet
    }
    //some methods here.

    get btnOpenModal() {
        return this.element('')
    }

    get btnCloseModal() {
        return this.element('')
    }

    get modalTitle() {
        return this.element('')
    }

    get btnSubmit() {
        return this.element('')
      }
      
    get inputEmail() {
        return this.element('');
    }

    get inputPassword() {
        return this.element('')
    }

    get inputConfirmPassword() {
        return this.element('')
    }

    get inputDisplayedName() {
        return this.element('')
    }
}

module.exports = new registerModal();