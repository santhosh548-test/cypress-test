function logWithTimestamp(label) {
    const now = new Date().toISOString();
    cy.log(`${now} ${label}`);
    console.log(`${now} ${label}`);
  }
  
  describe('Cypress Test Lifecycle & Command Queue (Timestamps)', () => {
  
    before(() => {
      const now = new Date().toISOString();
      cy.log(`${now} BEFORE: Runs once before all tests`);
      console.log(`${now} BEFORE: Runs once before all tests`);
    });
  
    beforeEach(() => {
      const now = new Date().toISOString();
      cy.log(`${now} BEFORE EACH: Runs before every test`);
      console.log(`${now} BEFORE EACH: Runs before every test`);
  
      cy.visit('/');
    });
  
    afterEach(() => {
      const now = new Date().toISOString();
      cy.log(`${now} AFTER EACH: Runs after each test`);
      console.log(`${now} AFTER EACH: Runs after each test`);
    });
  
    after(() => {
      const now = new Date().toISOString();
      cy.log(`${now} AFTER: Runs once after all tests`);
      console.log(`${now} AFTER: Runs once after all tests`);
    });
  
    it('demonstrates command queue execution with timestamps', () => {
      const now = new Date().toISOString();
      cy.log(`${now} Test Start`);
      console.log(`${now} Test Start`);
  
      console.log(`${new Date().toISOString()} SYNC: This runs immediately`);
  
      cy.get('body').then(($body) => {
        const insideThen = new Date().toISOString();
        cy.log(`${insideThen} Cypress Queue: Inside cy.get().then`);
        console.log(`${insideThen} Cypress Queue: Inside cy.get().then`);
        expect($body).to.exist;
      });
  
      console.log(`${new Date().toISOString()} SYNC: After Cypress command added`);
  
      cy.log(`${new Date().toISOString()} Test End`);
    });
  
    it('shows lifecycle hooks again', () => {
      logWithTimestamp('Second test running');
      cy.get('[name="q"]').should('exist');
    });
  });
  