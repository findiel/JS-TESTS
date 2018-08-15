'use strict';
let Page = require('./../page');
class Home extends Page {
  constructor() {
    super();
    this.sections = {
      loginModal: require('./loginModal'),
      registerModal: require('./registerModal')
    };
  }

  get btnOpenSignUp() {
    return this.element('')
  }

  get btnCloseSignUp() {
    return this.element('')
  }

  get btnOpenLogin() {
    return this.element('')
  }

  get btnCloseLogin() {
    return this.element('')
  }

  get btnsProducts() {
    return this.elements('')
  }

  get btnsSponsors() {
    return this.elements('')
  }

  get btnTryItNowHeader() {
    return this.element('');
  }

  get btnTryItNowFooter() {
    return this.element('');
  }

  get btnCarouselNext() {
    return this.element('');
  }
  
  get btnCarouselPrev() {
    return this.element('');
  }

  get nickName() {
    return this.element('')
  }

}
module.exports = new Home();
