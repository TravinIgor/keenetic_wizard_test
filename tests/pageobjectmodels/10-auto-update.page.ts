// /wizards/initial-setup/auto-update
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class AutoUpdatePage extends BasePage{
    readonly button_name: string

    readonly enable_updates_button: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.button_name = this.jsonData['isw']['auto-update']['auto-update-btn']

        this.enable_updates_button = page.getByRole('button', { name: this.button_name })
    }
}