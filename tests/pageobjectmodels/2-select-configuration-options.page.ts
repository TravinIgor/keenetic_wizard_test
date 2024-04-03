import { expect, Page } from "@playwright/test";

export class SelectConfigurationOptionsPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async select_option_and_click_next() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/select-configuration-option');

        await this.page.getByText('To set up Internet access via an Ethernet cable supplied directly by your ISP').click();
        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}