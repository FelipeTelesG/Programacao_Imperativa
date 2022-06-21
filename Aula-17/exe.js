//-----------------------------EXERCÍCIO 1-----------------------------//
/* Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores 
divididos pela soma de toda a matriz, usando map() e reduce().*/

const valores = [1,2,3,4,5,6,7,8,9];

let soma = valores.reduce ( function(acumulador, valor){
    console.log ( acumulador , valor );
    return acumulador + valor;
} );

let tabuada = valores.map(  function(x){
    return x+' - presente';
    //console.log(element * 2);
});

console.log ( tabuada );
console.log ( soma );

//----------------------------- EXERCÍCIO 2 -----------------------------//
/*Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as 
palavras que têm mais do que uma quantidade de letras maior do que o número informado. 
(verifique como funciona o método filter ()) */

const newValores = ['Toquio', 'Montreal', 'Lisboa', 'Papibaquigrafo', 1,2,4,6,8,10,11,13,15,20];
let filtro = newValores.filter (function(x){
    return x.array.forEach(element => {
        
    });
});