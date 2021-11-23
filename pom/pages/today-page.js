import { Selector } from "testcafe";

class TodayPage{
    constructor(){
        this.todayLabel = Selector('.view_header__content')
                .child('h1')
                .child('.simple_content')
        this.addTodayTaskPlus = Selector('.plus_add_button')
        this.addTaskButton = Selector('.reactist_button.reactist_button--primary')
    }
}

export default new TodayPage