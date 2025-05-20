const { verifyElementVisible, clickElement } = require("../../utils/genericUtils");

describe('Custom Login Command Test', () => {
  let testData;
  before(() => {
    // Load user data once before all tests
    cy.fixture('user').then((data) => {
      testData = data;
    });
  });
  beforeEach(()=>{
    cy.loginToApplication(testData.user.username, testData.user.password);
  })
  it('form validations-get the total products', () => {   
      clickElement('[href="/products"]')
      verifyElementVisible('[id="search_product"]');
    });
  });
  