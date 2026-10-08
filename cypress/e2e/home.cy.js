describe('NaN home page', () => {
  it('should open the home page and display the main content', () => {
    cy.visit('/')

    cy.url().should('include', 'localhost:5173')
    cy.contains('Get started').should('be.visible')
    cy.contains('Documentation').should('be.visible')
  })
})