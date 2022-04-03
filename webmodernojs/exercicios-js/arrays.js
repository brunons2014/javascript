/*
* Um array serve para quando você precisar *declarar varias informações dentro de uma *variavel e precisar selecionar uma informação *você consegue selecionar uma das informações *indicando a sua posição
*/

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

//insere uma nova informação no array na posição informada
valores[4] = 10
console.log(valores)
console.log(valores.length)// informa quantas coisas tenho dentro do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//tira o ultimo valor do array
delete valores[0]//deleta a informação da posição informada que no caso aqui é 0
console.log(valores)

console.log(typeof valores)
/* um array dentro do js é um objeto*/

const vida = ['Bruno', 'Sara', 'Claudinei', 'Marcia', 'Gabriel']
console.log(vida[0])