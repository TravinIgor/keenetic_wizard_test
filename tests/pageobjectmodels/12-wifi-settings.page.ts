// /wizards/initial-setup/wifi-settings
import { Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class WifiSettingsPage extends BasePageWithNextButton{

    constructor(page: Page) {
        super(page)
    }
}