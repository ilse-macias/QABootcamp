import {URL, CREDENTIALS, TASKS} from '../data/constants'
import { VALID_USER } from '../data/roles'
import loginPage from '../pages/loginPage'
import taskPage from '../pages/taskPage'

fixture('Task feature test')
    .page `${URL.BASE_URL}`

    test.meta('type', 'smoke')('As a user I wanna create a new task with Today as the due date', async t=> {
        await t
            .useRole(VALID_USER)
        
        await taskPage
            .addNewTaskForToday(TASKS.TODAY.ADD_TASK_TODAY) 

        await t
            .expect(taskPage.taskCreatedTextbox.exists).ok({setTimeout:6000})
    })


    //TO-DO: WORKING ON IT, WHEN WHEN USER NEEDS TO CLICK ON SCHEDULE.
    test.meta('type', 'smoke')('single task selecting tomorrow as the due date', async t=> {
        await t
            .useRole(VALID_USER)
        
        await taskPage
           // .addNewTaskForTomorrowSecondOption(TASKS.TODAY.ADD_TASK_TODAY)
            .addNewTaskForTomorrow(TASKS.TOMORROW.ADD_TASK_TOMORROW)
    })