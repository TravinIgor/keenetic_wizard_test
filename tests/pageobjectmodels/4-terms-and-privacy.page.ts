import { expect, Page } from "@playwright/test";

export class TermsAndPrivacyPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async check_checkbox_and_click_accept() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/terms-and-privacy');

        await this.page.locator('.mat-checkbox-inner-container').click();
        await this.page.getByRole('button', { name: 'Accept' }).click();
    }
}