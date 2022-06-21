let nome = "    Felipe, o grande Teles  ";
let listaNome = ['Felipe', 'Ricardo', 'Pedro'];
let verdade = true; // Como sabes, true é do tipo booleano

//console.log ( nome[0] ); // O número de contagem sempre começa do zero. E a partir dele as seguintes continuidades
//console.log ( nome.length ); //imprime a quantidade de casas (letras na strem)
//console.log ( lista.length ); //Indica quantidade (números)
//console.log ( lista ); //Printa o que foi solicitado na let Lista
//console.log ( verdade.length ); //Não funciona se ele não é do tipo String ( "" )

// ============================== // ============================== // ============================== //

//console.log( nome.indexOf('Teles') ); // Ele mostra a contagem a partir da inicial zero até a String solicitada, no Caso (Teles) e mostra o número na qual inicia.

// ============================== // ============================== // ============================== //

//console.log ( nome.slice(7, 16) ); // Essa função faz com que o terminal mostre somente da inicial do número solcitado (7) até o final do número solicitado (12).
//console.log ( nome.slice(-7) ); // Quando colocado como negativo, ele começa do final da frase para o começo da frase.
//console.log ( nome.trim( ) ); // Esta função remove os espaços do começo ou final da frase.
//nome = nome.trim( );
//console.log ( nome.split( " " ) ) //Ele vai fatear nossa string com separadores
//console.log ( nome.replace( "Felipe", "Marcos" ) ); // Ele troca o nome da String pela solicitada.

// ============================== // ARRAYS // ============================== //

console.log ( listaNome ); // Apenas mostra o que está na string Nome
console.log ( listaNome.length ); // Ele retorna a quantidade de itens.
console.log ( listaNome[1] ); // Ele retorna a posição da casa de cada item.
console.log ( listaNome.push( "Pedro" ) ); // Ele empurra/adiciona um nome para o final
console.log ( listaNome ); // Apenas mostra o que está na string Nome
console.log ( listaNome.pop() ); // Elimina o último elemento
console.log ( listaNome.shift() ); // Elimina o primeiro elemento
console.log ( listaNome );
console.log ( listaNome.unshift( "Daniela" ) ); // Adiciona para o começo do elemento
console.log ( listaNome );
console.log ( listaNome.join(" - ") ); // É um separador