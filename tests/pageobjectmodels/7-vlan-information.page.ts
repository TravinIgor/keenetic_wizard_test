// /wizards/initial-setup/vlan-information
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class VlanInformationPage extends BasePage{
    readonly withoutVLANButton: Locator

    constructor(page: Page) {
        super(page)

        this.withoutVLANButton = page.getByRole('button', { name: this.localizationData['isw']['vlan-setup']['without-vlan'] })
    }
}