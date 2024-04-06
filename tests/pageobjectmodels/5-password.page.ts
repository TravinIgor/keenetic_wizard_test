// /wizards/initial-setup/password
import { expect, Locator, Page } from "@playwright/test"
import fs from 'fs'

export class PasswordPage{
    readonly page: Page
    readonly password_field_name: string
    readonly button_name: string

    readonly password_field: Locator
    readonly next_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.password_field_name = jsonData['password']
        this.button_name = jsonData['isw']['buttons']['next']

        this.password_field = page.getByLabel(this.password_field_name)
        this.next_button = page.getByRole('button', { name: this.button_name })
    }
}