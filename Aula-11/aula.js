function print(x){
    console.log("Hello "+x);
}

for (let aux=5; aux >= 1; aux--){

    print("Motherfucker");
}

for (let aux=1; aux >= 5; aux++) {
    console.log(aux+'- Olá for');
}

console.log('=========================');
for (let aux=0; aux <= 5; aux++) {
    console.log(aux+'- Olá for');
}

console.log('=========================');
let x = 2;
x = x + 1;
x++;

console.log(x);
let aux = 0;
console.log('=========================');
while( aux < 5 ){
    //console.log(aux +' - Olá while');
    if(aux == 5){
        print("while ");
    }
    aux++;
}

aux = 0;
do{
    console.log('Motherfucker do While');
    aux++;
}while( aux < 0 );

//----------------------------------------//----------------------------------------//----------------------------------------
//Repetir mensagem "Hello Word" utilizando o for 5x

for( let i = 1; i <= 5; i++) {
    console.log( i + ' - Hello My Friendy' );
}

// Contando numeros impares;

for( let i = 1; i <= 10; i++) {
    if( 1 % 2 == 0 ) {
        console.log( i );
    }
}
