//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
/*
*na função sem retorno aqui devemos declarar os dois valores que na função estão declarados a + b pois elas não possuem valor nenhum por conta disso precisam ser declarados dois valores
 */
//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))

/*
Na função com retorno é possivel declarar apenas "a" pois "b" já tem o valor um então na hora da soma o se b não tiver nenhum novo valor declarado ele já terá o valor 1 assim não resultando em um erro 
 */