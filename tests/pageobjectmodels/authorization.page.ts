// /login
import { Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page
    readonly username_field_name: string
    readonly password_field_name: string
    readonly button_name: string

    readonly username_field: Locator
    readonly password_field: Locator
    readonly login_button: Locator

    constructor(page: Page) {
        this.page = page
        this.username_field_name = 'Username'
        this.password_field_name = 'Password'
        this.button_name = 'Log In'

        this.username_field = page.getByLabel(this.username_field_name)
        this.password_field = page.getByLabel(this.password_field_name)
        this.login_button = page.getByRole('button', { name: this.button_name })
    }

    async login() {
        await this.username_field.fill('admin')
        await this.password_field.fill('12345')
        await this.login_button.click()
    }
}