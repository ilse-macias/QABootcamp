import { Selector, test} from 'testcafe'
import {URL, CREDENTIALS} from '../data/constants'
import loginPage from '../pages/login-page'

fixture('Login feature test')
    .page `${URL.BASE_URL}`

    test('As a user I would like to log in to Todoist with a valid credentials', async t=> {
        await t
            .typeText(loginPage.emailInput, CREDENTIALS.STANDARDS_USER.EMAIL)
            .typeText(loginPage.passwordInput, CREDENTIALS.STANDARDS_USER.PASSWORD) 
            .click(loginPage.loginButton)
    })