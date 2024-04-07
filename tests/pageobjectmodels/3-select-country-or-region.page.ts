// /wizards/initial-setup/select-country-or-region
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class SelectCountryOrRegionPage{
    readonly page: Page
    readonly country_name: string
    readonly button_name: string

    readonly country_selector: Locator
    readonly select_country: Locator
    readonly next_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.country_name = jsonData['country']['RU']
        this.button_name = jsonData['isw']['buttons']['next']

        this.country_selector = page.locator('.mat-form-field-infix').first()
        this.select_country = page.getByRole('option', { name: this.country_name })
        this.next_button = page.getByRole('button', { name: this.button_name })
    }
}