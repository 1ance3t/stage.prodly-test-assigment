const Page = require('./page')

class ProfilePage extends Page {
  get personalWrap() {
    return $('div[class="personal-area-wrap"]')
  }

  get btnLogOut() {
    return $('(//a[@href="/logout"])[3]')
  }

  async logOut() {
    await this.btnLogOut.click()
  }

  open() {
    return super.open('profile')
  }
}

module.exports = new ProfilePage()
