Algumas ponderações feitas:

- A fim de se aproximar o máximo possível do template, optei por retornar do endpoint /top-words, além das palavras, quantas vezes cada uma ocorreu. Visto que no template, a respectiva frequência de cada palavra foi apresentada. Uma opção seria retornar apenas o array de palavras, e executar o /word-frequency para cada palavra. Porém, computacionalmente, seria mais custoso.
- Por fazer esta mudança no retorno do endpoint /top-words, o teste da função topWords falha. Para que se tenha sucesso em todos os testes, basta descomentar a linha 59 do arquivo "document.helper.js". Nesta linha, faço com que seja retornado apenas o array de palavras, o que o teste espera como resposta.
- O template do figma  foi feito com base em uma tela 1280x700, que corresponde às dimensões da imagem de background. Optei por estender o background por toda a tela e utilizá-la como um todo, ao invés de, por exemplo, centralizar todo o conteúdo da página nos 1280px. Por este motivo, não segui fielmente o tamanho dos inputs do método 1 e 2, uma vez que se fizesse-os ocupar toda a tela, como feito no template, eles ficariam desproporcionalmente grande, dado que se espera deles apenas 1 palavra. De resto, busquei seguir religiosamente o layout, considerando as distâncias entre componentes, paddings, tamanhos de fontes e etc.
- Foi adicionado além do proposto no protótipo, um botão de "Sair", na parte inferior da Sidebar, que realiza o logout do usuário na aplicação.