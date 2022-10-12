const ProfilePage = require('../pageobjects/profile.page')
const LoginPage = require('../pageobjects/login.page')

let TODO_ITEMS = {
  dot: 'Выберите торговую точку',
}

describe('Profile', () => {
  before(async () => {
    await LoginPage.open()
    await LoginPage.login('+79385565872', 'mironovwill@gmail.com')
    await expect(LoginPage.dialogWindow).toBeExisting()
    await expect(LoginPage.dialogWindow).toHaveTextContaining(TODO_ITEMS.dot)
    await LoginPage.btnCloseDialog.click()
  })
  it('should log out user from application', async () => {
    await ProfilePage.open()
    await ProfilePage.logOut()
  })
})
