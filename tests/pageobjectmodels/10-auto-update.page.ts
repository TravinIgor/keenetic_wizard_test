import { expect, Page } from "@playwright/test";

export class AutoUpdatePage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click_enable_auto_apdate() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/auto-update');

        await this.page.getByRole('button', { name: 'Enable Automatic Updates' }).click();
    }
}