import { Selector, t } from "testcafe";

class TaskPage{
    constructor(){
        this.todayTitle = (Selector('.simple_content').withExactText('Today'))

        this.addTaskPlus = Selector('.plus_add_button')
        this.addTaskInput = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')//.task_editor__content_field')
        this.addTaskButton = Selector('.reactist_button.reactist_button--primary')
    }

    async addNewTaskForToday(task){
        await t
            .click(this.addTaskPlus)
            .typeText(this.addTaskInput, task)
            .click(this.addTaskButton)
    }

    async addNewTaskForTomorrow(task){
        await t
            .click(this.addTaskPlus)
            .typeText(this.addTaskInput, task)
            .click(this.addTaskButton)
    }

}

export default new TaskPage