/// <reference types="Cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/home')
  })

  it('Type into the location input', () => {
    // https://on.cypress.io/type
    cy.get('#location').type('test123')
  })

  it('Type into the start date input', () => {
    // https://on.cypress.io/type
    cy.get('#from').type('2019-01-01')
  })

  it('Type into the to date input', () => {
    // https://on.cypress.io/type
    cy.get('#to').type('2019-01-01')
  })

  it('Select a car type', () => {
    // https://on.cypress.io/type
    cy.get('#type').select('Family')
  })

  it('Search goes to next page', () => {
    // https://on.cypress.io/type
    cy.get('.btn').click()
    cy.url().should('contain', 'http://localhost:4200/recommendation')
  })
})
