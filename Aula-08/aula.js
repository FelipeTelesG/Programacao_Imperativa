/*------------------------EXCERCÍCIO 1------------------------//

function podeSubir(altura, vemAcompanhado){
    if( altura >= 1.40 && altura < 2.00 ){ //Altura entre 1.40 e menor que 2.00 Metros, retorne verdadeiro
        return "true";
    }else if( altura >= 1.20 && altura < 1.40 && vemAcompanhado ){ //Altura entre 1.20 e menor que 1.40 deve entrar acompanhado
        return true;
    }else{
        return false;
    }
}

console.log ( podeSubir(1.30, true) );*/

//------------------------EXCERCÍCIO 2------------------------//

function podeSubir(altura, vemAcompanhado){
    if( altura >= 1.40 && altura < 2.00 ){ //Altura entre 1.40 e menor que 2.00 Metros, retorne verdadeiro
        return "Acesso Autorizado";
    }else if( altura >= 1.20 && altura < 1.40 && vemAcompanhado ){ //Altura entre 1.20 e menor que 1.40 deve entrar acompanhado
        return "Acesso Nao Autorizado, traga um acompanhante";
    }else{
        return "Acesso Negado";
    }
}

console.log ( podeSubir(1.90, true) )

//------------------------FIM DE EXERCICIO------------------------//