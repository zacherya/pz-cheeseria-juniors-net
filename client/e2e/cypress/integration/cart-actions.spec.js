/// <reference types="Cypress" />

context('Cart Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it.only('Add items to cart', () => {
    cy.get('[data-cy=add-to-cart-2]').click();
    cy.get('[data-cy=add-to-cart-3]').click();

    cy.get('[data-cy=view-cart-btn]').click();
    cy.contains('2 Selected item')

  })

})