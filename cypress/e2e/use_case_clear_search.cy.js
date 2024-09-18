describe('Use Case Clear Search', () => {
  it('Clear Search', () => {
     cy.visit('https://www.skyscanner.com.br/transporte/passagens-aereas/mao/rioa/240920/240926/?adultsv2=1&cabinclass=economy&childrenv2', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
        'Accept-Language': 'pt-BR,pt;q=0.9',
      }
    })

  cy.get('section[role="searchbox"]').find('nav').find('button').contains('Manaus (MAO) - Rio de Janeiro (qualquer)').click({ multiple: false }); 

  cy.get('#fsc-origin-search').clear();
  cy.get('#fsc-destination-search').clear();

  cy.visit('https://www.skyscanner.com.br/')
  })
})