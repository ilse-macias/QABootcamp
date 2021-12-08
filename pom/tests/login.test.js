import {URL, CREDENTIALS} from '../data/constants'
import { VALID_USER } from '../data/roles'
import loginPage from '../pages/loginPage'
import taskPage from '../pages/taskPage'


fixture('Login feature test')
    .page `${URL.BASE_URL}`
    test.meta('type','smoke')('As a user I would like to log in to Todoist with a valid credentials', async t=> {
        await t
            .useRole(VALID_USER)
            .expect(taskPage.todayTitle.exists).ok()
    })
    
    test.meta('type', 'smoke')('As a user I logged in with an invalid credentials', async t=> {
        await loginPage
            .submitLoginForm(CREDENTIALS.INVALID_USER.EMAIL, CREDENTIALS.INVALID_USER.PASSWORD)
        await t
            .expect(loginPage.errorMessageInvalidCredentials.exists).ok()  
    })

    test.meta('type', 'smoke')('As a user I logged in with an valid email and wrong password', async t=> {
        await loginPage
            .submitLoginForm(CREDENTIALS.VALID_USER.EMAIL, CREDENTIALS.INVALID_USER.PASSWORD)
        await t
            .expect(loginPage.errorMessageInvalidCredentials.exists).ok()  
    })

    test.meta('type', 'smoke')('As a user I click only on "Log in" button.', async t=> {
        await loginPage
            .clickOnlyOnLoginButton()
        await t
            .expect(loginPage.errorMessageInvalidCredentials.exists).ok()  
    })