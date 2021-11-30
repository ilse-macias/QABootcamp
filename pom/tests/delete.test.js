import {URL, CREDENTIALS} from '../data/constants'
import { VALID_USER } from '../data/roles'
import commonPage from '../pages/commonPage'
import loginPage from '../pages/loginPage'
import taskPage from '../pages/taskPage'

fixture('Delete task feature test')
    .page `${URL.BASE_URL}`

    test.only.meta('type','smoke')('Delete every task created (if there is any)', async t=> {
        await t
            .useRole(VALID_USER)
        await commonPage
            .clickOnInboxSection()
        await t.wait(5000) //Assertion
    })