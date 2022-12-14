const LoginPage = require('../pageobjects/login.page')

let TODO_ITEMS = {
  wrongCred: 'Проверьте логин и пароль',
  dot: 'Выберите торговую точку',
}

describe('Login', () => {
  it('should not login without password', async () => {
    await LoginPage.open()
    await LoginPage.login('+79385565871', '')
    await expect(await LoginPage.inputPassword).toHaveAttribute('required')
  })

  it('should not login without phone', async () => {
    await LoginPage.open()
    await LoginPage.login('', 'mironovwill@gmail.com')
    await expect(await LoginPage.inputPhone).toHaveAttribute('required')
  })

  it('should not login with invalid credentials', async () => {
    await LoginPage.open()
    await LoginPage.login('+79385565871', 'mironovwill@gmail.com')
    await expect(await LoginPage.errorMessage).toBeExisting()
    await expect(await LoginPage.errorMessage).toHaveValueContaining(TODO_ITEMS.wrongCred)
  })

  it('should login with valid credentials', async () => {
    await LoginPage.open()
    await LoginPage.login('+79385565872', 'mironovwill@gmail.com')
    await expect(LoginPage.dialogWindow).toBeExisting()
    await expect(LoginPage.dialogWindow).toHaveTextContaining(TODO_ITEMS.dot)
  })
})
