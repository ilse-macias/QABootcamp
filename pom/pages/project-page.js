import { Selector } from "testcafe"

class ProjectPage{
    constructor(){
        this.addNewProject = Selector('#list_holder>div.sidebar_expansion_panel.expansion_panel.expansion_panel--expanded>div.expansion_panel__header>div>button')

        this.nameProject = Selector('#edit_project_modal_field_name')
    }
}