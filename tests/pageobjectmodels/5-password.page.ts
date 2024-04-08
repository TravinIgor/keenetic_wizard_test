// /wizards/initial-setup/password
import { Locator, Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class PasswordPage extends BasePageWithNextButton{
    readonly passwordField: Locator

    constructor(page: Page) {
        super(page)

        this.passwordField = page.getByLabel(this.localizationData['password'])
    }
}