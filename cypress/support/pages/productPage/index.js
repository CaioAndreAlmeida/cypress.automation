/// <reference types="Cypress" />

const productPageElements = require("./elements").ELEMENTS;

class productPage {
  check_productPage() {
    cy.get(productPageElements.availabilityCheck).should("be.visible");
    cy.get(productPageElements.availabilityCheck).contains("Em estoque.");
  }

  add_productToCart() {
    cy.get(productPageElements.addItemToCartButton).click({ force: true });
  }

  accessLinkProduct (linkProduct) {
    cy.visit(linkProduct)
  }
}

export default new productPage();
