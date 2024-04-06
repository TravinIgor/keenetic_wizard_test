// /wizards/initial-setup/product-improvement
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class ProductImprovementPage{
    readonly page: Page
    readonly button_name: string

    readonly refuse_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.button_name = jsonData['isw']['buttons']['do-not-share']

        this.refuse_button = page.getByRole('button', { name: this.button_name })
    }
}