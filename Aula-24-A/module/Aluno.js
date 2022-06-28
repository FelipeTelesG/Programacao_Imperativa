const Aluno = function(nome, faltas, notas){
    this.nomes = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function (  ) {
        let media = this.notas.reduce( function( acumulador , item ) {
            return acumulador + item;
        });
        media = media / this.notas.length;
        return media;
    },
    this.marcarFalta = function(){
        this.faltas++;
    }
}

// let al1 = new ( new Aluno("F.Teles", 0, [8, 7, 9]) );
// al1.marcarFalta();
// console.log( al1.faltas );

// module.exports = Aluno;