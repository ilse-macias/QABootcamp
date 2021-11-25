import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn.ist_button.ist_button_red.sel_login')

        this.errorMessageInvalidCredentials = Selector('.error_msg').withText('email ')
    }

    async submitLoginForm(email, password){
        await t
            .maximizeWindow()
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }

    async clickOnlyOnLoginButton(){
        await t
            .maximizeWindow()
            .click(this.loginButton)
    }
}

export default new LoginPage