import advisorAccountPage from "../pageobjects/advisor.account.page.ts";
import LoginPage from "../pageobjects/login.page.ts";
import data from "../helpers/data.ts";

describe("Account settings", () => {
  it("Advisor Login", async () => {
    await LoginPage.open();
    await LoginPage.advisorLogin(data.advisorEmail, data.password);
    await expect(LoginPage.initialsIconAdvisor).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     'You logged into a secure area!')
  });

  it("Edit company details", async () => {
    await advisorAccountPage.editCompanyDetails(
      data.companyName,
      data.industry,
      data.streetName,
      data.city,
      data.state,
      data.country
    );
  });

  it("Add new user", async () => {
    let email = `testEmail${Math.floor(Math.random() * 90000) + 10000}@gmail.com`;
    await advisorAccountPage.addNewUser(
      data.newAdvisorFirstName,
      data.newAdvisorLastName,
      email,
      data.newAdvisorPhoneNumber
    );
  });
});
