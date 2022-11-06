/// <reference types="Cypress" />

const searchPageElements = require("./elements").ELEMENTS;

class searchPage {
  validate_searchResult() {
    cy.get(searchPageElements.searchResult).should("be.visible");
  }

  click_searchResult() {
    cy.contains(
      "Especialista em pessoas: Soluções bíblicas e inteligentes para lidar com todo tipo de gente"
    ).click({ force: true });
  }
}

export default new searchPage();
