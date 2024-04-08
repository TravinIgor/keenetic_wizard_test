// /wizards/initial-setup/select-configuration-option
import { Locator, Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class SelectConfigurationOptionsPage extends BasePageWithNextButton{
    readonly option_name: string

    readonly select_option: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.option_name = this.jsonData['isw']['select-configuration-option']['choices']['via-ethernet']['label']

        this.select_option = page.getByText(this.option_name)
    }
}