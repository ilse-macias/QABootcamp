import {URL, CREDENTIALS} from '../data/constants'
import { VALID_USER } from '../data/roles'
import commonPage from '../pages/commonPage'

fixture('Delete task feature test')
    .page `${URL.BASE_URL}`

    //TODO: Create assertion: Verify if the counter is decreasing from Inbox task.
    test.meta('type','smoke')('Delete every task created (if there is any)', async t=> {
        await t
            .useRole(VALID_USER)
        await commonPage
            .clickOnInboxSection()
        await t.wait(5000) //This will remove until the assertion is created.
    })