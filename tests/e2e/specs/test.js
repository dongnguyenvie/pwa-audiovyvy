// https://docs.cypress.io/api/introduction/api.html

describe('render title from global settings', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('span.title', 'Audio Vy Vy | Website nghe truyện đêm khuya miễn phí')
  })
})

