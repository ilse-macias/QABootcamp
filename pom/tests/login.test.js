import { Selector, t, test} from 'testcafe'
import {URL, CREDENTIALS, TASKS} from '../data/constants'
import loginPage from '../pages/login-page'
import taskPage from '../pages/task-page'


fixture('Login feature test')
    .page `${URL.BASE_URL}`

    test.only.meta('type','smoke')('As a user I would like to log in to Todoist with a valid credentials', async t=> {
        await t
            .maximizeWindow()
        await loginPage
            .submitLoginForm(CREDENTIALS.STANDARDS_USER.EMAIL, CREDENTIALS.STANDARDS_USER.PASSWORD)
        await t    
           .expect(taskPage.todayTitle.exists).ok()
          console.log(todayTitle)
    })
    
    test.skip.meta('type', 'smoke')('Negative scenarios for login', async t=> {
        await t
            .maximizeWindow()

    })