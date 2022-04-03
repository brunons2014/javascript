/* Booleanos servem para quando você tiver varias *informações falsas ou vazias ele escolher a *primeira informação verdadeira disponivel con o *uso do ou ||
*/

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) 

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')
/*
*O tipo boleeano sempre que tiver um ou sempre *vai procurar uma sentença verdadeira para *declarar *como no caso nome estava vazio então *falso ele *vai procurar uma declaração *verdadeira que no *caso é Desconhecido
*/