import Page from "./page.ts";
import { Key } from 'webdriverio'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdvisorAccountPage extends Page {
  /**
   * define selectors using getter methods
   */

  public get initialsIconTraveller() {
    return $("li.ao-header-navigation__profile");
  }

  public get btnCompanyDetails() {
    return $("//a[text()='Company Details']");
  }

  public get inputCompanyName() {
    return $("//input[@name='name']");
  }

  public get titleOfRecentlyViewedTour() {
    return $("//h3[contains(text(), 'Discover Sarajevo')]");
  }

  public get selectIndustry() {
    return $("//select[@name='industry']");
  }

  public optionIndustry(value: string) {
    return $(`//option[text()='${value}']`);
  }

  public get inputStreetName() {
    return $("//input[@name='address']");
  }

  public get inputCity() {
    return $("//input[@name='city']");
  }

  public get inputState() {
    return $("//input[@name='state']");
  }

  public get inputZipCode() {
    return $("//input[@name='zip_code']");
  }

  public get selectCountry() {
    return $("//select[@name='country']");
  }

  public optionCountry(value: string) {
    return $(`//option[text()='${value}']`);
  }

  public get btnSubmit() {
    return $("//button[@type='submit']");
  }

  public get successMessage() {
    return $("//div[text()='Customizations has been saved']");
  }

  public get btnUsers() {
    return $("//a[@href='/users']");
  }

  public get btnCreateUser() {
    return $("//a[@href='/users/create']");
  }

  public get inputFirstName() {
    return $("//input[@name='first_name']");
  }

  public get inputLastName() {
    return $("//input[@name='last_name']");
  }

  public get inputEmail() {
    return $("//input[@name='email']");
  }

  public get inputPhoneNumber() {
    return $("//input[@type='tel']");
  }

  public get selectRole() {
    return $("//select[@name='role']");
  }

  public get optionRole() {
    return $("//option[text()='Admin']");
  }

  public get btnAddUserSubmit() {
    return $("//span[text()='Add User']");
  }

  public get successMessageAddedUser() {
    return $("//div[@class='notification__message']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async editCompanyDetails(
    firstName: string,
    industry: string,
    streetName: string,
    city: string,
    state: string,
    country: string
  ) {
    await this.initialsIconTraveller.waitForDisplayed();
    await this.initialsIconTraveller.moveTo();
    await this.btnCompanyDetails.waitForDisplayed();
    await this.btnCompanyDetails.click();
    await browser.switchWindow("partners/me/details");
    await this.inputCompanyName.waitForDisplayed();
    await this.inputCompanyName.click();
    await browser.keys([Key.Ctrl, 'a', Key.Delete]);
    await browser.pause(1000);
    await this.inputCompanyName.setValue(firstName);
    await this.selectIndustry.click();
    await this.optionIndustry(industry).waitForDisplayed();
    await this.optionIndustry(industry).click();
    await this.inputStreetName.click();
    await browser.keys([Key.Ctrl, 'a', Key.Delete]);
    await this.inputStreetName.setValue(streetName);
    await this.inputCity.click();
    await browser.keys([Key.Ctrl, 'a', Key.Delete]);
    await this.inputCity.setValue(city);
    await this.inputState.click();
    await browser.keys([Key.Ctrl, 'a', Key.Delete]);
    await this.inputState.setValue(state);
    await this.selectCountry.click();
    await this.optionCountry(country).waitForDisplayed();
    await this.optionCountry(country).click();
    await this.btnSubmit.scrollIntoView();
    await this.btnSubmit.waitForDisplayed();
    await this.btnSubmit.click();
    await this.successMessage.waitForDisplayed();
    await this.successMessage.waitForDisplayed({reverse: true});
  }

  public async addNewUser(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    await this.btnUsers.waitForDisplayed();
    await this.btnUsers.click();
    await this.btnCreateUser.waitForDisplayed();
    await this.btnCreateUser.click();
    await this.inputFirstName.waitForDisplayed();
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputEmail.setValue(firstName);
    await this.inputEmail.setValue(email);
    await this.inputPhoneNumber.setValue(phoneNumber);
    await this.selectRole.click();
    await this.optionRole.waitForDisplayed();
    await this.optionRole.click();
    await this.btnAddUserSubmit.click();
    await this.successMessageAddedUser.waitForDisplayed();
    await this.successMessageAddedUser.waitForDisplayed({reverse: true});
    await browser.pause(3000);
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("/d/europe");
  }
}

export default new AdvisorAccountPage();
