import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import productPage from "../pages/productPage";
import cartPage from "../pages/cartPage";
import homePage from "../pages/homePage";
import searchPage from "../pages/searchPage";
import productData from "../../fixtures/product.json";
import authorData from "../../fixtures/author.json";
import linkProductData from "../../fixtures/linkProduc.json";

Given("the user is on the home page", () => {
  homePage.accessStore();
});

When("user search the product by productId", () => {
  homePage.type_searchInputByProductId(productData.productId);
  homePage.click_searchInputButton();
  searchPage.validate_searchResult();
});

When("user search the product by author name", () => {
  homePage.type_searchInputByAuthorName(authorData.authorName);
  homePage.click_searchInputButton();
  searchPage.validate_searchResult();
});

When("user access the direct url product", () => {
productPage.accessLinkProduct(linkProductData.linkProduct)
});


And("add the product to cart", () => {
  searchPage.click_searchResult();
  productPage.add_productToCart();
  cartPage.click_goToCartButton();
});

Then("the product must be added to cart", () => {
  cartPage.check_itemAddedToCart();
});
