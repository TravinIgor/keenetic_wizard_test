import { expect, Page } from "@playwright/test";

export class TvOptionPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click_next() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/tv-option');

        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}