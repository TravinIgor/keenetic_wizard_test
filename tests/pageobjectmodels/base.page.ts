import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class BasePage{
    readonly page: Page
    readonly language_name: string
    readonly buttons: string
    readonly jsonData: string

    readonly language_selector: Locator
    readonly select_language: Locator
    readonly run_wizard_button: Locator

    constructor(page: Page, language: string) {
        this.jsonData = JSON.parse(fs.readFileSync(`./localizations/locale.${language}.json`).toString())
        this.page = page
        this.buttons = this.jsonData['isw']['buttons']
    }
}

export class BasePageWithNextButton extends BasePage{
    readonly next_button:  Locator

    constructor(page: Page, language: string) {
        super(page, language)
        this.next_button = page.getByRole('button', { name: this.buttons['next'] })
    }
}