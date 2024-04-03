import { expect, Page } from "@playwright/test";

export class PasswordPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async fill_password_and_click_next() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/password');

        await this.page.getByLabel('Password').fill('12345');
        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}