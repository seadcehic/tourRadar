import { ChainablePromiseElement } from "webdriverio";
import data from "../helpers/data.ts";

import Page from "./page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TravellerAccountPage extends Page {
  /**
   * define selectors using getter methods
   */

  public get initialsIconTraveller() {
    return $("li.ao-header-navigation__profile");
  }

  public get btnMyAccount() {
    return $("(//a[text()='My Account'])[1]");
  }

  public get userAccountContainer() {
    return $("div.ao-profile-top__profile-details-container");
  }

  public get titleOfRecentlyViewedTour() {
    return $(`//h3[contains(text(), '${data.tourName}')]`);
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async checkRecentlyViewedTour() {
    await browser.switchWindow("#check");
    await browser.pause(1000);
    await this.initialsIconTraveller.scrollIntoView();
    await this.initialsIconTraveller.waitForDisplayed();
    await this.initialsIconTraveller.moveTo();
    await this.btnMyAccount.waitForDisplayed();
    await this.btnMyAccount.click();
    await this.userAccountContainer.waitForDisplayed();
    await this.titleOfRecentlyViewedTour.waitForDisplayed();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("/d/europe");
  }
}

export default new TravellerAccountPage();
