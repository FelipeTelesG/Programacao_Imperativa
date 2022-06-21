/*
1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que	 	 não	 serão	
    informados	valores	iguais)	e	escrever	o	maior	deles.
    
2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
    escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
    (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).
    
3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
    pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
    seguintes	mensagens:	
    ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
    ACESSO	NEGADO	caso	a	senha	seja	inválida.

4. As	maçãs	 custam	 R$	 0,30	 cada	 se	 forem	 compradas	menos	 do	 que	 uma	
    dúzia,	 e	 R$	 0,25	 se	 forem	 compradas	 pelo	 menos	 doze.	 Escreva	 um	
    programa	 que	 leia	 o	 número	 de	 maçãs	 compradas,	 calcule	 e	 escreva	 o	
    valor	total	da	compra.

5. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
    1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
    calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
    Fórmulas:	
    - para	homens:	(72.7	*	Altura)	– 58	
    - para	mulheres:	(62.1	*	Altura)	– 44.7	
*/

//------------------------EXCERCÍCIO 1------------------------//

function doisValores(x,y){
    if (x > y){
        return x;
    } else {
        return y;
    }
}

//------------------------EXCERCÍCIO 2------------------------//

function votacao(data){
    let ano = 2022;
    if(ano-data>=16 && ano-data<=76){
        return "Pode Votar";
    } else {
        return "Náo pode votar";
    }
}

//------------------------EXCERCÍCIO 3------------------------//

function senha(pass){
    if(pass===1234){
        return "ACESSO	PERMITIDO";
    } else {
        return "ACESSO NEGADO";
    }
}

//------------------------EXCERCÍCIO 4------------------------//

function vendas(quantidade){
    if (quantidade < 12){
        return `Valor total da compra: ` + (0.30 * quantidade).toFixed(2);
    } else {
        return `Valor total da compra: ` + (0.25 * quantidade).toFixed(2);
    }
}

//------------------------EXCERCÍCIO 5------------------------//

function pesoIdeal(Sexo,Altura){
    if (Sexo === 1){
        return `Mulher, Seu peso ideal: ` + ((62.1	*	Altura)	- 44.7).toFixed(2);
    } else {
        return `Homem, Seu peso ideal: ` + ((72.7	*	Altura)	- 58).toFixed(2);
    }
}

console.log(pesoIdeal(2,2.00))
//------------------------FIM DE EXERCICIO------------------------//