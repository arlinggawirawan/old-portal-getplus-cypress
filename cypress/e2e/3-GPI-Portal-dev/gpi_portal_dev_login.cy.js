/// <reference types="cypress" />

describe('GPI Portal Login - Dev', () => {
    it('Test positive Login', () => {
      cy.visit('https://portal-dev.gpi.id/login');
      cy.get('#__BVID__12').type('arlingga.wirawan@gpi.id');
      cy.wait(1000);
      cy.get('#input-2').type('Gpi76!!');
      cy.wait(1000);
      cy.get("[type='submit']").click();
      cy.wait(3000);
      cy.request('https://portal-dev.gpi.id/launch').as('response');
      cy.get('@response')
        .its('status')
        .should('equal', 200);
      cy.get("[alt='In App Scan']").should('exist');
      cy.get("[alt='In App Scan']").click()
      cy.wait(3000)
      cy.contains('Logout').click()
    });
});
 