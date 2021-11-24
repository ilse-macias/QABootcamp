import { Selector, t, test} from 'testcafe'
import {URL, CREDENTIALS, TASKS} from '../data/constants'
import loginPage from '../pages/login-page'
import taskPage from '../pages/task-page'

fixture('Task feature test')
    .page `${URL.BASE_URL}`

    test.meta('type', 'smoke')('As a user I wanna create a new task with Today as the due date', async t=> {
        await t
            .maximizeWindow()

        await loginPage
            .submitLoginForm(CREDENTIALS.STANDARDS_USER.EMAIL, CREDENTIALS.STANDARDS_USER.PASSWORD)

        await taskPage
            .addNewTaskForToday(TASKS.ADD_TASK)
    })

    test('single task selecting tomorrow as the due date', async t=> {
        await t 
            .maximizeWindow()

        await loginPage
            .submitLoginForm(CREDENTIALS.STANDARDS_USER.EMAIL, CREDENTIALS.STANDARDS_USER.PASSWORD)
        
        await taskPage
            .addNewTaskForTomorrow(TASKS.TOMORROW.ADD_TASK_TOMORROW)
    })