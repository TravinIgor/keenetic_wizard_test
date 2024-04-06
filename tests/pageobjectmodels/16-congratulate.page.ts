// /wizards/initial-setup/congratulate
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class CongratulatePage{
    readonly page: Page
    readonly button_name: string

    readonly finish_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.button_name = jsonData['isw']['buttons']['finish']

        this.finish_button = page.getByRole('button', { name: this.button_name })
    }
}