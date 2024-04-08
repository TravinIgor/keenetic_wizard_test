// /wizards/initial-setup/vlan-information
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class VlanInformationPage extends BasePage{
    readonly button_name: string

    readonly without_VLAN_button: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.button_name = this.jsonData['isw']['vlan-setup']['without-vlan']

        this.without_VLAN_button = page.getByRole('button', { name: this.button_name })
    }
}