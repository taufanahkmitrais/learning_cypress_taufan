Cypress.Commands.add('purple_login', (email, password) => {
   // Visit purple login page
   cy.visit(Cypress.env('purple_site') + "/login");
    
   // get the login button
   cy.get('[data-testid="login-button"]').click();

   // login via microsoft account
   cy.origin('https://login.live.com', { args: { email, password } }, ({ email, password }) => {
     // input the email
     cy.get('#i0116').type(email);

     // click next button
     cy.get('#idSIButton9').click();

     // input password
     cy.get('#i0118').type(password);

     // click the login button
     cy.get('#idSIButton9').click();

     // click the stay signed in yes button
     cy.get('#acceptButton').click()
   });

   // get dashboard button to make sure the page is loaded correctly
   cy.get('li.font-bold > button:nth-child(1)').should('exist');
});

Cypress.Commands.add('generate_random_string', (length, isNumber=false) => {
  const characters = isNumber ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz': '1234567890';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  // Return a promise that resolves to the result string
  result
});
