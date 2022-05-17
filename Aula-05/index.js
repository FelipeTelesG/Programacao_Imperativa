// 1- Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function converterPolegadas(num) {
    return num * 2.54;
};

let polegadas = 590;

console.log(`-------------------------------------`);
console.log(`Convertendo polegadas em centímetros:`);
console.log(`${polegadas} polegadas = ${converterPolegadas(polegadas)} centrímetros`);
console.log(`-------------------------------------`);

// 2- Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converterUrl(texto) {
    return `http://${texto.toLowerCase().replaceAll(/\s/g, '')}.com.br`
};

let textoEx2 = 'DIGITAL HOUSE';

console.log(`Convertendo texto digitado em URL:`);
console.log(`Texto digitado: ${textoEx2}`);
console.log(`URL: ${converterUrl(textoEx2)}`);
console.log(`-------------------------------------`);

// 3- Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! )

function InserirExclamacao(texto) {
    return `${texto}!`;
};

let textoEx3 = 'JavaScript é muito legal';

console.log(`${InserirExclamacao(textoEx3)}`);