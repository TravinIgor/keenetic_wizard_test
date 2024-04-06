// /wizards/initial-setup/digital-certificates
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class DigitalCertificatesPage{
    readonly page: Page
    readonly button_name: string

    readonly info_message: Locator
    readonly next_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.button_name = jsonData['isw']['buttons']['next']

        this.info_message = page.getByText('info')
        this.next_button = page.getByRole('button', { name: this.button_name })
    }
}