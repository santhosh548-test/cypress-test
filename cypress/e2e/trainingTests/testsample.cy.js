describe('Automation Practice Site Test', () => {
    it('Should search for a product on automationpractice.com', () => {
      cy.visit('http://automationpractice.com');
      cy.get('#search_query_top').type('Dress');
      cy.get('button[name="submit_search"]').click();
      cy.get('.product-count').should('contain', 'results have been found');
    });
  });