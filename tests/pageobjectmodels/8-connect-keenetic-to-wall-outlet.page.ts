// /wizards/initial-setup/connect-keenetic-to-wall-outlet
import { Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class ConnectKeeneticToWallOutletPage extends BasePageWithNextButton{

    constructor(page: Page, language: string) {
        super(page, language)
    }
}