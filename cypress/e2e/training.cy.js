it('Passing the training', () => { 
    cy.visit('/login'); 
    cy.get('input[name="email"]').type('diversido.qana+IL@gmail.com', {sensitive: true}); 
    cy.get('input[name="password"]').type('password', { sensitive: true }); 
    cy.get('button').contains('Login').click();

    cy.location('pathname').should('eq', '/workspace/dashboard')
    // cy.get('.jss76').eq('1').should('contain', 'Your Quiz Answers').click({force: true}); 

    cy.contains('Module 1: Introduction').click(); 
    cy.wait(2000)
    cy.contains('Sedation Suite').click();
    cy.wait(2000)
    cy.get('a[title="Module 1 Exam"]').click();
    cy.wait(8000);
    cy.location('pathname').should('eq', '/workspace/player/30299/1/3/30');
    cy.wait(3000);
    cy.get ('.jss169').contains('form')
    // cy.get('form').find('p');
    // cy.get('#quiz-form-answer-0-3').check();
    // cy.get('#edge-composition_submitAnswerBtn01_hotspot').click();
    // cy.get('#quiz-form-answer-1-3').check(); 
    // cy.get('#edge-composition_submitAnswerBtn02_hotspot').click();
    // cy.get('#edge-composition_greenContinueBtn_hotspot').click();
    // cy.get('edge-composition_output01').should('exist');

})

