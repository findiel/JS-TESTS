'use strict';
let Section = require('./../section');
class LoginModal extends Section {
  constructor() {
    super();
  }

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

  get btnRecover() {
    return this.element('')
  }

  get btnSubmitRecover() {
    return this.element('')
  }

  get btnCloseRecover() {
    return this.element('');
  }

  get inputLogin() {
    return this.element('')
  }

  get inputPassword() {
    return this.element('')
  }

  get inputEmailRecover() {
    return this.element('')
  }

  get LoginError() {
    return this.element('')
  }
  
  get InvalidPasswordOrEmailError() {
    return this.element('')
  }

  get messageEmailSent() {
    return this.element('')
  }
}
module.exports = new LoginModal();
