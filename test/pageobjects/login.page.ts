import { ChainablePromiseElement } from "webdriverio";

import Page from "./page.ts";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */

  public get profileIcon() {
    return $("li.ao-header-navigation__profile");
  }

  public get btnLogin() {
    return $(
      "(//a[contains(@class, 'js-ao-header-navigation__dropdown-button-login')])[1]"
    );
  }

  public get initialsIconAdvisor() {
    return $("a.ao-header-navigation__profile-initials--partner-agent");
  }

  public get advisorLoginType() {
    return $("(//label[@for='travelAdvisor'])[1]");
  }
  public get initialsIconTraveller() {
    return $("a.ao-header-navigation__profile-initials");
  }

  public get inputUsername() {
    return $("#g_email");
  }

  public get inputPassword() {
    return $("#g_password");
  }

  public get btnSubmit() {
    return $("#g_send");
  }

  public get advisorInputUserName() {
    return $("input[name='email']");
  }

  public get advisorInputPassword() {
    return $("input[name='password']");
  }

  public get advisorbtnSubmit() {
    return $("button[type='submit']");
  }

  public get loginErrorMsg() {
    return $("//div[text()='Wrong login data.']");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async travellerLogin(username: string, password: string) {
    await this.profileIcon.moveTo();
    await this.btnLogin.click();
    await this.inputUsername.waitForDisplayed();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public async advisorLogin(username: string, password: string) {
    await this.profileIcon.moveTo();
    await this.advisorLoginType.click();
    await this.btnLogin.waitForDisplayed();
    await this.btnLogin.click();
    await this.advisorInputUserName.waitForDisplayed();
    await this.advisorInputUserName.setValue(username);
    await this.advisorInputPassword.setValue(password);
    await this.advisorbtnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open("/d/europe");
  }
}

export default new LoginPage();
