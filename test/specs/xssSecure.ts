import LoginPage from "../pageobjects/login.page.ts";
import data from "../helpers/data.ts";
import HomePage from "../pageobjects/home.page.ts";

describe("Security testing", () => {
  it("Login but failed", async () => {
    await LoginPage.open();
    await LoginPage.travellerLogin(data.xssScript, data.password);
    await expect(LoginPage.loginErrorMsg).toBeExisting();
  });

  it("Traveller login", async () => {
    await browser.back();
    await LoginPage.travellerLogin(data.travellerEmail, data.password);
    await expect(LoginPage.initialsIconTraveller).toBeExisting();
  });

  it("Search tour", async () => {
    await HomePage.searchXSS(data.xssScript);
    await expect(HomePage.forbiddenText).toBeExisting();
  });
});
