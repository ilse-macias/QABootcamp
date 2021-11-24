import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn.ist_button.ist_button_red.sel_login')
    }

    async submitLoginForm(email, password){
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
    }
}

export default new LoginPage