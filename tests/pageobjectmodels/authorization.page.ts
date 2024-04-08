// /login
import { Locator, Page } from "@playwright/test";
import dotenv from 'dotenv'

dotenv.config()
const login = process.env.LOGIN as string
const pass = process.env.PASSWORD as string

export class LoginPage{
    readonly page: Page

    readonly usernamField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page

        this.usernamField = page.getByLabel('Username')
        this.passwordField = page.getByLabel('Password')
        this.loginButton = page.getByRole('button', { name: 'Log In' })
    }

    async login() {
        await this.usernamField.fill(login)
        await this.passwordField.fill(pass)
        await this.loginButton.click()
    }
}