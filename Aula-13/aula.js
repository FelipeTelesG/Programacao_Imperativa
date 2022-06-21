// let dados = [
//     {
//         "nome": "Rodigo"
//     },
//     {
//         name: "Rafael1"
//     }
// ]

let dados2 = {
    nome: "Felipe",
    sobrenome: "Teles",
    exibirNome: function() {
        console.log(`${this.nome} ${this.sobrenome}`);
        console.log(this.nome + ' ' + this.sobrenome);
    }
}

dados2.exibirNome(); //vai exibir Felipe Teles

function externa(sobrenome) {
    const teste = "Valor A";
}

console.log(teste)

// console.log( dados );

// function soma ( item ) {
//     dados.push( item );
// }

// console.log(dados);

//Json sempre tem que ser utilizada aspas duplas ( "" ) é mais utilizado para anotações.