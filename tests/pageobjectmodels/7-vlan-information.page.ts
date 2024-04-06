// /wizards/initial-setup/vlan-information
import { Locator, Page } from "@playwright/test"
import fs from 'fs'

export class VlanInformationPage{
    readonly page: Page
    readonly button_name: string

    readonly without_VLAN_button: Locator

    constructor(page: Page, language: string) {
        let rawData = fs.readFileSync(`./localizations/locale.${language}.json`)
        let jsonData = JSON.parse(rawData)
        this.page = page
        this.button_name = jsonData['isw']['vlan-setup']['without-vlan']

        this.without_VLAN_button = page.getByRole('button', { name: this.button_name })
    }
}