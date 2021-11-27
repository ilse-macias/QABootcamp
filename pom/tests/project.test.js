import {URL, CREDENTIALS, TASKS} from '../data/constants'
import commonPage from '../pages/commonPage'
import loginPage from '../pages/loginPage'
import taskPage from '../pages/taskPage'

fixture('Project feature')
    .page `${URL.BASE_URL}`

    test.only.meta('type','smoke')('As a user I would create a new project, choose any color you like and add it to favorites.', async t=> {
        await t
            .useRole(VALID_USER)
        await commonPage
            .clickOnAddNewProject()
        })
    