import { ChainablePromiseElement } from "webdriverio";

import Page from "./page.ts";
import { Key } from 'webdriverio'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  public get divSearch() {
    return $("div.search");
  }

  public get inputSearch() {
    return $("(//input[contains(@class, 'header-top-search__input')])[2]");
  }

  public get searchResult() {
    return $("((//ul[@class='autocomplete-items'])[1]//li)[1]");
  }

  public get searchResultList() {
    return $("div[data-cy='serp-tours--list']");
  }

  public get checkBoxDepartureDate() {
    return $("(//a[contains(@href, '/m/europe-may')])[1]");
  }

  public get liDepartureDate() {
    return $(
      "//li[contains(@data-pid, 'may' ) and contains(@class, 'active')]"
    );
  }

  public get divDateFilterApplied() {
    return $("//div[contains(text(), 'Departs in May')]");
  }

  public get btnClearAppliedFilter() {
    return $("span.serp-parameters__filters-filter-clear");
  }

  public get appliedOneFilterMessage() {
    return $("//h6[text()='1 filter applied']");
  }

  public get appliedTwoFilterMessage() {
    return $("//h6[text()='2 filters applied']");
  }

  public get checkBoxAdventureType() {
    return $("(//label[contains(@for, 'checkbox-group-type')])[1]");
  }

  public get liAdventureType() {
    return $(
      "//li[contains(@data-pid, '372' ) and contains(@class, 'active')]"
    );
  }

  public get divAdventureTypeFilterApplied() {
    return $("//div[contains(text(), 'Adventure Type is Group')]");
  }

  public get btnClearAllFilters() {
    return $("a.serp-parameters__clear-all");
  }

  public get btnDownloadBrochure() {
    return $("//button[@data-cy='serp-tour--download-brochure']");
  }

  public get titleDownloadBrochure() {
    return $("(//h3[@class='scout-component__modal-heading'])[1]");
  }

  public get successDownloadBrochure() {
    return $("(//h3[@class='scout-component__modal-heading'])[2]");
  }

  public emailAddress(email: string) {
    return $(`//input[@value='${email}']`);
  }

  public get forbiddenText() {
    return $("//h1[text()='403 Forbidden']");
  }

  public get btnDownload() {
    return $("//a[text()='Download Brochure']");
  }

  public async searchTour(value: string) {
    // search tour
    await this.divSearch.click();
    await browser.pause(1000);
    await this.inputSearch.waitForDisplayed();
    await this.inputSearch.setValue(value);
    await this.searchResult.waitForDisplayed();
    await this.searchResult.click();
  }

  public async searchXSS(value: string) {
    // search tour
    await this.divSearch.click();
    await browser.pause(1000);
    await this.inputSearch.waitForDisplayed();
    await this.inputSearch.setValue(value);
    await browser.keys(Key.Enter);
  }


  public async filterTours() {
    // click date filter
    await this.checkBoxDepartureDate.scrollIntoView();
    await this.checkBoxDepartureDate.waitForDisplayed();
    await this.checkBoxDepartureDate.click();
    await this.liDepartureDate.waitForDisplayed();
    await this.appliedOneFilterMessage.waitForDisplayed();
    await this.divDateFilterApplied.waitForDisplayed();

    // clear date filter
    await this.btnClearAppliedFilter.waitForDisplayed();
    await this.btnClearAppliedFilter.click();
    await this.divDateFilterApplied.waitForDisplayed({ reverse: true });

    // click date filter
    await this.checkBoxDepartureDate.click();
    await this.liDepartureDate.waitForDisplayed();
    await this.appliedOneFilterMessage.waitForDisplayed();
    await this.divDateFilterApplied.waitForDisplayed();

    // click adventure type filter
    await this.checkBoxAdventureType.click();
    await this.liAdventureType.waitForDisplayed();
    await this.appliedTwoFilterMessage.waitForDisplayed();
    await this.divAdventureTypeFilterApplied.waitForDisplayed();

    // clear all filters
    await this.btnClearAllFilters.waitForDisplayed();
    await this.btnClearAllFilters.click();
    await this.divDateFilterApplied.waitForDisplayed({ reverse: true });
    await this.divAdventureTypeFilterApplied.waitForDisplayed({
      reverse: true,
    });
  }

  public async downLoadBrochure(email: string) {
    // search tour
    await this.btnDownloadBrochure.waitForDisplayed();
    await this.btnDownloadBrochure.click();
    await this.titleDownloadBrochure.waitForDisplayed();
    await this.emailAddress(email).waitForDisplayed();
    await this.btnDownload.waitForDisplayed();
    await this.btnDownload.click();
    await this.successDownloadBrochure.waitForDisplayed();
  }
}

export default new HomePage();
