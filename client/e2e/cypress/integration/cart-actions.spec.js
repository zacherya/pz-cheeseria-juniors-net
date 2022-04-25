/// <reference types="Cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it.only('Add items to cart', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    //Wait for the notifications to disappear
    cy.wait(6000);

    cy.get('[data-cy=view-cart-btn]').click();
    cy.contains('2 Selected item');

    cy.get('[data-cy=purchase-cart-btn]').click();
    cy.get('[data-cy=confirm-action]').click();
    //Primary test pass condition, if order was successful. Timespan will be 0 seconds ago
    cy.contains('0 seconds ago');

    //Additional order confirmation test
    cy.contains('2 items');
    cy.contains('$396.76');

  })

})