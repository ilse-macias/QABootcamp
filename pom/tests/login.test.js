import { Selector, t, test} from 'testcafe'
import {URL, CREDENTIALS, TASKS} from '../data/constants'
import loginPage from '../pages/login-page'
import todayPage from '../pages/today-page'


fixture('Login feature test')
    .page `${URL.BASE_URL}`

    test.meta('type','smoke')('As a user I would like to log in to Todoist with a valid credentials', async t=> {
        await t
            .maximizeWindow()
        await loginPage
            .submitLoginForm(CREDENTIALS.STANDARDS_USER.EMAIL, CREDENTIALS.STANDARDS_USER.PASSWORD)
            // .typeText(loginPage.emailInput, CREDENTIALS.STANDARDS_USER.EMAIL)
            // .typeText(loginPage.passwordInput, CREDENTIALS.STANDARDS_USER.PASSWORD) 
            // .click(loginPage.loginButton)
        await t    
           // .expect(todayPage.todayLabel.exists).ok()
          //  console.log(todayLabel)
    })

    test('As a user I wanna create a new task with Today as the due date', async t=> {
        await t
            .maximizeWindow()

        await loginPage
            .submitLoginForm(CREDENTIALS.STANDARDS_USER.EMAIL, CREDENTIALS.STANDARDS_USER.PASSWORD)

            // .typeText(loginPage.emailInput, CREDENTIALS.STANDARDS_USER.EMAIL)
            // .typeText(loginPage.passwordInput, CREDENTIALS.STANDARDS_USER.PASSWORD) 
            // .click(loginPage.loginButton)

        await t
             .click(todayPage.addTodayTaskPlus)
             .typeText(todayPage.addTodayInput, TASKS.ADD_TASK)
             .click(todayPage.addTaskButton)
    })
    