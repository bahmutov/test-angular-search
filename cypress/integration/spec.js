/// <reference types="cypress" />

context('Angular.io search', () => {
  it('finds the right answer', function () {
    cy.visit('/')
    cy.get('[aria-label=search]').type('install')
  })
})
