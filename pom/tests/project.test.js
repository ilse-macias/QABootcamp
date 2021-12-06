import {URL, PROJECT} from '../data/constants'
import CommonPage from '../pages/commonPage'
import { VALID_USER } from '../data/roles'
import projectPage from '../pages/projectPage'

fixture('Project feature')
    .page `${URL.BASE_URL}`

    //TO-DO: Create assertion: Color, Favorite, Project
    test.meta('type','smoke')('As a user I would create a new project, choose any color you like and add it to favorites.', async t=> {
        await t
            .useRole(VALID_USER)
        await CommonPage
            .clickOnAddNewProject()
        await projectPage
            .CreateNewProject(PROJECT.ADD_PROJECT)
         await t
             .expect(CommonPage.lastProjectAdded.exists).ok({timeout:6000}) 
        })
    