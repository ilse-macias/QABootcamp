import {URL, CREDENTIALS, TASKS, PROJECT} from '../data/constants'
import commonPage from '../pages/commonPage'
import { VALID_USER } from '../data/roles'
import projectPage from '../pages/projectPage'

fixture('Project feature')
    .page `${URL.BASE_URL}`

    //TO-DO: CREATE ASSERTION
    test.only.meta('type','smoke')('As a user I would create a new project, choose any color you like and add it to favorites.', async t=> {
        await t
            .useRole(VALID_USER)
        await commonPage
            .clickOnAddNewProject()
        await projectPage
            .CreateNewProject(PROJECT.ADD_PROJECT)
         await t
             .wait(6000)
         //   .expect(commonPage.lastProjectAdded.exists).ok({setTimeout:6000})
        })
    