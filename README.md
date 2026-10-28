# Terra rica. Prato pobre.

Site para apresentar a revista sobre fome e insegurança alimentar no Brasil e no Norte. O leitor mostra uma página de cada vez, preservando a composição do Figma. O texto é selecionável e os gráficos extraídos são elementos HTML, com os valores originais.

## Executar

Com Node.js 24 ou superior:

```sh
npm install
npm run dev
```

Acesse http://127.0.0.1:5173/. Para gerar os arquivos de publicação, execute `npm run build`; a saída fica em `dist/`. `npm run preview` serve essa versão localmente. As imagens e as fontes são locais.

## Navegação

- Setas esquerda e direita, Page Up e Page Down: mudar de página.
- Home e End: primeira e última tela.
- F: alternar tela cheia.
- Barra inferior: sumário, seleção de páginas, zoom e ajuste à tela.
- Links `#pagina=10`, por exemplo, abrem uma página diretamente.

## Conteúdo e interatividade

As 22 telas estão implementadas a partir do [novo arquivo do Figma](https://www.figma.com/design/5xsYU3wLGps73ZzUHfNhyz/Revista-Multidisciplinar---Fome?node-id=503-352). Imagens, SVGs e fontes estão salvos localmente. A numeração original foi mantida: capa 00 e páginas 02 a 22.

- Os 20 itens do sumário abrem as matérias correspondentes.
- O painel da EBIA expande as definições de insegurança leve, moderada e grave.
- Os perfis de Josué de Castro e Amartya Sen alternam o destaque.
- A troca de 2023 para 2024 atualiza as barras, os percentuais e o parágrafo explicativo, com as mesmas atribuições de variáveis do protótipo.
- O gráfico histórico alterna entre visão geral e níveis.
- Os depoimentos alternam entre Mariazinha Baré e Neideana Ribeiro.
- O carrossel exibe as quatro fotos originais, com troca a cada três segundos, deslocamento de 450 ms e dissolução na volta à primeira.
- Os hyperlinks das legendas e das referências conservam os destinos do Figma.

Os estados interativos são preservados ao voltar a uma matéria. Ao mudar de página, o temporizador do carrossel pausa; ao retornar, retoma a sequência.

As correções autorizadas são os destinos das páginas 10 e 11 no sumário e as três chamadas bibliográficas do editorial, da página 16 e da proposta da página 21 para “p. 22”. As outras chamadas para página 22 já vieram assim no novo arquivo. Não foram estimados ou adicionados dados editoriais.

A cor terciária dos gráficos das páginas 08, 11 e 14 foi personalizada para `#063652`, a pedido do usuário. As cores principais foram preservadas; os valores sobre os segmentos azuis da página 08 usam texto claro para manter a leitura.

`design/figma/` guarda a primeira extração; `design/figma-new/` guarda os novos contextos. `design/source-map.json` associa as páginas do site às fontes. A conversão para componentes e CSS local está em `scripts/prepare-figma.mjs`.

## Verificação

```sh
npm test
npm run verify:content
npm run build
```

As verificações cobrem a ordem das 22 páginas, os destinos do sumário, links diretos, enquadramento, assets locais e os números do gráfico anual. A auditoria de conteúdo compara os 520 blocos de texto do novo Figma com o HTML renderizado, considerando somente as três alterações bibliográficas autorizadas.

O navegador foi usado para verificar as 22 telas, suas imagens e o ajuste à tela, além dos estados interativos. Os arquivos raster foram decodificados e os SVGs validados. O teste não constitui uma nova revisão acadêmica independente das fontes citadas pela revista.
