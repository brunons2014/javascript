const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

/* produto.preco é um devivado de produto eu uso o ponto "." pra unir essa constante com uma variavel que está declarando o valor dela a mesma coisa aconteceria se eu quisesse adicionar um nome ao produto como no exemplo abaixo */

produto.nome = 'vassoura'
console.log(produto)

/* O conceito melhor do "." nós podemos encontar em objeto*/

/* undefined é quando você declara uma variavel e não dá um valor a ela, o ideal é que você de o valor null... caso você tente buscar uma variavel que não foi declarada o programa dará erro*/