# HairDay --- Instruções para o agente de desenvolvimento

## 1. Papel do agente

Atue como desenvolvedor front-end experiente, com foco em **React,
TypeScript e Vite**. Seu objetivo é implementar o projeto HairDay de
forma fiel ao Figma, com código simples, organizado, responsivo e fácil
de explicar por uma pessoa em formação.

Antes de alterar qualquer arquivo: 1. Leia este `AGENTS.md` por
completo. 2. Analise a estrutura atual do projeto e identifique o que já
existe. 3. Consulte os links de referência abaixo usando os MCPs
disponíveis. 4. Apresente um plano curto, dividido em etapas pequenas,
indicando quais arquivos pretende criar ou alterar. 5. Aguarde
autorização antes de executar alterações relevantes. Não faça
refatorações amplas sem necessidade.

Não presuma que o projeto está vazio. Preserve implementações existentes
que estejam corretas.

## 2. Referências oficiais do projeto

Use estas referências como fonte principal de requisitos e decisões
visuais:

-   **Enunciado / Notion:**\
    https://deluxe-blue-bc1.notion.site/Projeto-04-HairDay-Agendamentos-com-React-TypeScript-IA-414dfca74d8d81919380c39dcde5d2e3

-   **Figma --- interface do HairDay:**\
    https://www.figma.com/design/j8bL9IhyywmoFbLdmLT8mz/Plataforma-de-agendamento--Community---Copy---Copy-?node-id=3-376&p=f&t=qLp420F2VvvkAUTx-0

-   **Figma --- Style Guide:**\
    https://www.figma.com/design/j8bL9IhyywmoFbLdmLT8mz/Plataforma-de-agendamento--Community---Copy---Copy-?node-id=3-377&p=f&t=qLp420F2VvvkAUTx-0

### Como consultar as referências

-   Use o **Figma MCP** para inspecionar os frames, componentes,
    espaçamentos, dimensões, cores, tipografia, ícones e comportamento
    responsivo. Dê preferência aos dados reais do arquivo, não a
    suposições feitas a partir de screenshots.
-   Use o node `3:376` como referência da interface e o node `3:377`
    como referência do Style Guide.
-   Use o **Notion MCP**, caso esteja disponível, para consultar o
    enunciado completo e confirmar requisitos funcionais e critérios de
    avaliação.
-   Se algum MCP não estiver configurado ou não conseguir acessar uma
    referência, informe isso claramente. Não diga que inspecionou um
    arquivo se não conseguiu acessá-lo.
-   Não invente detalhes visuais ausentes. Quando houver dúvida,
    sinalize a dúvida e proponha a alternativa mais simples antes de
    implementar.

## 3. Objetivo do produto

Construir o **HairDay**, uma aplicação web de agendamento para salão de
beleza/barbearia.

A interface principal é dividida em: - Uma área lateral para cadastrar
um novo agendamento. - Uma área principal com a agenda do dia
selecionado, organizada por períodos.

O produto não precisa de inteligência artificial em tempo de execução. A
IA é utilizada como ferramenta de apoio ao desenvolvimento.

## 4. Stack e limites técnicos

### Obrigatório

-   React
-   TypeScript
-   Vite

### Estilização

-   CSS ou Tailwind CSS.
-   Antes de escolher ou instalar uma solução, verifique o que já está
    configurado no projeto.
-   Não misture várias abordagens de estilização sem necessidade.
-   Priorize fidelidade ao Figma e facilidade de manutenção.

### Ícones

-   Utilize **Phosphor Icons**, conforme indicado no Style Guide.
-   Para React, prefira a biblioteca `@phosphor-icons/react`, caso ainda
    não exista uma implementação equivalente no projeto.
-   Use os ícones adequados aos elementos da interface e mantenha
    consistência de tamanho, peso e alinhamento.
-   Não substitua os ícones por emojis ou caracteres Unicode.

### Restrições de escopo

-   Não criar backend, API, banco de dados ou autenticação.
-   Os agendamentos podem permanecer em memória usando o estado do
    React.
-   `localStorage` é opcional; só implemente se isso não aumentar
    desnecessariamente a complexidade.
-   Impedir agendamentos duplicados no mesmo dia e horário é opcional,
    mas pode ser implementado se ficar simples e consistente.
