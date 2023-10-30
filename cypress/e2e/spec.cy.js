describe('sick trick list', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "tricks"
    }).as("tricks");
  })
  it('has data on load', () => {
    cy.visit('http://localhost:3000').wait("@tricks")
    cy.get('.tricks-wrapper')
  })
})