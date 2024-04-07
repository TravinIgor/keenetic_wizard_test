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
const language = process.env.LANGUAGE as string
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

  const welcomepage = new WelcomePage(page, language)
  const selectconfig = new SelectConfigurationOptionsPage(page, language)
  const selectregion = new SelectCountryOrRegionPage(page, language)
  const termsandprivacy = new TermsAndPrivacyPage(page, language)
  const RUacceptprivacy = new AcceptDevicePrivacyNoticePage(page, language)
  const password = new PasswordPage(page, language)
  const tvoption = new TvOptionPage(page, language)
  const vlaninfo = new VlanInformationPage(page, language)
  const connect = new ConnectKeeneticToWallOutletPage(page, language)
  const autoupdate = new AutoUpdatePage(page, language)
  const schedule = new AutoUpdateSchedulePage(page, language)
  const wifisettings = new WifiSettingsPage(page, language)
  const certificates = new DigitalCertificatesPage(page, language)
  const productimprove = new ProductImprovementPage(page, language)
  const credentials = new YourKeeneticCredentialsPage(page, language)
  const congratulate = new CongratulatePage(page, language)

  await page.goto(`${wizard}`)
  await page.waitForURL(`${wizard}`)
  await welcomepage.language_selector.click()
  await welcomepage.select_language.click()
  await welcomepage.run_wizard_button.click()

  await page.waitForURL(`${wizard}/select-configuration-option`)
  await selectconfig.select_option.click()
  await selectconfig.next_button.click()

  await page.waitForURL(`${wizard}/select-country-or-region`)
  await selectregion.country_selector.click()
  await selectregion.select_country.click()
  await selectregion.next_button.click()

  await page.waitForURL(`${wizard}/terms-and-privacy`)
  await termsandprivacy.checkbox.click()
  await termsandprivacy.accept_button.click()

  await page.waitForURL(`${wizard}/accept-device-privacy-notice`)
  await RUacceptprivacy.checkbox.click()
  await RUacceptprivacy.accept_button.click()

  await page.waitForURL(`${wizard}/password`)
  await password.password_field.fill(my_password)
  await password.next_button.click()

  await page.waitForURL(`${wizard}/tv-option`)
  await tvoption.next_button.click()

  await page.waitForURL(`${wizard}/vlan-information`)
  await vlaninfo.without_VLAN_button.click()

  await page.waitForURL(`${wizard}/connect-keenetic-to-wall-outlet`)
  await connect.next_button.click()

  await page.waitForURL(`${wizard}/auto-update`)
  await autoupdate.enable_updates_button.click()

  await page.waitForURL(`${wizard}/auto-update-schedule`)
  await schedule.next_button.click()

  await page.waitForURL(`${wizard}/wifi-settings`)
  await wifisettings.next_button.click()

  await page.waitForURL(`${wizard}/digital-certificates`)
  await certificates.next_button.click()

  await page.waitForURL(`${wizard}/product-improvement`)
  await productimprove.refuse_button.click()

  await page.waitForURL(`${wizard}/your-keenetic-credentials`)
  await credentials.next_button.click()

  await page.waitForURL(`${wizard}/congratulate`)
  await congratulate.finish_button.click()

  await page.waitForURL(`${base_url}/dashboard`)
})