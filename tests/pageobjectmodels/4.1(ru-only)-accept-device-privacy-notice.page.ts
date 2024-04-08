// !!!WARNING this page will appear ONLY if russian language is installed WARNING!!!
// /wizards/initial-setup/accept-device-privacy-notice
import { Page } from "@playwright/test"
import { TermsAndPrivacyPage } from "./4-terms-and-privacy.page"

export class AcceptDevicePrivacyNoticePage extends TermsAndPrivacyPage{

    constructor(page: Page) {
        super(page)
    }
}