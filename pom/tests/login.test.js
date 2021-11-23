import { Selector, test} from 'testcafe'
import {URL, CREDENTIALS} from '../data/constants'
import loginPage from '../pages/login-page'
import todayPage from '../pages/today-page'


fixture('Login feature test')
    .page `${URL.BASE_URL}`

    test.skip('As a user I would like to log in to Todoist with a valid credentials', async t=> {
        await t
            .maximizeWindow()
            .typeText(loginPage.emailInput, CREDENTIALS.STANDARDS_USER.EMAIL)
            .typeText(loginPage.passwordInput, CREDENTIALS.STANDARDS_USER.PASSWORD) 
            .click(loginPage.loginButton)
         //   .expect(todayPage.todayLabel.exists).ok()
    })

    test('As a user I wanna create a new task with Today as the due date', async t=> {
        await t
            .maximizeWindow()
            .typeText(loginPage.emailInput, CREDENTIALS.STANDARDS_USER.EMAIL)
            .typeText(loginPage.passwordInput, CREDENTIALS.STANDARDS_USER.PASSWORD) 
            .click(loginPage.loginButton)
            .click(todayPage.addTodayTaskPlus)
        //  .typeText('Hello World')
            .click(todayPage.addTaskButton)
    })