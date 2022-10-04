const RegisterPage = require('../pageobjects/register.page')
const { faker } = require('@faker-js/faker/locale/ru')

describe('Register', () => {
  it('should not register with already exist number', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      '+79385565872',
      faker.internet.email(),
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.errorMessage).toBeExisting()
    await expect(await RegisterPage.errorMessage).toHaveValueContaining(
      'Пользователь с указанным номером телефона или электронным адресом уже зарегистрирован',
    )
  })

  it('should not register with already invalid number', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      '123',
      faker.internet.email(),
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.errorMessage).toBeExisting()
    await expect(await RegisterPage.errorMessage).toHaveValueContaining('Неверный номер телефона')
  })

  it('should not register with already exist email', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      faker.phone.phoneNumber('+7 9## ### ## ##'),
      'mironovwill@gmail.com',
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.errorMessage).toBeExisting()
    await expect(await RegisterPage.errorMessage).toHaveValueContaining(
      'Пользователь с указанным номером телефона или электронным адресом уже зарегистрирован',
    )
  })

  it('should not register with invalid exist RegId', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      faker.phone.phoneNumber('+7 9## ### ## ##'),
      faker.internet.email(),
      faker.internet.password(),
      'qwerty',
    )
    await expect(await RegisterPage.regIdErrorMessage).toBeExisting()
    await expect(await RegisterPage.regIdErrorMessage).toHaveTextContaining(
      'Неверный код регистрации',
    )
  })

  it('should register with valid credentials', async () => {
    await RegisterPage.open()
    await RegisterPage.register(
      faker.name.fullName(),
      faker.phone.phoneNumber('+7 9## ### ## ##'),
      faker.internet.email(),
      faker.internet.password(),
      '',
    )
    await expect(await RegisterPage.dialogRegistration).toBeExisting()
    await expect(await RegisterPage.dialogRegistration).toHaveTextContaining(
      'Спасибо за регистрацию',
    )
  })
})
