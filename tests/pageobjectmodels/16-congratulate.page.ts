import { expect, Page } from "@playwright/test";

export class CongratulatePage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click_finish() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/congratulate');

        await this.page.getByRole('button', { name: 'Finish' }).click();
    }
}