-   Não adicionar bibliotecas sem uma necessidade concreta.

## 5. Identidade visual --- Style Guide

Os valores abaixo foram transcritos do Style Guide fornecido. Use-os
como tokens centralizados no CSS. Não espalhe valores hexadecimais
repetidos pelos componentes.

### 5.1 Cores

#### Produto

  Token sugerido            Hex         Uso
  ------------------------- ----------- -------------------
  `--color-product-light`   `#DBC170`   Amarelo claro
  `--color-product`         `#B8952E`   Amarelo principal
  `--color-product-dark`    `#846F2E`   Amarelo escuro

#### Base

  Token sugerido       Hex         Nome no Style Guide
  -------------------- ----------- ---------------------
  `--color-gray-100`   `#F5F4F5`   gray-100
  `--color-gray-200`   `#B2AFB6`   gray-200
  `--color-gray-300`   `#98959D`   gray-300
  `--color-gray-400`   `#7A767F`   gray-400
  `--color-gray-500`   `#3E3C41`   gray-500
  `--color-gray-600`   `#2E2C30`   gray-600
  `--color-gray-700`   `#232225`   gray-700
  `--color-gray-800`   `#19181B`   gray-800
  `--color-gray-900`   `#050505`   gray-900

Amostras e valores devem ser conferidos no Figma MCP sempre que
possível. Se houver diferença entre este resumo e o arquivo Figma,
sinalize a divergência antes de alterar os tokens.

### 5.2 Tipografia

-   **Família:** Catamaran.
-   A fonte pode ser carregada pelo Google Fonts.
-   Configure a família em um único lugar, preferencialmente como token
    global.

  Estilo       Tamanho   Line height Peso
  ---------- --------- ------------- ---------------
  Title Lg        32px          24px Bold (700)
  Title Md        16px          24px Bold (700)
  Title Sm        14px          20px Bold (700)
  Text Md         16px          24px Regular (400)
  Text Sm         14px          20px Regular (400)

Não crie uma escala tipográfica paralela sem consultar o Figma. Caso o
layout exija outros tamanhos, confirme-os no arquivo de design.

### 5.3 Ícones

-   Biblioteca: **Phosphor Icons**.
-   Referência: https://phosphoricons.com/
-   Utilize a versão React `@phosphor-icons/react`.
-   Consulte o Figma para identificar os ícones específicos usados na
    interface.
-   Mantenha coerência de peso (`regular`, `bold`, `fill` etc.) e
    dimensões.

### 5.4 Organização dos tokens

Crie ou atualize os tokens em um arquivo global de estilos, por exemplo
`src/index.css` ou `src/styles/tokens.css`, respeitando a estrutura já
existente.

Exemplo de organização (adapte ao projeto, sem duplicar arquivos
desnecessariamente):

``` css
:root {
  --color-product-light: #DBC170;
  --color-product: #B8952E;
  --color-product-dark: #846F2E;

  --color-gray-100: #F5F4F5;
  --color-gray-200: #B2AFB6;
  --color-gray-300: #98959D;
  --color-gray-400: #7A767F;
  --color-gray-500: #3E3C41;
  --color-gray-600: #2E2C30;
  --color-gray-700: #232225;
  --color-gray-800: #19181B;
  --color-gray-900: #050505;

  --font-family-base: "Catamaran", sans-serif;
}
```

O exemplo define somente os tokens. Consulte o Figma para decidir
fundos, bordas, estados, contrastes e aplicações de cada cor.

## 6. Requisitos funcionais

### 6.1 Cadastro de agendamento

O formulário deve permitir informar: - Nome do cliente. - Data. -
Horário.

Ao confirmar: - Validar os campos obrigatórios. - Criar um
agendamento. - Atualizar a agenda sem recarregar a página. - Exibir o
agendamento na data correspondente. - Limpar ou redefinir os campos
conforme o comportamento definido no Figma.

### 6.2 Agenda por data

-   Exibir os agendamentos da data selecionada.
-   Permitir trocar a data da agenda.
-   Ao trocar a data, mostrar somente os registros daquele dia.
-   Ordenar os agendamentos por horário crescente.

### 6.3 Agrupamento por período

Organizar a agenda nos seguintes períodos:

  Período   Horário
  --------- ------------
  Manhã     09h às 12h
  Tarde     13h às 18h
  Noite     19h às 21h

