import {URL, CREDENTIALS, TASKS} from '../data/constants'
import { VALID_USER } from '../data/roles'
import CommonPage from '../pages/commonPage'
import loginPage from '../pages/loginPage'
import taskPage from '../pages/taskPage'

fixture('Task feature test')
    .page `${URL.BASE_URL}`

    test.meta('type', 'smoke')('As a user I want to create a new task with Today as the due date', async t=> {
        await t
            .useRole(VALID_USER)
        
        await taskPage
            .addNewTaskForToday(TASKS.TODAY.ADD_TASK_TODAY) 

        await t
            .expect(taskPage.taskCreatedTextbox.exists).ok({timeout:10000})
    })

    //TO-DO: Create Assertion: today counter/text implemented.
    test.meta('type', 'smoke')('single task selecting tomorrow as the due date', async t=> {
        await t
            .useRole(VALID_USER)
        
        await taskPage
            .addNewTaskForTomorrowSecondOption(TASKS.TODAY.ADD_TASK_TODAY)
           // .addNewTaskForTomorrow(TASKS.TOMORROW.ADD_TASK_TOMORROW) //Other option to add a task for 'Tomorrow'

        await CommonPage
            .upcomingTaskPage()
            await t
                .wait(10000) //This will remove until the assertion is created.
            //.expect(taskPage.taskCreatedTextbox.exists).ok({timeout:10000})
    })
    