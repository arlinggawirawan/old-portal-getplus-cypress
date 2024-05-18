/// <reference types="cypress" />

describe('GPI Portal Logout - Dev', () => {
    it('Test Logout', () => {
      cy.visit('https://portal-dev.gpi.id/launch')
      cy.wait(1000)
      cy.get('#__BVID__12').type('arlingga.wirawan@gpi.id')
      cy.wait(1000)
      cy.get('#input-2').type('Gpi76!!', {delay: 100})
      cy.wait(1000)
      cy.get("[type='submit']").click()
      cy.wait(3000)
      cy.get("[alt='In App Scan']").click()
      cy.wait(3000)
      cy.contains('Logout').click()
      cy.get('#__BVID__12').should('exist')
    
    })
  })