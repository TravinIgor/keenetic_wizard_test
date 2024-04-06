// /wizards/initial-setup/auto-update
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class AutoUpdatePage{
    readonly page: Page
    readonly button_name: string

    readonly enable_updates_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.button_name = jsonData['isw']['auto-update']['auto-update-btn']

        this.enable_updates_button = page.getByRole('button', { name: this.button_name })
    }
}