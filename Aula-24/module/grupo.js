//arquivo grupo.js//
let Grupo = {
    pessoas : [],
    maiorAltura : function(){
        return 'dentro do metodo';
    }, 
    menorAltura : function(){
        return 'dentro do metodo';
    },
    mediaAlturaMulheres : function(){
        let result = this.pessoas.filter( item => item.sexo == "F" );

        return 'dentro do metodo '+result;
    },
    qtdHomens : function(){
        // let result = this.pessoas.filter(function(item){
        //     return item.sexo == "M";
        // });
        let result = this.pessoas.filter( item => item.sexo == "M" );
        return 'Quantidade de Homens '+result.length;
    }
}

module.exports = Grupo;