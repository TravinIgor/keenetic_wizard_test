// /wizards/initial-setup/congratulate
import { Locator, Page } from "@playwright/test"
import { BasePage } from "./base.page"

export class CongratulatePage extends BasePage{
    readonly finishButton: Locator

    constructor(page: Page) {
        super(page)

        this.finishButton = page.getByRole('button', { name: this.buttons['finish'] })
    }
}