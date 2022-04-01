const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))//vai voltar um numero vazio pois não tem letra no 5 espaço pois a contagem começa do 0

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log("Escola " .concat(escola).concat("!"))
console.log(escola.replace(3, 'e')) // aqui ele pega todos os numeros que escolhi e trocará pela letra que declarei

const nome = 'Sar4'
console.log(nome.replace(4 , 'a') + ' O amor da minha vidaaaa')

console.log('Ana,Maria,Pedro'.split(',')) //aqui ele vai pegar todos os locais que tem virgula e separar utilizando arrays.