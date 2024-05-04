
# Projeto de pokedex usando a PokéAPI 
## Quest React Avançado - Teste Técnico

## Link: https://rodrigo-oliveira-de-mattos.github.io/pokeapi-react/

Fiz essa aplicação com o intuito de colocar em prática os conhecimentos adiquiridos durante os módulos referente ao React.
### Home: 
- Nela podemos, primeiramente, ver uma lista com os 10 primeiros pokemons, podendo expandir de 10 em 10, ou de 100 em 100 apartir do 30° pokemon. (Curiosidade. Se expandir 2x com 10, então 1x com 100, e denovo 2x com 10. Ao invés de 150 será 151)
- Cada pokemon possui um card, contendo o seu número, um GIF e o nome.
- Na home, também existe um filtro que filtrará os pokemon por tipo. Com esse modo, ao invés de aparecer apenas de 10 em 10, todos apareceram. Esse detalhe foi proposital.
    - Por ter decidido fazer o filtro, eu deixei de lado o teste com Jest, devido ao meu tempo na vida pessoal.
#### Ao clicar em um dos cards, o usuário é redirecionado para a "PokePage"
### PokePage: 
- Um botão de voltar para a home foi adicionado.
- Contem o número e o(s) tipo(s) logo acima do nome.
- Uma imagem do pokemon, mas agora estatica no centro da tela.
- Botões para avançar, ou retroceder o pokemon estão nas laterais.
- Para encerrar. Uma lista com as habilidades e os movimentos.
### Toggle theme
- Existe um botão que troca o tema no header que está presente em qualquer página que o usuários esteja. Mas não é a única forma de mudar, a cor padrão é determinada pelo padrão do dispositivo, e é atualizado em tempo real
## Libs utilizada

React, tanstack/react-query, react-router-dom, styled-components, gh-pages

## Aprendizados

A parte do estilos com styled-components foi simples, mas o uso do context e react-query me pegaram no começo. Eu precisei assistir alguns videos e ler melhor as documentações para realmente entender. Não acredito que esteja realmente bom nesses 2, então praticarei mais.

Aprendi principalmente sobre o cache do react-query. Mas também precisei aprender a passar informações apenas usando o pathname. Pode ser que seja considerado má prática ou gambiarra, mas foi um jeito fácil que encontrei de usar o nome dos pokemon para fazer o fetch, já que era só tirar o excedente que tava pronto.

Sobre fazer com que o tema mude de acordo com o sistema. Eu já usava em outros projetos que eu fiz para o frontend mentor, mas nunca tinha usado em conjunto com o context, o que me deu uma dor de cabeça rápida.

Eu gostaria de ter feito uma pokedex mais detalhada, mas o tempo é uma coisa que me falta.
