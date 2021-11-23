import { Selector } from "testcafe";

class LoginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.submit_btn.ist_button.ist_button_red.sel_login')
    }
}

export default new LoginPage