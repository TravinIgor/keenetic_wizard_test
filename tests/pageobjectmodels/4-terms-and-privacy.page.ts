// /wizards/initial-setup/terms-and-privacy
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class TermsAndPrivacyPage extends BasePage{
    readonly button_name: string

    readonly checkbox: Locator
    readonly accept_button: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.button_name = this.buttons['accept']

        this.checkbox = page.locator('.mat-checkbox-inner-container')
        this.accept_button = page.getByRole('button', { name: this.button_name })
    }
}