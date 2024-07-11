import { $ } from '@wdio/globals'

class LoginPage {
    get inputUsername () {
        return $('~test-Username');
    }

    get inputPassword () {
        return $('~test-Password');
    }
    get errorMessage () {
        return $('//*[@content-desc="test-Error message"]/android.widget.TextView');
    }

    get btnSubmit () {
        return $('~test-LOGIN');
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
