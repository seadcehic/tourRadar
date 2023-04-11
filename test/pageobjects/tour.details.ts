import { ChainablePromiseElement } from "webdriverio";

import Page from "./page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TourDetails extends Page {
  /**
   * define selectors using getter methods
   */

  public get btnViewTour() {
    return $("(//h4[@itemprop='name']/..)[1]");
  }

  public get btnCheckAvailability() {
    return $("button.js-ao-tour__booking-intent");
  }

  public get btnConfirmDates() {
    return $(
      "(//div[@class='am-tour-availability__variant-cta-container'])[1]//button"
    );
  }

  public get btnApply() {
    return $("//button[text()='Apply']");
  }

  public get appliedMessage() {
    return $("div.js-accommodation__pax-assigned");
  }

  public get inputFirstName() {
    return $("#t2-1");
  }

  public get inputLastName() {
    return $("#t4-1");
  }

  public get inputPhoneNumber() {
    return $("#t6-1");
  }

  public get selectDay() {
    return $("#t7-1");
  }

  public get optionDay() {
    return $("//option[text()='3']");
  }

  public get selectMonth() {
    return $("#t7-1-month");
  }

  public get optionMonth() {
    return $("//option[text()='April']");
  }

  public get selectYear() {
    return $("#t7-1-year");
  }

  public get optionYear() {
    return $("//option[text()='1996']");
  }

  public get radioBtnGender() {
    return $("//label[@for='26-1-1']");
  }

  public get selectNationality() {
    return $("#t15-1");
  }

  public get optionNationality() {
    return $("//option[text()='Bosnia']");
  }

  public get inputCardHolderName() {
    return $("#cardHolder");
  }

  public get inputCardNumber() {
    return $("#credit-card-number");
  }

  public get inputExpiryDate() {
    return $("#expiration");
  }

  public get inputCVV() {
    return $("#cvv");
  }

  public get btnBookTour() {
    return $("a.js-book-now-cta");
  }

  public get cardNumberFrame() {
    return $("#braintree-hosted-field-number");
  }

  public get expiryDateFrame() {
    return $("#braintree-hosted-field-expirationDate");
  }

  public get cvvFrame() {
    return $("#braintree-hosted-field-cvv");
  }

  public async viewTour(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    cardHolderName: string,
    cardNumber: string,
    expiryDate: string,
    cardCVV: string
  ) {
    // view tour
    await this.btnViewTour.waitForDisplayed();
    await this.btnViewTour.click();
    await browser.switchWindow("#p=1_");
    await this.btnCheckAvailability.waitForDisplayed();
    await this.btnCheckAvailability.click();
    await this.btnConfirmDates.waitForDisplayed();
    await this.btnConfirmDates.click();
    await browser.switchWindow("type=book");
    await this.btnApply.waitForDisplayed();
    await this.btnApply.waitForClickable();
    await browser.pause(2000);
    await this.btnApply.click();
    await this.appliedMessage.waitForExist();
    await this.appliedMessage.waitForDisplayed();
    await this.inputFirstName.waitForDisplayed();
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputPhoneNumber.setValue(phoneNumber);
    await this.selectDay.click();
    await this.optionDay.waitForDisplayed();
    await this.optionDay.click();
    await this.selectMonth.click();
    await this.optionMonth.waitForDisplayed();
    await this.optionMonth.click();
    await this.selectYear.click();
    await this.optionYear.waitForDisplayed();
    await this.optionYear.click();
    await this.radioBtnGender.waitForDisplayed();
    await this.radioBtnGender.click();
    await this.selectNationality.click();
    await this.optionNationality.waitForDisplayed();
    await this.optionNationality.click();

    await this.inputCardHolderName.waitForDisplayed();
    await this.inputCardHolderName.setValue(cardHolderName);

    await this.cardNumberFrame.waitForExist({ timeout: 300 });
    await browser.pause(2000);
    await browser.switchToFrame(await this.cardNumberFrame);
    await browser.setTimeout({ implicit: 1000 });
    await this.inputCardNumber.setValue(cardNumber);
    browser.switchToParentFrame();

    await this.expiryDateFrame.waitForExist({ timeout: 300 });
    await browser.pause(2000);
    await browser.switchToFrame(await this.expiryDateFrame);
    await browser.setTimeout({ implicit: 1000 });
    await this.inputExpiryDate.setValue(expiryDate);
    browser.switchToParentFrame();

    await this.cvvFrame.waitForExist({ timeout: 300 });
    await browser.pause(2000);
    await browser.switchToFrame(await this.cvvFrame);
    await browser.setTimeout({ implicit: 1000 });
    await this.inputCVV.setValue(cardCVV);
    browser.switchToParentFrame();
  }
}

export default new TourDetails();