-   Respeitar os horários disponíveis apresentados no Figma.
-   Não criar horários fora das opções definidas no design sem
    justificativa.
-   Mostrar cada seção conforme o padrão visual do Figma.
-   Não deixar agendamentos de um período aparecerem em outro.

### 6.4 Exclusão

-   Cada agendamento deve permitir exclusão individual.
-   A exclusão deve atualizar a interface imediatamente.
-   Utilize o identificador do agendamento para remover o registro
    correto.
-   Não manipule o DOM diretamente.

### 6.5 Estado vazio

Quando não houver agendamentos no período/data selecionado, exibir
exatamente:

> Você ainda não tem agendamentos cadastrados nesse período.

Confira no Figma se a mensagem aparece por seção ou para a agenda
inteira e reproduza o comportamento do design.

### 6.6 Validação

-   Nome não pode ficar vazio.
-   Data deve ser válida.
-   Horário deve ser selecionado entre as opções permitidas.
-   Mensagens e estados de erro devem seguir o visual do Figma.
-   Evite validações excessivas que não façam parte do escopo.

## 7. Modelo de dados e React

Utilize TypeScript para representar o domínio. Modelo inicial sugerido:

``` ts
export type Appointment = {
  id: string;
  clientName: string;
  date: string;
  time: string;
};
```

Ajuste nomes ou estrutura somente se houver uma razão clara. Mantenha o
tipo compartilhado em um arquivo próprio, por exemplo
`src/types/appointment.ts`.

### Regras de implementação

-   Utilize `useState` para o estado da aplicação.
-   Utilize Props para comunicação entre componentes.
-   Atualize arrays de forma imutável.
-   Utilize `map` para renderização de listas.
-   Utilize `filter` para filtrar por data e excluir registros.
-   Utilize `reduce` quando fizer sentido para agrupar por período.
-   Utilize IDs estáveis como `key` nas listas.
-   Evite `any`. Prefira tipos explícitos e inferência correta.
-   Não use manipulação direta do DOM para controlar estado ou
    renderização.
-   Não concentre toda a aplicação em um único componente ou arquivo.

## 8. Componentização sugerida

A estrutura exata pode variar conforme o projeto, mas mantenha
responsabilidades claras. Componentes possíveis:

-   `ScheduleSidebar`: área lateral e formulário de novo agendamento.
-   `AppointmentForm`: campos e validação do formulário.
-   `AppointmentList`: agenda filtrada pela data selecionada.
-   `PeriodSection`: seção de Manhã, Tarde ou Noite.
-   `AppointmentItem`: apresentação e exclusão de um agendamento.

Responsabilidades: - O estado principal dos agendamentos deve ficar em
um componente de nível adequado, como `App`. - O formulário recebe por
Props a função de cadastro. - A lista recebe por Props os agendamentos e
a função de exclusão. - Componentes visuais não devem duplicar regras de
negócio. - Não crie componentes para elementos triviais quando isso
tornar o código mais difícil de acompanhar.

Estrutura de pastas sugerida, a adaptar ao que já existe:

``` text
src/
  assets/
  components/
    AppointmentForm/
    AppointmentItem/
    AppointmentList/
    PeriodSection/
    ScheduleSidebar/
  types/
    appointment.ts
  App.tsx
  main.tsx
  index.css
AGENTS.md
README.md
```

## 9. Layout, responsividade e acessibilidade

-   Reproduza a interface do Figma antes de propor mudanças estéticas.
-   A versão desktop deve manter a composição de sidebar e agenda
    conforme o design.
-   Em telas menores, reorganize as áreas para que formulário e agenda
    continuem utilizáveis.
-   Não resolva responsividade simplesmente reduzindo toda a interface.
-   Evite rolagem horizontal em larguras comuns de celular.
-   Use elementos semânticos e labels associados aos campos.
-   Botões de ícone devem ter nome acessível (`aria-label`).
-   Garanta foco visível e navegação básica por teclado.
-   Confira contraste e legibilidade, principalmente sobre fundos
    escuros.

## 10. Ferramentas MCP e documentação

### Context7 MCP

