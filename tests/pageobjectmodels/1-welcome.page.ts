// /wizards/initial-setup
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class WelcomePage extends BasePage{
    readonly language_name: string
    readonly button_name: string

    readonly language_selector: Locator
    readonly select_language: Locator
    readonly run_wizard_button: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.language_name = this.jsonData['languages'][language]
        this.button_name = this.jsonData['run-wizard']

        this.language_selector = page.locator('#mat-select-value-1')
        this.select_language = page.getByRole('option', { name: this.language_name })
        this.run_wizard_button = page.getByRole('button', { name: this.button_name })
    }
}