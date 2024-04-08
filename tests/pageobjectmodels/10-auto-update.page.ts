// /wizards/initial-setup/auto-update
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class AutoUpdatePage extends BasePage{
    readonly enableUpdatesButton: Locator

    constructor(page: Page) {
        super(page)

        this.enableUpdatesButton = page.getByRole('button', { name: this.localizationData['isw']['auto-update']['auto-update-btn'] })
    }
}