Use o Context7 para consultar documentação atual quando surgir dúvida de
implementação, principalmente: - React: componentes, Props, eventos e
`useState`. - TypeScript: tipos, unions e tipagem de Props. - Vite:
configuração e comandos. - Biblioteca de ícones, se necessário.

Não invente APIs nem confie em memória quando a documentação puder ser
consultada. Consulte somente o que for relevante para a tarefa atual.

### Playwright MCP

Use o Playwright MCP para validar a aplicação em execução. Verifique
pelo menos:

1.  A aplicação abre sem erros.
2.  É possível cadastrar um agendamento válido.
3.  O agendamento aparece na data correta.
4.  Trocar a data altera os registros exibidos.
5.  Os agendamentos aparecem no período correto e em ordem cronológica.
6.  É possível excluir um agendamento.
7.  O estado vazio aparece quando aplicável.
8.  Campos obrigatórios são validados.
9.  O layout continua utilizável em viewport mobile.
10. Não há erros relevantes no console.

Não declare um teste como aprovado sem executá-lo. Informe o que foi
testado e o que não foi possível testar.

### Git e GitHub

-   Faça alterações pequenas e coerentes.
-   Não apague ou sobrescreva trabalho existente sem autorização.
-   Sugira commits com mensagens claras, mas não faça push sem
    autorização explícita.
-   Não inclua arquivos secretos, `.env` ou credenciais no repositório.

## 11. Processo de trabalho

Siga esta ordem, adaptando-a ao estado real do repositório:

1.  **Reconhecimento:** ler o projeto, o enunciado e os frames do Figma.
2.  **Planejamento:** listar etapas e arquivos envolvidos.
3.  **Estrutura visual:** implementar layout, tipografia, cores e
    responsividade.
4.  **Componentização:** separar formulário, agenda, períodos e itens.
5.  **Modelo e estado:** definir o tipo `Appointment` e o estado React.
6.  **Cadastro:** implementar formulário e validação.
7.  **Consulta:** filtrar por data, agrupar por período e ordenar.
8.  **Exclusão:** remover por ID e atualizar a interface.
9.  **Validação:** testar com Playwright em desktop e mobile.
10. **Entrega:** revisar código, README e evidências.

Trabalhe em etapas pequenas. Ao concluir cada etapa: - Resuma o que foi
feito. - Liste os arquivos criados ou alterados. - Informe como
validar. - Aponte dúvidas, limitações ou decisões que precisam de
aprovação.

## 12. Critérios de conclusão

Considere o projeto concluído quando:

-   [ ] A interface estiver coerente com o Figma.
-   [ ] Cores, Catamaran e Phosphor Icons estiverem aplicados conforme o
    Style Guide.
-   [ ] Layout desktop e mobile estiverem utilizáveis.
-   [ ] O formulário cadastrar agendamentos válidos.
-   [ ] A agenda filtrar pela data selecionada.
-   [ ] Os agendamentos estiverem agrupados nos períodos corretos.
-   [ ] A ordenação por horário estiver correta.
-   [ ] A exclusão individual funcionar.
-   [ ] A mensagem de estado vazio estiver correta.
-   [ ] Os campos obrigatórios forem validados.
-   [ ] O código estiver componentizado e tipado.
-   [ ] Os testes essenciais tiverem sido executados e documentados.
-   [ ] O `README.md` explicar o projeto e como executá-lo.

## 13. README e entrega

O `README.md` deve conter, no mínimo: - Nome e breve descrição do
HairDay. - Tecnologias utilizadas. - Pré-requisitos. - Como instalar
dependências. - Como executar em desenvolvimento. - Funcionalidades
implementadas. - Screenshots da aplicação em desktop e mobile, quando
disponíveis.

Não invente screenshots ou evidências. Gere-as a partir da aplicação
real.

## 14. Regras importantes

-   Não implemente tudo de uma vez.
-   Não faça alterações grandes sem apresentar o plano.
-   Não adicione funcionalidades fora do escopo por iniciativa própria.
-   Não complique a arquitetura: este é um projeto front-end de escopo
    controlado.
-   Não use dados mockados como se fossem persistentes.
-   Não esconda erros de TypeScript, lint ou build.
-   Não remova configurações ou dependências sem verificar seu uso.
-   Priorize código que o estudante consiga compreender e explicar.
-   Quando houver mais de uma solução, prefira a mais simples que atenda
    aos requisitos.
