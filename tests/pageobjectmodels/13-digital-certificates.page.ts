import { expect, Page } from "@playwright/test";

export class DigitalCertificatesPage{
    public page: Page

    constructor(page: Page) {
        this.page = page
    }

    async click_next() {
        await expect(this.page).toHaveURL('http://192.168.1.1/wizards/initial-setup/digital-certificates');

        await this.page.getByText('info').isVisible();
        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}