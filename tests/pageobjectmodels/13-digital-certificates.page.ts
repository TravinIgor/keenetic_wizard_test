// /wizards/initial-setup/digital-certificates
import { Page } from "@playwright/test"
import { BasePageWithNextButton } from "./base.page"

export class DigitalCertificatesPage extends BasePageWithNextButton{

    constructor(page: Page) {
        super(page)
    }
}