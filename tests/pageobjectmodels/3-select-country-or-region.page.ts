// /wizards/initial-setup/select-country-or-region
import { Locator, Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class SelectCountryOrRegionPage extends BasePageWithNextButton{
    readonly countrySelector: Locator
    readonly selectCountry: Locator

    constructor(page: Page) {
        super(page)

        this.countrySelector = page.locator('.mat-form-field-infix').first()
        this.selectCountry = page.getByRole('option', { name: this.localizationData['country']['RU'] })
    }
}