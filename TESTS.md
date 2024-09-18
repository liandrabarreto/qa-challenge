## Teste: Buscar Passagens

**Objetivo:** Garantir que a busca de passagens aéreas no Skyscanner funcione corretamente com os parâmetros inseridos e que a página de resultados seja carregada como esperado.

**Descrição do Teste:**

1. **Acesso ao Site:**
   - Navega para o site do Skyscanner, configurando o idioma para português e simulando uma requisição de um navegador real.

2. **Verificação das Opções Adicionais:**
   - Checa se as opções "Adicionar aeroportos próximos" e "Voos diretos" estão desmarcadas por padrão.

3. **Inserção dos Dados de Viagem:**
   - Digita "Manaus" no campo de origem e escolhe a primeira sugestão.
   - Digita "São Paulo" no campo de destino e seleciona a primeira sugestão da lista.

4. **Seleção das Datas:**
   - Clica no botão para escolher as datas de viagem.
   - Seleciona o dia 20 como data de partida e o dia 26 como data de retorno.
   - Finaliza a seleção de datas clicando no botão de busca do calendário.

5. **Configuração do Número de Viajantes:**
   - Verifica a quantidade de viajantes para 1 e confirma a configuração.

6. **Execução da Busca:**
   - Clica no botão para realizar a busca com os dados fornecidos.

7. **Verificação do Resultado:**
   - Confirma se a URL foi atualizada para a página de resultados de passagens aéreas, garantindo que a busca foi executada corretamente.

**Resultado Esperado:**
- O site deve carregar com as opções corretas e os parâmetros da busca devem estar configurados conforme esperado.
- A busca deve ser realizada com sucesso e o usuário deve ser direcionado para a página de resultados.


## Teste: Editar Busca

**Objetivo:** Verificar se é possível editar uma busca de passagens aéreas existente e se as alterações são aplicadas corretamente.

**Descrição do Teste:**

1. **Acesso à Página de Resultados:**
   - Acessa diretamente a página de resultados de passagens aéreas com parâmetros específicos (Manaus para Rio de Janeiro, datas 24/09 a 26/09, 1 adulto).

2. **Edição da Busca:**
   - Localiza e clica na descrição da rota atual (Manaus - Rio de Janeiro) para iniciar a edição da busca.
   - Clica na caixa de seleção de destino e altera o aeroporto de destino de "Rio de Janeiro" para "São Paulo" digitando o novo destino e selecionando a sugestão correspondente da lista.

3. **Execução da Busca Editada:**
   - Clica no botão "Buscar" para aplicar as alterações e realizar a nova busca com o destino editado.

**Resultado Esperado:**
- A busca deve ser atualizada para refletir o novo destino.
- A página deve carregar com os resultados da nova busca de passagens de Manaus para São Paulo, confirmando que a edição foi aplicada corretamente.


## Teste: Limpar Busca

**Objetivo:** Garantir que é possível limpar algum campo de busca e retornar à página inicial do Skyscanner.

**Descrição do Teste:**

1. **Acesso à Página de Resultados:**
   - Acessa a página de resultados de passagens aéreas com parâmetros específicos (Manaus para Rio de Janeiro, datas 24/09 a 26/09, 1 adulto).

2. **Limpeza dos Campos de Busca:**
   - Localiza e clica na descrição da rota atual (Manaus - Rio de Janeiro) para abrir o formulário de busca.
   - Limpa os campos de origem e destino, removendo os valores inseridos.

3. **Retorno à Página Inicial:**
   - Após limpar os campos, navega de volta para a página inicial do Skyscanner.

**Resultado Esperado:**
- Os campos de origem e destino devem estar vazios após a limpeza.
- A navegação para a página inicial deve ser realizada.


