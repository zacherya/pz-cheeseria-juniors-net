/// <reference types="Cypress" />
describe('Unit testing for Feature 2', () => {
  
    beforeEach(() => {
      cy.visit('/');
    })
    it.only('Simple purchase with TWO items', () => {
      cy.get('[data-cy=add-to-cart-2]').click();
      cy.get('[data-cy=add-to-cart-3]').click();

      //Wait for notifications
      cy.wait(6000);

      //Show cart and confirm items
      cy.get('[data-cy=view-cart-btn]').click();
      //Additional pass condition, if cart is visible
      cy.contains('2 Selected item');

      //Complete purchase action
      cy.get('[data-cy=purchase-cart-btn]').click();
      cy.get('[data-cy=confirm-action]').click();
  
      //Primary test pass condition, if order was successful. Timespan will be 0 seconds ago
      cy.contains('0 seconds ago');
  
      //Additional order confirmation test
      cy.contains('2 items');
      cy.contains('$396.76');

    })

    it.only('Simple purchase with TWO items from info cards', () => {
      cy.get('[data-cy=cheese-2]').click();
      cy.get('[data-cy=quick-add-to-cart-2]').click();
      cy.get('[data-cy=close-dialog]').click();
      
      cy.get('[data-cy=cheese-3]').click();
      cy.get('[data-cy=quick-add-to-cart-3]').click();
      cy.get('[data-cy=close-dialog]').click();

      //Wait for notifications
      cy.wait(6000);

      //Show cart and confirm items
      cy.get('[data-cy=view-cart-btn]').click();
      //Additional pass condition, if cart is visible
      cy.contains('2 Selected item');

      //Complete purchase action
      cy.get('[data-cy=purchase-cart-btn]').click();
      cy.get('[data-cy=confirm-action]').click();
  
      //Primary test pass condition, if order was successful. Timespan will be 0 seconds ago
      cy.contains('0 seconds ago');
  
      //Additional order confirmation test
      cy.contains('2 items');
      cy.contains('$396.76');

    })

    it.only('Simple purchase with TWO items with changes from within cart', () => {
      cy.get('[data-cy=add-to-cart-2]').click();
      cy.get('[data-cy=add-to-cart-3]').click();
      cy.get('[data-cy=add-to-cart-3]').click();

      //Wait for notifications
      cy.wait(6000);

      //Show cart and confirm items
      cy.get('[data-cy=view-cart-btn]').click();
      cy.get('[data-cy=increment-item-2]').click();
      cy.get('[data-cy=increment-item-2]').click();
      cy.get('[data-cy=decrement-item-3]').click();
      //Additional pass condition, if cart is visible
      cy.contains('4 Selected item');
      cy.contains('3 x');
      cy.contains('1 x');

      //Complete purchase action
      cy.get('[data-cy=purchase-cart-btn]').click();
      cy.get('[data-cy=confirm-action]').click();
  
      //Primary test pass condition, if order was successful. Timespan will be 0 seconds ago
      cy.contains('0 seconds ago');
  
      //Additional order confirmation test
      cy.contains('4 items');
      cy.contains('$455.18');
    })

    it.only('Reorder last test order from recent purchases', () => {
      cy.get('[data-cy=recent-purchases]').click();

      cy.get('mat-expansion-panel:first-of-type').click();
      cy.get('mat-expansion-panel:first-of-type .btn:first-of-type').click();

      cy.get('[data-cy=confirm-action]').click();

      // //Wait for notifications
      cy.wait(6000);

      //Show cart and confirm items
      cy.get('[data-cy=view-cart-btn]').click();
      //Additional pass condition, if cart is visible
      cy.contains('4 Selected item');
      cy.contains('3 x');
      cy.contains('1 x');

      //Complete purchase action
      cy.get('[data-cy=purchase-cart-btn]').click();
      cy.get('[data-cy=confirm-action]').click();
  
      //Primary test pass condition, if order was successful. Timespan will be 0 seconds ago
      cy.contains('0 seconds ago');
  
      //Additional order confirmation test
      cy.contains('4 items');
      cy.contains('$455.18');

    })
  
})
