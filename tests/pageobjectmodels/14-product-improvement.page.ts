// /wizards/initial-setup/product-improvement
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class ProductImprovementPage extends BasePage{
    readonly refuseButton: Locator

    constructor(page: Page) {
        super(page)

        this.refuseButton = page.getByRole('button', { name: this.buttons['do-not-share'] })
    }
}