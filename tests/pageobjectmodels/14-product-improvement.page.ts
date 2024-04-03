import { expect, Page } from "@playwright/test";

export class ProductImprovementPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click_refuse() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/product-improvement');

        await this.page.getByRole('button', { name: 'Refuse' }).click();
    }
}