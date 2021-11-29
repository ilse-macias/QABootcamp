import { Selector, t } from "testcafe"

class commonPage{
    constructor(){
        /*Menu left side*/

        //Upcoming
        this.upcomingOption = Selector('.item_content').withExactText('Upcoming')
        //Project
        this.expandProjectPanel = Selector('.expansion_panel__toggle').withExactText('Project')
        this.adderIcon = Selector('.adder_icon').child(0)
        this.lastProjectAdded = Selector('.text').child(-1) //testing for project

        this.moreOptionIcon = Selector('.more_actions_button')
    }

    async upcomingTaskPage(){
        await t
            .click(this.upcomingOption)
       //UPCOMING PAGE. insert a validation the user must verify the previous task (last position) is visible on 'Tomorrow" section
    }

    async clickOnAddNewProject(){
        await t
            .click(this.adderIcon)
    }
}

export default new commonPage