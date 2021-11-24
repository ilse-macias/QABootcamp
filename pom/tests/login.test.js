import {URL, CREDENTIALS} from '../data/constants'
import loginPage from '../pages/login-page'
import taskPage from '../pages/task-page'


fixture('Login feature test')
    .page `${URL.BASE_URL}`

    test.meta('type','smoke')('As a user I would like to log in to Todoist with a valid credentials', async t=> {
        await loginPage
            .submitLoginForm(CREDENTIALS.STANDARDS_USER.EMAIL, CREDENTIALS.STANDARDS_USER.PASSWORD)
       // await taskPage.assertTodayTitle()
        await t
            .expect(taskPage.todayTitle.withExactText('Today')).ok() //This way the validation works!
           // .expect(taskPage.todayTitle.exists).ok()  
    })
    
    test.skip.meta('type', 'smoke')('Negative scenarios for login', async t=> {

    })