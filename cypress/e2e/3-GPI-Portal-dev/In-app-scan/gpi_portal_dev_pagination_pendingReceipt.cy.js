/// <reference types="cypress" />

context('GPI Portal Dev Pending Receipt - Test pagination', () => {
    beforeEach(() => {
      cy.visit('https://portal-dev.gpi.id/launch')
      cy.get('#__BVID__12').type('arlingga.wirawan@gpi.id')
      cy.wait(1000)
      cy.get('#input-2').type('Gpi76!!', {delay: 100})
      cy.wait(1000)
      cy.get("[type='submit']").click()
      cy.wait(3000)
      cy.get("[alt='In App Scan']").click()
      cy.wait(3000)
    })
    it('Test Pagination select page number', () => {
      cy.get("[class='page-link']").contains('2').click() //page 2
      cy.wait(3000)
      cy.get("[class='page-link']").contains('3').click() //page 3
      cy.wait(3000)
    })
    it('Test Pagination jump to next and previous page', () => {
      cy.get("[class='page-link']").contains('Next').click() //click next
      cy.wait(3000)
      cy.get("[class='page-link']").contains('Prev').click() // click prev
      cy.wait(3000)
    })
    it('Test Pagination jump to last and first page', () => {
      cy.get("[class='page-link']").contains('Last').click({force:true}) //click last
      cy.wait(3000)
      cy.get("[class='page-link']").contains('First').click({force:true}) //click first
      cy.wait(3000)
    })
    it('Test Pagination jump to page number', () => {
      cy.get("[class='menu hidden']").contains('2').click({force:true}) //click dropdown
      cy.wait(3000)
      cy.get("[class='item']").contains('12').click({force:true}) //click dropdown number
      cy.wait(3000)
    })
    it('Test Pagination select list item', () => {
      cy.get('#__BVID__35').select('10').should('have.value', '10')
      cy.wait(3000)
      cy.get('#__BVID__35').select('25').should('have.value', '25')
      cy.wait(3000)
      cy.get('#__BVID__35').select('50').should('have.value', '50')
      cy.wait(3000)
    })
})
