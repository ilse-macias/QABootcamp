import { Selector, t } from "testcafe"

class CommonPage{
    constructor(){
        /*Menu left side*/

        this.inboxOption = Selector('.item_content').child(0) //Inbox
        this.upcomingOption = Selector('.item_content').withExactText('Upcoming')
        
        //Projects
        this.expandProjectPanel = Selector('.expansion_panel__toggle').withExactText('Project')
        this.adderIcon = Selector('.adder_icon').child(0)
        this.lastProjectAdded = Selector('.text').nth(-1) 

        //Favorites
        this.lastProjectFavorite = Selector('.FnFY2YlPR10DcnOkjvMMmA==')

        /*Right Pannel: Inbox, Today and Upcoming*/
        this.tasksList = Selector('.task_list_item__content__wrapper').nth(-1)

        /*Modal for tasks*/
        this.moreOptionIcon = Selector('.item_action.item_actions_more')
        this.deleteTaskOption = Selector('.icon_menu_item__content').withText('Delete ')

        /*Modal for delete */
        this.deleteConfirmButton = Selector('.ist_button.ist_button_red')
    }

    async upcomingTaskPage(){
        await t
            .click(this.upcomingOption)
    }

    async clickOnAddNewProject(){
        await t
            .click(this.adderIcon)
    }

    async clickOnInboxSection(){
        await t
            .click(this.inboxOption)
            .click(this.tasksList)
            .click(this.moreOptionIcon)
            .click(this.deleteTaskOption)
            .click(this.deleteConfirmButton)
    }
}

export default new CommonPage