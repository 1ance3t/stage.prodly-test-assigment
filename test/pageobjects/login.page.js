const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get inputPhone() {
		return $('#loginUsername');
	}

	get inputPassword() {
		return $('#loginPassword');
	}

	get btnSubmit() {
		return $('button[class="send"]');
	}

	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to login using username and password
	 */
	async login(phone, password) {
		await this.inputPhone.setValue(phone);
		await this.inputPassword.setValue(password);
		await this.btnSubmit.click();
	}

	/**
	 * overwrite specific options to adapt it to page object
	 */
	open() {
		return super.open('login');
	}
}

module.exports = new LoginPage();
