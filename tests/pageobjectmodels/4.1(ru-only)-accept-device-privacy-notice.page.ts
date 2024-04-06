// !!!WARNING this page will appear ONLY if russian language is installed WARNING!!!
// /wizards/initial-setup/accept-device-privacy-notice
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class AcceptDevicePrivacyNoticePage{
    readonly page: Page
    readonly button_name: string

    readonly checkbox: Locator
    readonly accept_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.button_name = jsonData['isw']['buttons']['accept']

        this.checkbox = page.locator('.mat-checkbox-inner-container')
        this.accept_button = page.getByRole('button', { name: this.button_name })
    }
}