// /wizards/initial-setup/wifi-settings
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class WifiSettingsPage{
    readonly page: Page
    readonly button_name: string

    readonly next_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.button_name = jsonData['isw']['buttons']['next']

        this.next_button = page.getByRole('button', { name: this.button_name })
    }
}