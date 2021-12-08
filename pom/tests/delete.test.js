import {URL, CREDENTIALS} from '../data/constants'
import { VALID_USER } from '../data/roles'
import CommonPage from '../pages/commonPage'

fixture('Delete task feature test')
    .page `${URL.BASE_URL}`
    .beforeEach(async t => {
        await t
            .useRole(VALID_USER)
    })
    
    //TODO: Create assertion: Verify if the counter is decreasing from Inbox task.
    test.meta('type','smoke')('Delete every task created (if there is any)', async t=> {
        await CommonPage
            .clickOnInboxSection()
        await t.wait(5000) //This will remove until the assertion is created.
    })