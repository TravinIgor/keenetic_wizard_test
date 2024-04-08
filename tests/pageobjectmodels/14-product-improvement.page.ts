// /wizards/initial-setup/product-improvement
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class ProductImprovementPage extends BasePage{
    readonly button_name: string

    readonly refuse_button: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.button_name = this.buttons['do-not-share']

        this.refuse_button = page.getByRole('button', { name: this.button_name })
    }
}