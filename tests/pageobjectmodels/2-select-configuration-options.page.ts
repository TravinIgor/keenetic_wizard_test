// /wizards/initial-setup/select-configuration-option
import { Locator, Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class SelectConfigurationOptionsPage extends BasePageWithNextButton{
    readonly selectOption: Locator

    constructor(page: Page) {
        super(page)

        this.selectOption = page.getByText(this.localizationData['isw']['select-configuration-option']['choices']['via-ethernet']['label'])
    }
}