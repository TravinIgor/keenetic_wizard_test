import { expect, Page } from "@playwright/test";

export class AutoUpadeSchedulePage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click_next() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/auto-update-schedule');

        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}