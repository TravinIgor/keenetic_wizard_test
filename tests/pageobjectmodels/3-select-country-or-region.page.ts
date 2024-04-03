import { expect, Page } from "@playwright/test";

export class SelectCountryOrRegionPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async select_country_and_click_next() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/select-country-or-region');

        await this.page.locator('.mat-form-field-infix').first().click();
        await this.page.getByText('Russia').click();
        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}