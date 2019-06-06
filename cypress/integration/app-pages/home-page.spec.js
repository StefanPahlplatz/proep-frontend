/// <reference types="Cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Type into the location input', () => {
    // https://on.cypress.io/type
    cy.get('#locationInput').type('test123')
  })

  it('Type into the start date input', () => {
    // https://on.cypress.io/type
    cy.get('#fromDateInput').type('01-01-2019')
  })

  it('Type into the to date input', () => {
    // https://on.cypress.io/type
    cy.get('#tillDateInput').type('01-01-2019')
  })

  it('Select a car type', () => {
    // https://on.cypress.io/type
    cy.get('#typeCarSelection').select('Family')
  })

  it('Search goes to next page', () => {
    // https://on.cypress.io/type
    cy.get('.btn').click()
    cy.url().should('eq', 'http://localhost:4200/recommendation')
  })
})
