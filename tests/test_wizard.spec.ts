import dotenv from 'dotenv'
import { test } from '@playwright/test'
import { LoginPage } from './pageobjectmodels/authorization.page'
import { CommandPage } from './pageobjectmodels/command.page'
import { WelcomePage } from './pageobjectmodels/1-welcome.page'
import { SelectConfigurationOptionsPage } from './pageobjectmodels/2-select-configuration-options.page'
import { SelectCountryOrRegionPage } from './pageobjectmodels/3-select-country-or-region.page'
import { TermsAndPrivacyPage } from './pageobjectmodels/4-terms-and-privacy.page'
import { AcceptDevicePrivacyNoticePage } from './pageobjectmodels/4.1(ru-only)-accept-device-privacy-notice.page'
import { PasswordPage } from './pageobjectmodels/5-password.page'
import { TvOptionPage } from './pageobjectmodels/6-tv-option.page'
import { VlanInformationPage } from './pageobjectmodels/7-vlan-information.page'
import { ConnectKeeneticToWallOutletPage } from './pageobjectmodels/8-connect-keenetic-to-wall-outlet.page'
import { AutoUpdatePage } from './pageobjectmodels/10-auto-update.page'
import { AutoUpadeSchedulePage as AutoUpdateSchedulePage } from './pageobjectmodels/11-auto-update-schedule.page'
import { WifiSettingsPage } from './pageobjectmodels/12-wifi-settings.page'
import { DigitalCertificatesPage } from './pageobjectmodels/13-digital-certificates.page'
import { ProductImprovementPage } from './pageobjectmodels/14-product-improvement.page'
import { YourKeeneticCredentialsPage } from './pageobjectmodels/15-your-keenetic-credentials.page'
import { CongratulatePage } from './pageobjectmodels/16-congratulate.page'


dotenv.config()

const base_url = process.env.BASE_URL
const wizard = `${base_url}${process.env.WIZARD}`
const my_password = process.env.PASSWORD as string


test.beforeEach('reset before each test', async ({ page }) => {
  test.setTimeout(10 * 60 * 1000)
  const auth = new LoginPage(page)
  const command = new CommandPage(page)

  await page.goto(`${base_url}/a`)
  await auth.login()
  await page.waitForURL(`${base_url}/a`)
  await command.command_field.fill('system configuration factory-reset')
  await command.send_request_button.click()
  await page.waitForTimeout(120 * 1000)
});


test('Wizard test', async ({ page }) => {
  test.setTimeout(20 * 60 * 1000)

  const welcomepage = new WelcomePage(page)
  const selectconfig = new SelectConfigurationOptionsPage(page)
  const selectregion = new SelectCountryOrRegionPage(page)
  const termsandprivacy = new TermsAndPrivacyPage(page)
  const RUacceptprivacy = new AcceptDevicePrivacyNoticePage(page)
  const password = new PasswordPage(page)
  const tvoption = new TvOptionPage(page)
  const vlaninfo = new VlanInformationPage(page)
  const connect = new ConnectKeeneticToWallOutletPage(page)
  const autoupdate = new AutoUpdatePage(page)
  const schedule = new AutoUpdateSchedulePage(page)
  const wifisettings = new WifiSettingsPage(page)
  const certificates = new DigitalCertificatesPage(page)
  const productimprove = new ProductImprovementPage(page)
  const credentials = new YourKeeneticCredentialsPage(page)
  const congratulate = new CongratulatePage(page)

  await page.goto(`${wizard}`)
  await page.waitForURL(`${wizard}`)
  await welcomepage.languageSelector.click()
  await welcomepage.selectLanguage.click()
  await welcomepage.runWizardButton.click()

  await page.waitForURL(`${wizard}/select-configuration-option`)
  await selectconfig.selectOption.click()
  await selectconfig.nextButton.click()

  await page.waitForURL(`${wizard}/select-country-or-region`)
  await selectregion.countrySelector.click()
  await selectregion.selectCountry.click()
  await selectregion.nextButton.click()

  await page.waitForURL(`${wizard}/terms-and-privacy`)
  await termsandprivacy.checkbox.click()
  await termsandprivacy.acceptButton.click()

  await page.waitForURL(`${wizard}/accept-device-privacy-notice`)
  await RUacceptprivacy.checkbox.click()
  await RUacceptprivacy.acceptButton.click()

  await page.waitForURL(`${wizard}/password`)
  await password.passwordField.fill(my_password)
  await password.nextButton.click()

  await page.waitForURL(`${wizard}/tv-option`)
  await tvoption.nextButton.click()

  await page.waitForURL(`${wizard}/vlan-information`)
  await vlaninfo.withoutVLANButton.click()

  await page.waitForURL(`${wizard}/connect-keenetic-to-wall-outlet`)
  await connect.nextButton.click()

  await page.waitForURL(`${wizard}/auto-update`)
  await autoupdate.enableUpdatesButton.click()

  await page.waitForURL(`${wizard}/auto-update-schedule`)
  await schedule.nextButton.click()

  await page.waitForURL(`${wizard}/wifi-settings`)
  await wifisettings.nextButton.click()

  await page.waitForURL(`${wizard}/digital-certificates`)
  await certificates.nextButton.click()

  await page.waitForURL(`${wizard}/product-improvement`)
  await productimprove.refuseButton.click()

  await page.waitForURL(`${wizard}/your-keenetic-credentials`)
  await credentials.nextButton.click()

  await page.waitForURL(`${wizard}/congratulate`)
  await congratulate.finishButton.click()

  await page.waitForURL(`${base_url}/dashboard`)
})