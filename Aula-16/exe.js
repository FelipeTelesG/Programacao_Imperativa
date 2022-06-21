//===================================Exercício-01===================================//

/*let FizzBuzz = (x, y) => {
    for (let i = 1; i <= 100; i++) {
        if (i % x === 0 && i % y !== 0) {
            console.log(i + ' - Fizz' + '\n');
        } else if (i % y === 0 && i % x !== 0) {
            console.log(i + ' - Buzz' + '\n');
        } else if (i % y === 0 && i % x === 0) {
            console.log(i + ' - FizzBuzz' + '\n');
        }
    }
    return '\n';
}

console.log(FizzBuzz(1, 2))*/

//===================================Exercício-02===================================//


/* 

====================== Criar uma função que calcula o fatorial usando loop (for); ======================

function fatorial(x){ //VERSÃO 01
    let fatorial =1;
    for (let i = 1; i <=5; i++){
        fatorial *= i;
    }
    return fatorial;
}


console.log(fatorial(5));

function fatorial (x){  //VERSÃO 02
    let result=1;
    for(let i=x;i>1;i--){
        result *= i;
    }
    return result;
}
console.log(fatorial(5));
*/

//Recriar esta mesma função usando recursividade (sem o uso de for)

/*const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}

console.log(fatorial(5))*/