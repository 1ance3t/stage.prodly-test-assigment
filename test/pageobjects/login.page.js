const Page = require('./page')

class LoginPage extends Page {
  get inputPhone() {
    return $('#loginUsername')
  }

  get inputPassword() {
    return $('#loginPassword')
  }

  get btnSubmit() {
    return $('button[class="send"]')
  }

  get dialogWindow() {
    return $('div[class="outlets-wrap"]')
  }

  get btnCloseDialog() {
    return $('a[href="#"]')
  }

  get errorMessage() {
    return $('input[class="error"')
  }

  async login(phone, password) {
    await this.inputPhone.setValue(phone)
    await this.inputPassword.setValue(password)
    await this.btnSubmit.click()
  }

  open() {
    return super.open('login')
  }
}

module.exports = new LoginPage()
