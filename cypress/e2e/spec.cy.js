const locator = require("../page-object/locator");

let base_url = Cypress.env('url_ui')

describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(1440, 800)
    cy.visit(`${base_url}`)
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get(locator.searchBar)
    cy.get(locator.searchBar).eq(1).type('Apply for a number plate{enter}', {force: true, delay: 0})

    cy.contains('for').should('be.visible')
    cy.contains('Apply').should('be.visible')

    cy.contains('Find locations').click()

    cy.get(locator.searchSuburb).focus().clear().type('Sydney 2000{enter}', {force: true, delay: 0})
    cy.contains('Rozelle Bay Maritime Service Centre').should('be.visible')

  })

  it('passes', () => {
    cy.viewport(1440, 800)
    cy.visit(`${base_url}`)
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.contains('Find locations').click()

    cy.get(locator.searchSuburb).focus().clear().type('Sydney Domestic Airport 2020{enter}', {force: true, delay: 0})
    cy.contains('Rockdale Service Centre').should('be.visible')
  })
})