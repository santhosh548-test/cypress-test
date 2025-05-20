describe('Cypress Test Lifecycle & Command Queue (Numbered Logs)', () => {

  before(() => {
    //cy.log('Step 1: BEFORE - Runs once before all tests');
    console.log('Step 1: BEFORE - Runs once before all tests');
  });

  beforeEach(() => {
    //cy.log('Step 2: BEFORE EACH - Runs before every test');
    console.log('Step 2: BEFORE EACH - Runs before every test');
    cy.visit('/');
  });

  afterEach(() => {
    //cy.log('Step 8: AFTER EACH - Runs after each test');
    console.log('Step 8: AFTER EACH - Runs after each test');
  });

  after(() => {
    //cy.log('Step 13: AFTER - Runs once after all tests');
    console.log('Step 13: AFTER - Runs once after all tests');
  });

  it('shows Cypress command queue vs sync execution', () => {
    cy.log('Step 3: Test Start');
    console.log('Step 4: SYNC - This runs immediately');

    cy.get('body').then(($body) => {
      //cy.log('Step 7: CYPRESS QUEUE - Inside cy.get().then');
      console.log('Step 7: CYPRESS QUEUE - Inside cy.get().then');
      expect($body).to.exist;
    });

    console.log('Step 5: SYNC - After Cypress command queued');

    cy.log('Step 6: Test End');
  });

  it('shows lifecycle again in second test', () => {
    console.log('Step 9: Second test is running');
    cy.get('#header').should('exist');
    cy.log('Step 10: Assertion complete');
  });
});
