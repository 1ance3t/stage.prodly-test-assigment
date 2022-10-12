const RegisterPage = require('../pageobjects/register.page')
const { faker } = require('@faker-js/faker/locale/ru')

const TODO_ITEMS = {
  alreadyReg:
    'Пользователь с указанным номером телефона или электронным адресом уже зарегистрирован',
  wrongPhone: 'Неверный номер телефона',
  wrongCode: 'Неверный код регистрации',
  successReg: 'Спасибо за регистрацию',
}

describe('Register', () => {
  it('should not register with already exist number', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      '+79385565872',
      true,
      faker.internet.email(),
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.errorMessage).toBeExisting()
    await expect(await RegisterPage.errorMessage).toHaveValueContaining(TODO_ITEMS.alreadyReg)
  })

  it('should not register with already invalid number', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      '123',
      true,
      faker.internet.email(),
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.errorMessage).toBeExisting()
    await expect(await RegisterPage.errorMessage).toHaveValueContaining(TODO_ITEMS.wrongPhone)
  })

  it('should not register with already exist email', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      faker.phone.phoneNumber('+7 9## ### ## ##'),
      true,
      'mironovwill@gmail.com',
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.errorMessage).toBeExisting()
    await expect(await RegisterPage.errorMessage).toHaveValueContaining(TODO_ITEMS.alreadyReg)
  })

  it('should not register with invalid exist RegId', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      faker.phone.phoneNumber('+7 9## ### ## ##'),
      true,
      faker.internet.email(),
      faker.internet.password(),
      'qwerty',
    )
    await expect(await RegisterPage.regIdErrorMessage).toBeExisting()
    await expect(await RegisterPage.regIdErrorMessage).toHaveTextContaining(TODO_ITEMS.wrongCode)
  })

  it('should register with valid credentials', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      faker.phone.phoneNumber('+7 9## ### ## ##'),
      true,
      faker.internet.email(),
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.dialogRegistration).toBeExisting()
    await expect(await RegisterPage.dialogRegistration).toHaveTextContaining(TODO_ITEMS.successReg)
  })
})
