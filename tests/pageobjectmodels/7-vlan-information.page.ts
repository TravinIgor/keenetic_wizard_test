import { expect, Page } from "@playwright/test";

export class VlanInformationPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click_without_vlan() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/vlan-information');

        await this.page.getByRole('button', { name: 'Without VLAN' }).click();
    }
}