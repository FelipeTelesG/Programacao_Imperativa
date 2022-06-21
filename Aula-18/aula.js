// ------------------------------ EXERCÍCIO 1 e 2 ------------------------------ //

/*let parimpar = (x, y) => {
    for (let i = 1; i <= 100; i++) {
        if (i % x === 0 && i % y !== 0) {
            console.log(i + ' - Este número é impar' + '\n');
        } else if (i % y === 0 && i % x === 0) {
            console.log(i + ' - Este número é Par' + '\n');
        }
    }
    return '\n';
}

console.log(parimpar(1, 2))*/

// ------------------------------ EXERCÍCIO 3 ------------------------------ //

/*const valores = [1,2,3,4,5,6,7,8,9];

let soma = valores.reduce ( function(acumulador, valor){
    console.log ( acumulador , valor );
    return acumulador + valor;
} );

console.log ( soma );*/

// ------------------------------ EXERCÍCIO 4 ------------------------------ //

/*function newArray( num ){
    let array = [];
    
    for (let contador = 1; contador <= num; contador++) {
        array.push(contador);
    }
    return array;
}

console.log(newArray( 10 ));*/

// ------------------------------ EXERCÍCIO 5 ------------------------------ //

/*function split (str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        array.push(str[i]);
    }
    return array;
}

console.log(split("DigitalHouse"));*/

// ------------------------------ EXERCÍCIO 6 ------------------------------ //

/*const array6 = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

function moverZeros (array) {
    let [zeros, naoZeros] = [[], []]; 
    array.filter (element => element == 0 ? zeros.push(element) : naoZeros.push(element));
    return naoZeros.concat(zeros);
}

console.log(moverZeros(array6));*/

// ------------------------------ EXERCÍCIO 7 ------------------------------ //

/*const array7a = [1, 2, 3]
const array7b = ["o", "l", "á"]

function arrayHandler(array1, array2) {
    for (let i = 0; i < array1.length || i < array2.length; i++) {
        console.log (`Eu sou ${array1[i]} e eu sou ${array2[i]}`);
    }
};

arrayHandler(array7a, array7b);*/

// ------------------------------ EXERCÍCIO 8 ------------------------------ //

/*function arrayObjects (num) {
    let objetos = [];
    for (let i = 1; i <= num; i++) {
        objetos.push({valor: i});
    }
    return objetos;
}

console.log(arrayObjects(7));*/

// ------------------------------ EXERCÍCIO 9 ------------------------------ //


/*function arrayObjectsTwo(num, str) {
    let objetosDois = [];
    for (let i = 1; i <= num; i++) {
        objetosDois.push({[str] : i});
    }
    return objetosDois;
}

console.log(arrayObjectsTwo(7, 'tchau'))*/