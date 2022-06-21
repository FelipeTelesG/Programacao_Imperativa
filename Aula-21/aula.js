//----------CRIADO----------//

// CRIE UM METODO CONSTRUTOR ALUNO COM A PROPRIEDADES :
// NOME
// SEXO
// ID
// NOTAS
// TURMA

//----------CRIADO----------//


// DEPOIS CRIE UM ARRAY LISTA DE ALUNOS E CRIE UM OBJETO POR ALUNO

//----------CRIADO----------//

// E APLIQUE OS EXERCICIOS DE MEDIA DAS AULAS PASSADAS 

//----------CRIADO----------//
// MEDIA TOTAL DE NOTAS 

// MEDIA DE ALUNOS HOMENS E MULHERES

function Aluno( nome, sexo, id, notas, turma ){
    this.nome = nome;
    this.sexo = sexo;
    this.id = id;
    this.notas = notas;
    this.turma = turma;
    this.media = function(){
        let media = this.notas.reduce( function(acumulador, item){
            //console.log(acumulador, item)
            return acumulador + item;
        } );
        media = media / this.notas.length;
        return media.toFixed(2);
    }
}

let listaAlunos = [];
listaAlunos.push( new Aluno( "Teles", "M", "10", [ 7, 8, 9, 10 ], 3 ) );
listaAlunos.push( new Aluno( "Marcos", "M", "10", [ 7, 8, 9, 10 ], 3 ) );
listaAlunos.push( new Aluno( "Patrick", "M", "10", [ 7, 8, 9, 10 ], 3));
listaAlunos.push( new Aluno( "Diego", "M", "10", [ 7, 8, 9, 10 ], 3));
listaAlunos.push( new Aluno( "Diogo", "M", "10", [ 7, 8, 9, 10 ], 3));
listaAlunos.push( new Aluno( "Cauê", "M", "10", [ 7, 8, 9, 10 ], 3));
listaAlunos.push( new Aluno( "Rafael", "M", "10", [ 7, 8, 9, 10 ], 3));
listaAlunos.push( new Aluno( "Josi", "F", "10", [ 7, 8, 9, 10 ], 3));
listaAlunos.push( new Aluno( "Valquiria", "F", "10", [ 7, 8, 9, 10 ], 3));


console.log( listaAlunos[2].media() );

function mediaTotal (array) {
    let arrayMedias = array.map(element => element.media());
    return arrayMedias.reduce((total, item) => total + item) / arrayMedias.length;
}

console.log(`A média total dos alunos é: ${mediaTotal(alunos).toFixed(2)}.`);

// MEDIA DE ALUNOS HOMENS E MULHERES
function mediaHomensMulheres (array) {
    let arrayHomens = [];
    let arrayMulheres = [];
    array.filter(element => element.sexo == "Masculino" ? arrayHomens.push(element.media()) : arrayMulheres.push(element.media()));
    let mediaHomens = arrayHomens.reduce((total, item) => total + item) / arrayHomens.length;
    let mediaMulheres = arrayMulheres.reduce((total, item) => total + item) / arrayMulheres.length;
    return `A média dos homens é igual a ${mediaHomens.toFixed(2)} e a das mulheres é igual a ${mediaMulheres.toFixed(2)}.`
}

console.log(mediaHomensMulheres(alunos));