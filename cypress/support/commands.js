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

// Cypress.Commands.overwrite('type', (originalFn, element, text, options) => { 
//     if (options & options.sensitive) { 
//         options.log = false

//         Cypress.log({
//             $el: element, 
//             name: 'type', 
//             message: '*'.repeat(text.length)
//         })
//     }
//     return originalFn(element, text, options)
// })

Cypress.Commands.add('openAWP', () => { 
    cy.visit('https://sst2-wap-staging.herokuapp.com/')
    // cy.get('.jss99').should('not.be.visible');
    cy.get('#username').type('test1@test.localhost', { sensitive: true })
    cy.get('#password').type('password')
    cy.get('button').should('contain', 'Sign in').click();
})

Cypress.Commands.add('loginSST', (email, password) => { 
    cy.get('.jss44').find('input[name="email"]').type(email);
    // cy.wait(2000)
    cy.get('.jss44').find('input[name="password"]').type(password);
    // cy.wait(2000)
    cy.get('.jss44').find('button').click(); 
})