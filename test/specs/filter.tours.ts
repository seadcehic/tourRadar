import data from "../helpers/data.ts";
import HomePage from "../pageobjects/home.page.ts";
import LoginPage from "../pageobjects/login.page.ts";

describe("Filter tours", () => {
  it("Traveller Login", async () => {
    await LoginPage.open();
    await LoginPage.travellerLogin(data.travellerEmail, data.password);
    await expect(LoginPage.initialsIconTraveller).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!')
  });

  it("Filter tours", async () => {
    await HomePage.filterTours();
  });

  it("Download brochure", async () => {
    await HomePage.downLoadBrochure(data.travellerEmail);
  });
});
