//Exercício 2

let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

function converterAMayusculas(peliculas){
    for (let x = 0; x <peliculas.length; x++)
    peliculas[x] = peliculas[x].toUpperCase()
    return peliculas;
  }
console.log(converterAMayusculas(peliculas))

//Exercício 2