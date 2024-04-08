// /wizards/initial-setup/select-country-or-region
import { Locator, Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class SelectCountryOrRegionPage extends BasePageWithNextButton{
    readonly country_name: string

    readonly country_selector: Locator
    readonly select_country: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.country_name = this.jsonData['country']['RU']

        this.country_selector = page.locator('.mat-form-field-infix').first()
        this.select_country = page.getByRole('option', { name: this.country_name })
    }
}