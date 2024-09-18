describe('Use Case Edit', () => {
  it('Edit Search', () => {
     cy.visit('https://www.skyscanner.com.br/transporte/passagens-aereas/mao/rioa/240920/240926/?adultsv2=1&cabinclass=economy&childrenv2', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
        'Accept-Language': 'pt-BR,pt;q=0.9',
      }
    })

  cy.get('section[role="searchbox"]').find('nav').find('button').contains('Manaus (MAO) - Rio de Janeiro (qualquer)').click({ multiple: false }); 

  cy.get('div#fsc-destination-search-location-selector').click(); 
  cy.get('input#fsc-destination-search').type('Sao Paulo');
  cy.get('input[aria-activedescendant="react-autowhatever-fsc-destination-search--item-0"]').click();

  cy.get('button[aria-label="Buscar"]').click();
  })
})