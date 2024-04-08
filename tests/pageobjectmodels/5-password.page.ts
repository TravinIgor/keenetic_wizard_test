// /wizards/initial-setup/password
import { Locator, Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class PasswordPage extends BasePageWithNextButton{
    readonly password_field_name: string

    readonly password_field: Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.password_field_name = this.jsonData['password']

        this.password_field = page.getByLabel(this.password_field_name)
    }
}