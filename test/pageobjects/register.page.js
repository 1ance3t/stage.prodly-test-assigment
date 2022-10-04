const Page = require('./page');

class RegisterPage extends Page {
	get inputPhone() {
		return $('#loginUsername');
	}

	get inputPassword() {
		return $('#loginPassword');
	}

	get btnSubmit() {
		return $('button[class="send"]');
	}

	async register(phone, password) {
		await this.inputPhone.setValue(phone);
		await this.inputPassword.setValue(password);
		await this.btnSubmit.click();
	}

	open() {
		return super.open('register');
	}
}

module.exports = new RegisterPage();
