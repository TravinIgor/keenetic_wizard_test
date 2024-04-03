import { expect, Page } from "@playwright/test";

export class ResetPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async reset() {
        await this.page.goto('http://192.168.1.1/controlPanel/system');

        await expect(this.page).not.toHaveURL('http://192.168.1.1/wizards/initial-setup');

        await this.page.getByLabel('Username').fill('admin');
        await this.page.getByLabel('Password').fill('12345');
        await this.page.getByRole('button', { name: 'Log In' }).click();
        await this.page.getByRole('button', { name: 'Reset all settings' }).click();
        await this.page.locator('input[name="defaultInput"]').fill('RESET');
        await this.page.getByRole('button', { name: 'Delete settings' }).click();
    }
}