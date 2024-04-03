import { expect, Page } from "@playwright/test";

export class WelcomePage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async select_language_and_click_start() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup');

        await this.page.locator('#mat-select-value-1').click();
        await this.page.getByRole('option', { name: 'English' }).click();
        await this.page.getByRole('button', { name: 'Run wizard' }).click();
    }
}