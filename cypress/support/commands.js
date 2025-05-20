// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// ✅ Reusable login command
Cypress.Commands.add('login', (username, password) => {
    cy.request('POST', '/api/login', { username, password })
      .then((response) => {
        localStorage.setItem('authToken', response.body.token);
      });


  });
  
  // ✅ Custom form validation command
  Cypress.Commands.add('validateFormError', (selector, message) => {
    cy.get(selector)
      .should('have.class', 'error')
      .and('contain.text', message);
  });
  
  // ✅ Overwriting 'visit' to always include auth token
  Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
    const token = localStorage.getItem('authToken');
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
    return originalFn(url, options);
  });

  Cypress.Commands.add('loginToApplication', (username, password) => {
    cy.visit("/")
    cy.get('[href="/login"]').click()
    cy.get('[class="login-form"]').should('be.visible');
    cy.get('[data-qa="login-email"]').type(username);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();

    cy.get('a').contains('Logged in as').should('be.visible')
  });

  Cypress.Commands.overwrite('type', (originalFn, subject, text, options) => {
    subject.val(''); // clear the field before typing
    return originalFn(subject, text, options);
  });

  
  