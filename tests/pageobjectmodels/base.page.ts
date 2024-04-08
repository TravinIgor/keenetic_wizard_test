import { Locator, Page } from "@playwright/test"
import fs from 'fs'


const language = process.env.LANGUAGE


export class BasePage{
    readonly page: Page
    readonly buttons: string
    readonly localizationData: string

    constructor(page: Page) {
        this.localizationData = JSON.parse(fs.readFileSync(`./localizations/locale.${language}.json`).toString())
        this.page = page
        this.buttons = this.localizationData['isw']['buttons']
    }
}

export class BasePageWithNextButton extends BasePage{
    readonly nextButton:  Locator

    constructor(page: Page) {
        super(page)
        this.nextButton = page.getByRole('button', { name: this.buttons['next'] })
    }
}