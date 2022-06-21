/*Tem se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva
- A maior e menor altura do grupo;
- A média de altua das mulheres;
- A número de homens;
*/

// ---------------------------------------------------- // ---------------------------------------------------- //  

const pessoa = [
    {
        altura: 1.78,
        sexo:"M"
    },
    {
        altura: 1.60,
        sexo:"F"
    },
    {
        altura: 1.65,
        sexo:"F"
    },
    {
        altura: 1.88,
        sexo:"M"
    },
    {
        altura: 1.70,
        sexo:"M"
    },
    {
        altura: 1.73,
        sexo:"F"
    },
    {
        altura: 1.70,
        sexo:"F"
    },
    {
        altura: 1.71,
        sexo:"M"
    },
    {
        altura: 1.83,
        sexo:"M"
    },
    {
        altura: 1.84,
        sexo:"M"
    },
    {
        altura: 1.78,
        sexo:"M"
    },
    {
        altura: 1.82,
        sexo:"M"
    },
    {
        altura: 1.78,
        sexo:"M"
    },
    {
        altura: 1.97,
        sexo:"M"
    },
    {
        altura: 1.87,
        sexo:"M"
    }
    
];

console.log ( pessoa );
console.log ( pessoa.length );
// - A maior e menor altura do grupo;

/*const arr = [1.78, 1.6, 1.65, 1.88, 1.70, 1.73, 1.65, 1.70, 1.71, 1.83, 1.84, 1.78, 1.82, 1.78, 1.97, 1.87];

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min); // 1.6
console.log(max); // 1.97

// A média de altua das mulheres;

function pessoaF(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1.6, 1.65, 1.73, 1.70];
var a = pessoaF(myArray);

console.log(a);


// A média de altua dos homens;

function pessoaM(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}
var myArray = [1.78, 1.88, 1.70, 1.65, 1.71, 1.83, 1.84, 1.78, 1.82, 1.78, 1.97, 1.87];
var b = pessoaM(myArray);

console.log(b);*/