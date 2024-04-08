// /wizards/initial-setup/terms-and-privacy
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class TermsAndPrivacyPage extends BasePage{
    readonly checkbox: Locator
    readonly acceptButton: Locator

    constructor(page: Page) {
        super(page)

        this.checkbox = page.locator('.mat-checkbox-inner-container')
        this.acceptButton = page.getByRole('button', { name: this.buttons['accept'] })
    }
}