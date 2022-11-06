/// <reference types="Cypress" />

const homePageElements = require("./elements").ELEMENTS;

class homePage {
  accessStore() {
    cy.visit("/");
  }

  type_searchInputByProductId(productId) {
    cy.get(homePageElements.searchInput).type(productId);
  }

  type_searchInputByAuthorName(authorName) {
    cy.get(homePageElements.searchInput).type(authorName);
  }

  click_searchInputButton() {
    cy.get(homePageElements.searchInputButton).click({ force: true });
  }
}

export default new homePage();
