// /wizards/initial-setup/your-keenetic-credentials
import { Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class YourKeeneticCredentialsPage extends BasePageWithNextButton{

    constructor(page: Page, language: string) {
        super(page, language)
    }
}