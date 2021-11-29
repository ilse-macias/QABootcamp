import { Selector, t } from "testcafe"
import commonPage from "./commonPage"

class ProjectPage{
    constructor(){
       //TODO: Validate project page

        this.nameProjectInput = Selector('#edit_project_modal_field_name')
        this.colorProjectInput = Selector('.color_dropdown_select__name')
        this.favoriteSwitch = Selector('.reactist_switch--handle')
        this.addProjectButton = Selector('.ist_button.ist_button_red')

        this.colorProjectDropDownList = Selector('.color_dropdown_select__name').withExactText('Grape')
    }

    async CreateNewProject(project){
        await commonPage
            .clickOnAddNewProject()
        await t
            .typeText(this.nameProjectInput, project, {paste: true})
            .click(this.colorProjectInput)
            .click(this.colorProjectDropDownList)
            .click(this.favoriteSwitch)
            .click(this.addProjectButton)
    }
}

export default new ProjectPage