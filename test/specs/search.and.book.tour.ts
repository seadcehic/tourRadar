import data from "../helpers/data.ts";
import HomePage from "../pageobjects/home.page.ts";
import LoginPage from "../pageobjects/login.page.ts";
import tourDetails from "../pageobjects/tour.details.ts";
import travellerAccountPage from "../pageobjects/traveller.account.page.ts";

describe("Search and Book tour", () => {
  it("Traveller Login", async () => {
    await LoginPage.open();
    await LoginPage.travellerLogin(data.travellerEmail, data.password);
    await expect(LoginPage.initialsIconTraveller).toBeExisting();
  });

  it("Search tour", async () => {
    await HomePage.searchTour(data.city);
    await expect(HomePage.searchResultList).toBeExisting();
  });

  it("View and Book tour", async () => {
    await tourDetails.viewTour(
      data.firstName,
      data.lastName,
      data.phoneNumber,
      data.firstName + ' ' + data.lastName,
      data.cardNumber,
      data.expiryDate,
      data.cvv
    );
  });

  it("Check Recently Viewed", async () => {
    await travellerAccountPage.checkRecentlyViewedTour();
  });
});
