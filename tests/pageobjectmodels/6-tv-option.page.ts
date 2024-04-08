// /wizards/initial-setup/tv-option
import { Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class TvOptionPage extends BasePageWithNextButton{

    constructor(page: Page, language: string) {
        super(page, language)
    }
}