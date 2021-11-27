import { Selector, t } from "testcafe";

class TaskPage{
    constructor(){
        this.todayTitle = Selector('.simple_content').withExactText('Today')

        this.addTaskPlus = Selector('.plus_add_button')
        this.addTaskInput = Selector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')//.task_editor__content_field')
        this.addTaskButton = Selector('.reactist_button.reactist_button--primary')

        this.dueSelectorButton = Selector('.date.date_today')//'.item_due_selector_text')
        this.clickTomorrowOption = Selector('.scheduler-suggestions-item').withExactText('Tomorrow')
    }

    //.expect(taskPage.todayTitle.exists).ok()
    // async assertTodayTitle(){
    //     await t.expect(this.todayTitle.exists).ok()//('Today'))
    // }

    async addNewTaskForToday(task){
        await t
            .click(this.addTaskPlus)
            .typeText(this.addTaskInput, task, {paste: true})
            .click(this.addTaskButton)
    }

    async addNewTaskForTomorrow(task){
        await t
            .click(this.addTaskPlus)
            .typeText(this.addTaskInput, task, {paste: true})
            .click(this.addTaskButton)
    }

    async addNewTaskForTomorrowSecondOption(task){
        await t
            .click(this.addTaskPlus)
            .typeText(this.addTaskInput, task, {paste: true})
            .click(this.dueSelectorButton)
            .click(this.addTaskButton)
            .click(this.clickTomorrowOption)
    }
}

export default new TaskPage