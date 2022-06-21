const valores = [1,2,3,4,5,6,7,8,9];

/*console.log( valores[0] );

for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]*2);
}*/


/*let tabuada = valores.map(  function(x){
    return x+' - presente';
    //console.log(element * 2);
});

console.log ( tabuada );
console.log ( valores );*/

let newValores = valores.filter( function(y){
    return y % 2 == 0;
} );

console.log ( newValores );

let soma = newValores.reduce ( function(acumulador, valor){
    console.log ( acumulador , valor );
    return acumulador + valor;
} );

console.log ( soma );

valores.forEach( function(elemento){
    console.log ( elemento+ " * 2 = "+ elemento * 2 );
} );

let objCarro = {
    rodas : 4,
    andar : function (){
        return 'Carro andando';
    }
}

console.log (objCarro.andar())