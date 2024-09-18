describe('Use Case Search', () => {
  it('Search Flights', () => {
     cy.visit('https://www.skyscanner.com.br', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
        'Accept-Language': 'pt-BR,pt;q=0.9',
      }
    })

    cy.get('input[name="origin-nearby-airports"]').should('not.be.checked')
    cy.get('input[name="destination-nearby-airports"]').should('not.be.checked')
    cy.get('input[name="prefer-directs"]').should('not.be.checked')

    cy.get('#originInput-input').type('Manaus')
    cy.get('ul#originInput-menu li').first().click()

    cy.get('#destinationInput-input').type('São Paulo')
    cy.get('ul#destinationInput-menu li').first().click()

    cy.get('button[data-testid="depart-btn"]').click({ force: true })
    cy.contains('button', '20').should('have.attr', 'aria-hidden', 'false').click()
    cy.contains('button', '26').should('have.attr', 'aria-hidden', 'false').click()
    cy.get('button[data-testid="CalendarSearchButton"]').click()

    cy.get('button[data-testid="traveller-button"]').click({ force: true })
    cy.get('#adult-nudger').should('have.value', '1')

    cy.get('button[data-testid="desktop-cta"]').click()

    cy.url().should('include', '/transporte/passagens-aereas')  
  })
})