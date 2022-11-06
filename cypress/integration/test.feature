
Feature: E2E Tests


    Background:
    Given the user is on the home page

	Scenario: Add item to cart from search by productId
		When user search the product by productId
        And add the product to cart
        Then the product must be added to cart

   	Scenario: Add item to cart from search by author name
		When user search the product by author name
        And add the product to cart
        Then the product must be added to cart
     
   	Scenario: Add item to cart from product page
		When user access the direct url product
        And add the product to cart
        Then the product must be added to cart