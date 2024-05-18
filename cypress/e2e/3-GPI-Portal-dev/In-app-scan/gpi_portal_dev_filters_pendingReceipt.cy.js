/// <reference types="cypress" />

describe('GPI Portal Dev Pending Receipt - Test Filters', () => {
    beforeEach(() => {
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
    })
    it('Test Filters by Email Address',() => {
      cy.get('.d-inline-block').click({force : true})
      cy.wait(1000)
      cy.get("input[placeholder='Insert email address']").type('apptest5899@gmail.com', {delay: 100}) //search by email address
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get("[data-label='Email Address']").should('contain', 'apptest5899@gmail.com') //validate data is exist
    })
    it('Test Filters by Merchant', () => {
      cy.get('.d-inline-block').click({force : true})
      cy.get(1000)
      cy.get('#__BVID__62').type('Apollo', {delay: 100}) //search by merchant
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get('[data-label="Merchant"]').should('contain', 'Apollo Gadget Store') //validate data is exist
    })
    it('Test Filters by location', () => {
      cy.get('.d-inline-block').click({force : true})
      cy.wait(1000)
      cy.get('#__BVID__68').type('Grand Indonesia', {delay: 100}) //search by location
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get("[data-label='Location']").should('contain', 'Grand Indonesia')
    })
    it('Test Filters by 3 Query (Email & Merchant & Location)', () => {
      cy.get('.d-inline-block').click({force : true})
      cy.wait(1000)
      cy.get('#__BVID__66').type('apptest5899@gmail.com', {delay: 100}) //search by email address
      cy.get('#__BVID__62').type('Kkuldak', {delay: 100}) //search by merchant
      cy.get('#__BVID__68').type('Mall Kelapa Gading', {delay: 100}) //search by location
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get("[data-label='Merchant']").should('contain', 'KKULDAK') //validate data is exist
      cy.wait(1000)
      cy.get("[data-label='Email Address']").should('contain', 'apptest5899@gmail.com') //validate data is exist
      cy.wait(1000)
      cy.get("[data-label='Location']").should('contain', 'Mall Kelapa Gading') //validate data is exist
    })
    it('Test Filters by Upload Type', () => {
      cy.get('.d-inline-block').click({force : true})
      cy.wait(1000)
      cy.get('#__BVID__70').select('Photo')
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get("[data-label='Type']").should('contain', 'photo')
      cy.wait(1000)
      cy.get('#__BVID__70').select('Screenshot')
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get("[data-label='Type']").should('contain', 'screenshot')
      cy.wait(1000)
      cy.get('#__BVID__70').select('Url')
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get("[data-label='Type']").should('contain', 'url')
      cy.wait(1000)
      cy.get('#__BVID__70').select('PDF')
      cy.wait(1000)
      cy.get('.padding-x-28').click()
      cy.wait(1000)
      cy.get("[data-label='Type']").should('contain', 'document')
      cy.wait(1000)
    })
})