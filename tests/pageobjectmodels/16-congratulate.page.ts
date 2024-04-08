// /wizards/initial-setup/congratulate
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class CongratulatePage extends BasePage{
    readonly button_name: string

    readonly finish_button: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.button_name = this.buttons['finish']

        this.finish_button = page.getByRole('button', { name: this.button_name })
    }
}