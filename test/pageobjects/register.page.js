const Page = require('./page')

class RegisterPage extends Page {
  get inputName() {
    return $('input[name="name"]')
  }

  get inputPhone() {
    return $('input[name="phone"]')
  }

  get inputEmail() {
    return $('input[type="email"]')
  }

  get checkboxEmail() {
    return $('label[for="email-checkbox"]')
  }

  get inputPassword() {
    return $('input[type="password"]')
  }

  get inputRegId() {
    return $('input[name="reg_id"]')
  }

  get btnSubmit() {
    return $('button[class="send"]')
  }

  get dialogRegistration() {
    return $('#globalDialog')
  }

  get errorMessage() {
    return $('input[class="error"')
  }

  get regIdErrorMessage() {
    return $('//span[contains(text(),"Неверный код регистрации")]')
  }

  async register(name, phone, hasEmail, email, password, regId) {
    await this.inputName.setValue(name)
    await this.inputPhone.setValue(phone)
    if (hasEmail) {
      await this.inputEmail.setValue(email)
      await this.inputPassword.setValue(password)
      await this.inputRegId.setValue(regId)
      await this.btnSubmit.click()
    } else {
      await this.checkboxEmail.click()
      await this.inputPassword.setValue(password)
      await this.inputRegId.setValue(regId)
      await this.btnSubmit.click()
    }
  }

  open() {
    return super.open('register')
  }
}

module.exports = new RegisterPage()
