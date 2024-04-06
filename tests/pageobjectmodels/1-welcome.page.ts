// /wizards/initial-setup
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class WelcomePage{
    readonly page: Page
    readonly language_name: string
    readonly button_name: string

    readonly language_selector: Locator
    readonly select_language: Locator
    readonly run_wizard_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.language_name = jsonData['languages'][language]
        this.button_name = jsonData['isw']['buttons']['run-wizard']

        this.language_selector = page.locator('#mat-select-value-1')
        this.select_language = page.getByRole('option', { name: this.language_name })
        this.run_wizard_button = page.getByRole('button', { name: this.button_name })
    }
}