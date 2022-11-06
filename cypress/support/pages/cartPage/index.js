/// <reference types="Cypress" />

const cartPageElements = require("./elements").ELEMENTS;

class cartPage {
  check_preCartPage() {
    cy.get(cartPageElements.preCartPageCheck).should("be.visible");
    cy.get(cartPageElements.preCartPageCheck).contains(
      "Adicionado ao carrinho"
    );
  }

  click_goToCartButton() {
    cy.get(cartPageElements.goToCartButton).click({ force: true });
  }

  check_itemAddedToCart() {
    cy.get(cartPageElements.gridProductCart).should("be.visible");
    cy.get(cartPageElements.goToCheckoutButton).should("be.visible");
    cy.contains(
      "Especialista em pessoas: Soluções bíblicas e inteligentes para lidar com todo tipo de gente"
    )
  }
}

export default new cartPage();
