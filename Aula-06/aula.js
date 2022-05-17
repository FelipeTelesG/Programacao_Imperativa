//function soma ( a, b ){
//    return a + b;
//}


let a = 5;
//console.log( 'string ',8+' forma-01' );
// chamou o let a 
//console.log( `string ${a} forma-02` );
//console.log( soma( a, a ) );

//function divideSoma( a, b ){
//    return a / b;
//}

//console.log( divideSoma( soma(3, 4), 5 ) );
//let result = soma(3, 4);
//console.log( divideSoma( result, 5 ) );

// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function soma( a, b ) {
    return (a + b);
}

let valorAEX1 = 1
let valorBEX1 = 2
console.log (`Valores a ser somados ${valorAEX1} e ${valorBEX1}`)
console.log (`Valor Somado ${soma(valorAEX1,valorBEX1)}`)
console.log (`-----------------------------------------------`)

// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação

function subtracao ( a, b ) {
    return (a - b);
}

let valorAEX2 = 1
let valorBEX2 = 2
console.log (`Valores a serem subtraidos ${valorAEX2} e ${valorBEX2}`)
console.log (`Valor Subtraido ${subtracao(valorAEX2,valorBEX2)}`) 
console.log (`-----------------------------------------------`)

// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao ( a, b ) {
    return (a * b);
}

let valorAEX3 = 2
let valorBEX3 = 2
console.log (`Valores a serem subtraidos ${valorAEX3} e ${valorBEX3}`)
console.log (`Valor subtraidos ${multiplicacao(valorAEX3,valorBEX3)}`) 
console.log (`-----------------------------------------------`)

// Crie uma função de divisão, que deverá receber dois parâmetros e retornar a divisão do primeiro menos o segundo.

function divisao ( a, b ) {
    return (a / b);
}

let valorAEX4 = 0
let valorBEX4 = 2
console.log (`Valores a serem divididos ${valorAEX4} e ${valorBEX4}`)
console.log (`Valor dividido ${divisao(valorAEX4,valorBEX4)}`) 
console.log (`-----------------------------------------------`)

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.

function multiplicacaoAoQuadrado ( a, a ) {
    return (a * a);
}

let valorAEX5 = 5

console.log (`Valores a serem Multiplicados ${valorAEX5}`)
console.log (`Valor Quadrado ${multiplicacaoAoQuadrado(valorAEX5,valorAEX5)}`) 
console.log (`-----------------------------------------------`)

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.

function mediaDeTresNumeros ( a, b, c, d ) {
    return (a + b + c) /d;
}

let valorAEX6 = 5
let valorBEX6 = 4
let valorCEX6 = 2
let valorDEX6 = 3

console.log (`Valores a serem somados por media ${valorAEX5}`)
console.log (`Valor ao Quadrado = ${mediaDeTresNumeros(valorAEX6, valorBEX6, valorCEX6, valorDEX6)}`)
console.log (`-----------------------------------------------`)

// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.

function calculaPorcentagem (a, b) {
    return ( a % b );
}

let valorAEX7 = 10
let valorBEX7 = 3

console.log (`Valores a serem calculados por Porcentagem ${valorAEX7} e ${valorBEX7}`)
console.log (`Valor Porcentual = ${calculaPorcentagem(valorAEX7, valorBEX7)}`)
console.log (`-----------------------------------------------`)