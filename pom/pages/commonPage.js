import { Selector, t } from "testcafe"

class commonPage{
    constructor(){
        this.expandProjectPanel = Selector('.expansion_panel__toggle').withExactText('Project')
        this.adderIcon = Selector('.adder_icon').child(0)
    }

    async clickOnAddNewProject(){
        await t
            .click(this.adderIcon)
    }
}

export default new commonPage