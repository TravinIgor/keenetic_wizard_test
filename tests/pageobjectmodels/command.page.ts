// /a
import { Locator, Page } from "@playwright/test";

export class CommandPage{
    readonly page: Page

    readonly command_field: Locator
    readonly send_request_button: Locator

    constructor(page: Page) {
        this.page = page

        this.command_field = page.locator('input[name="cmd"]')
        this.send_request_button = page.getByRole('button', { name: 'Send request' })
    }
}