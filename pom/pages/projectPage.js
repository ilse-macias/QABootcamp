import { Selector, t } from "testcafe"

class ProjectPage{
    constructor(){
       //TODO: Validate project page

        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.colorProjectInput = Selector('.color_dropdown_select__name')
        this.addProjectButton = Selector('.ist_button ist_button_red')

        this.colorProjectDropDownList = Selector('color_dropdown_select__name').withExactText('Grape')
    }

    async CreateNewProject(project){
        await t
            .typeText(this.nameProjectInput, project, {paste: true})
            .click(this.colorProjectInput)
            .click(this.colorProjectDropDownList)
            .click(this.addProjectButton)
    }
}

export default new ProjectPage