describe('Purple main functional Test', () => {
  beforeEach(() => {
    cy.session('loggedInState', () => {
      // Visit purple login page
      cy.visit(Cypress.env('purple_site'));
  
      // get the login button
      cy.get('[data-testid="login-button"]').click();
  
      // login via microsoft account
      cy.origin('https://login.live.com', () => {
        // input the email
        cy.get('#i0116').type(Cypress.env('microsoft_email'));
  
        // click next button
        cy.get('#idSIButton9').click();
  
        // input password
        cy.get('#i0118').type(Cypress.env('microsoft_password'));
  
        // click the login button
        cy.get('#idSIButton9').click();
  
        // click the stay signed in yes button
        cy.get('#acceptButton').click()
      });

      // get dashboard button
      cy.get('li.font-bold > button:nth-child(1)').should('exist');
    })

    cy.visit('https://172.19.14.39');

  });

  it('navigates to the dashboard page', () => {
    // get dashboard button
    cy.get('li.font-bold > button:nth-child(1)').should('exist');
  });

  it('has a full name content', () => {
    // get dashboard button
    cy.contains('Hi ' + Cypress.env('microsoft_fullname') + ',').should('exist');
  });
    
  it('has a Pie chart', () => {
    // get dashboard button
    cy.get('div.flex-grow:nth-child(1) > div:nth-child(3) > div:nth-child(1) > canvas:nth-child(1)').should('exist');
  });


  it('has a Bar chart', () => {
    cy.get('.ml-4 > canvas').should('exist');

  });

})