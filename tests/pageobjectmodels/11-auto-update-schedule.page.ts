// /wizards/initial-setup/auto-update-schedule
import { Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class AutoUpadeSchedulePage extends BasePageWithNextButton{

    constructor(page: Page, language: string) {
        super(page, language)
    }
}