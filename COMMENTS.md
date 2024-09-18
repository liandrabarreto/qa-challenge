
# Comentários

## Decisão de Arquitetura

**Framework de Teste**: Usei o [Cypress](https://www.cypress.io/) para automação de testes end-to-end por sua facilidade de uso e suporte a interações com a UI.

**Estrutura dos Testes**: Cada caso de uso foi colocado em arquivos separados para melhorar a organização e a manutenção. Isso permite que cada teste seja independente e facilmente localizável, facilitando a atualização e a execução de testes específicos sem afetar outros.

## Melhorias com Mais Tempo

1. **Automatização mais Estável**: Implementaria uma abordagem mais estável para contornar o reCAPTCHA e melhorar a execução contínua dos testes.
2. **Melhor Identificação de Elementos**: Tentaria encontrar uma solução mais robusta para lidar com os elementos HTML dinâmicos, usando seletores mais confiáveis.

## Requisitos Não Entregues

**Edição e Exclusão de Filtros**:
Devido ao uso do reCAPTCHA no Skyscanner, não consegui completar a validação da edição e exclusão dos filtros de busca.

**Dificuldades Técnicas**:
Enfrentei dificuldades com classes e IDs do HTML sendo gerados dinamicamente, o que complicou a seleção dos elementos e a automação dos testes.
O uso do reCAPTCHA do skyscanner para reconhecer scripts dificultou nos testes.

