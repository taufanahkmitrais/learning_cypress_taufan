describe('Purple main functional Test', () => {
  context('when successfully logged in', () =>{
    beforeEach(() => {
      cy.session('loggedInState', () => {
        // Visit purple login page
        cy.visit(Cypress.env('purple_site') + "/login");
    
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
  
        // get dashboard button to make sure the page is loaded correctly
        cy.get('li.font-bold > button:nth-child(1)').should('exist');
      })
  
      cy.visit(Cypress.env('purple_site'));
    });
  
    context('when visiting the Dashboard page', () =>{
      beforeEach(() =>{
        // visit the dashboard page
        cy.get('li.font-bold > button:nth-child(1)').click();
      });

      it('has a navigateable dashboard page', () => {
        cy.get('li.font-bold > button:nth-child(1)').should('exist');
      });
    
      it('has a full name content', () => {
        cy.contains('Hi ' + Cypress.env('microsoft_fullname') + ',').should('exist');
      });
        
      it('has a Pie chart', () => {
        cy.get('div.flex-grow:nth-child(1) > div:nth-child(3) > div:nth-child(1) > canvas:nth-child(1)').should('exist');
      });
    
      it('has a Bar chart', () => {
        cy.get('.ml-4 > canvas').should('exist');
      });
    });

    context('when visiting the HR Administrator - Role Privileges page', () =>{
      beforeEach(() =>{
        // Click HR Administrator
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Role Privileges
        cy.get(':nth-child(2) > .mds-menu-dropdown > :nth-child(1)').click();
      });
    
      it('has Role Privilege title', () => {
        cy.contains('Role Privilege').should('exist');
      });
        
      it('has User Role column', () => {
        cy.contains('User Role').should('exist');
      });
    
      it('has Description column', () => {
        cy.contains('Description').should('exist');
      });

      it('has Access column', () => {
        cy.contains('Access').should('exist');
      });

      it('has Status column', () => {
        cy.contains('Status').should('exist');
      });

      it('has Action column', () => {
        cy.contains('Action').should('exist');
      });
    });

    context('when visiting the HR Administrator - Managed User Roles page', () =>{
      beforeEach(() =>{
        // Click HR Administrator
        cy.get(':nth-child(2) > button.mds-menu-dropdown-toggle').click();

        // Click Managed User Roles
        cy.get('li.mds-menu-dropdown-toggle:nth-child(2) > button:nth-child(1)').click();
      });
    
      it('has Users title', () => {
        cy.contains('Users').should('exist');
      });
        
      it('has No column', () => {
        cy.contains('No').should('exist');
      });
    
      it('has Employee Name column', () => {
        cy.contains('Employee Name').should('exist');
      });

      it('has Email column', () => {
        cy.contains('Email').should('exist');
      });

      it('has Status column', () => {
        cy.contains('Status').should('exist');
      });

      it('has User Role(s) column', () => {
        cy.contains('User Role(s)').should('exist');
      });

      it('has Action column', () => {
        cy.contains('Action').should('exist');
      });
    });
  });
})