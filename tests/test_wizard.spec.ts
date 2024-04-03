import { test, expect } from '@playwright/test';
import { ResetPage } from './pageobjectmodels/0-reset.page';
import { WelcomePage } from './pageobjectmodels/1-welcome.page';
import { SelectConfigurationOptionsPage } from './pageobjectmodels/2-select-configuration-options.page';
import { SelectCountryOrRegionPage } from './pageobjectmodels/3-select-country-or-region.page';
import { TermsAndPrivacyPage } from './pageobjectmodels/4-terms-and-privacy.page';
import { AcceptDevicePrivacyNoticePage } from './pageobjectmodels/4.1(ru-only)-accept-device-privacy-notice.page';
import { PasswordPage } from './pageobjectmodels/5-password.page';
import { TvOptionPage } from './pageobjectmodels/6-tv-option.page';
import { VlanInformationPage } from './pageobjectmodels/7-vlan-information.page';
import { ConnectKeeneticToWallOutletPage } from './pageobjectmodels/8-connect-keenetic-to-wall-outlet.page';
import { AutoUpdatePage } from './pageobjectmodels/10-auto-update.page';
import { AutoUpadeSchedulePage } from './pageobjectmodels/11-auto-update-schedule.page';
import { WifiSettingsPage } from './pageobjectmodels/12-wifi-settings.page';
import { DigitalCertificatesPage } from './pageobjectmodels/13-digital-certificates.page';
import { ProductImprovementPage } from './pageobjectmodels/14-product-improvement.page';
import { YourKeeneticCredentialsPage } from './pageobjectmodels/15-your-keenetic-credentials.page';
import { CongratulatePage } from './pageobjectmodels/16-congratulate.page';


test.beforeEach(async ({ page }) => {
  // const reset = new ResetPage(page);
  // await reset.reset();
});


test('Wizard test', async ({ page }) => {
  test.setTimeout(10 * 60 * 1000);
  const welcomepage = new WelcomePage(page);
  const selectconfig = new SelectConfigurationOptionsPage(page);
  const selectregion = new SelectCountryOrRegionPage(page);
  const termsandprivacy = new TermsAndPrivacyPage(page);
  const RUacceptprivacy = new AcceptDevicePrivacyNoticePage(page);
  const password = new PasswordPage(page);
  const tvoption = new TvOptionPage(page);
  const vlaninfo = new VlanInformationPage(page);
  const connect = new ConnectKeeneticToWallOutletPage(page);
  const autoupadte = new AutoUpdatePage(page);
  const schedule = new AutoUpadeSchedulePage(page);
  const wifisettings = new WifiSettingsPage(page);
  const certificates = new DigitalCertificatesPage(page);
  const productimprove = new ProductImprovementPage(page);
  const credentials = new YourKeeneticCredentialsPage(page);
  const congratulate = new CongratulatePage(page);

  await page.goto('http://192.168.1.1');

  await welcomepage.select_language_and_click_start();
  await selectconfig.select_option_and_click_next();
  await selectregion.select_country_and_click_next();
  await termsandprivacy.check_checkbox_and_click_accept();
  // WARNING!!! only for RU
  await RUacceptprivacy.check_checkbox_and_click_accept();
  // WARNING!!! only for RU
  await password.fill_password_and_click_next();
  await tvoption.click_next();
  await vlaninfo.click_without_vlan();
  await connect.click_next();
  await autoupadte.click_enable_auto_apdate();
  await schedule.click_next();
  await wifisettings.click_next();
  await certificates.click_next();
  await productimprove.click_refuse();
  await credentials.click_next();
  await congratulate.click_finish();

  await expect(page).toHaveURL('http://192.168.1.1/dashboard');
});
