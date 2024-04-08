// /wizards/initial-setup
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"


const language = process.env.LANGUAGE


export class WelcomePage extends BasePage{
    readonly languageSelector: Locator
    readonly selectLanguage: Locator
    readonly runWizardButton: Locator

    constructor(page: Page) {
        super(page)

        this.languageSelector = page.locator('#mat-select-value-1')
        this.selectLanguage = page.getByRole('option', { name: this.localizationData['languages'][language] })
        this.runWizardButton = page.getByRole('button', { name: this.localizationData['run-wizard'] })
    }
}