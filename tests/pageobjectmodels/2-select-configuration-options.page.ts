// /wizards/initial-setup/select-configuration-option
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class SelectConfigurationOptionsPage{
    readonly page: Page
    readonly option_name: string
    readonly button_name: string

    readonly select_option: Locator
    readonly next_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.option_name = jsonData['isw']['select-configuration-option']['choices']['via-ethernet']['label']
        this.button_name = jsonData['isw']['buttons']['next']

        this.select_option = page.getByText(this.option_name)
        this.next_button = page.getByRole('button', { name: this.button_name })
    }
}