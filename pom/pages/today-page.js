import { Selector, t } from "testcafe";

class TodayPage{
    constructor(){
        this.todayLabel = Selector('.simple_content').withExactText('Today')
        this.addTodayTaskPlus = Selector('.plus_add_button')
        this.addTodayInput = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')//.task_editor__content_field')
        this.addTaskButton = Selector('.reactist_button.reactist_button--primary')
    }

    async addNewTask(task){
        await t
            .click(todayPage.addTodayTaskPlus)
            .typeText(todayPage.addTodayInput, TASKS.ADD_TASK)
            .click(todayPage.addTaskButton)
    }
}

export default new TodayPage