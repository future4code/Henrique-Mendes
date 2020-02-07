// ------- Exercícios de interpretação de código -------
//  ---------------------- 1 ---------------------- 
/* 
Uma função que converte o valor da moeda de Dolar para Real.
O usuario informa a cotação pelo prompt e a função multiplica a cotação pelo valor do parametro da função.
No exemplo será 100*cotação informada e a função ira retornar R$ resultado
Visualização do console:
promt: "Informe o valor da cotação do Dólar"
*/

//  ---------------------- 2 ---------------------- 
/* 
A função calcula o retorno do investimento usando 2 parametros (string e numerico).
Primeiro é criado uma variavel para armazenar o montante final (valorAposInvestimento)
Com a estrutura switch, a função testa a combinação do primeiro parametro (string) com as combinações possiveis na ordem escrita,
parando o teste caso a condição seja alcançada. Em caso negativo, seja imetido um alert de tipo de investimento incorreto.
Um vez a condição satisfeita, a função ira fazer a formula escrita e retornar o novo valor da variavel do montante final (valorAposInvestimento).
Visualização do console:
165
TIPO DE INVESTIMENTO INFORMADO INCORRETO!
*/

//  ---------------------- 3 ---------------------- 
/*
 Com o comando for of, será percorrido toda a extensão da array numeros
Se o valor do elemento for par, então sera colocado no final da array1, caso contrario sera colocado no final da array2.
Visualização do console:
Quantidade total de números, 14
6
8
*/

//  ---------------------- 4 ----------------------
/* 
Com o for of, na array numeros, o sistema ira ler todos os valores dos indeces dessa array.
O primeiro if ira testar se algum valor é menor que o let numero1 = infinito, e se for então ele sera o novo valor do numero1.
O segundo if testa se o ha algum valor acima de 0, caso haja, então o novo valor da let numero2 sera o valor desse elemento.
Visualização do console:
-10
1590
*/

//  ---------------------- Exercícios de Lógica de Programação ---------------------- 
//  ---------------------- 1 ----------------------
/* 
É possivel correr uma lista coms os seguintes comandos:
while (){
    (let i < array.length)
}
switch case (){

}
for (let i = 0; i < array.length; i++ ){

}
for of (i of array){

}

const arrayTeste = [0, 1, 2, 3, 4]

for(i of arrayTeste){
    console.log(i)
}
*/

//  ---------------------- 2 ----------------------
/*
a. False
b. False
c. True
d. True
e. True
*/

//  ---------------------- 3 ----------------------
/*
let quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}
*/

//  ---------------------- 4 ----------------------
/*
function tipoTriangulo (a, b, c){
    if (a === b && a === c){
        console.log('Equilatero')
    }
    if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !==a)){
        console.log('Isosceles')
    }
    if (a !==b && a!==c && b !== c){
        console.log('Escaleno')
    }
}
*/
//  ---------------------- 5 ----------------------
/*
function logica5 (a, b){
    if (a > b){        
        console.log( a, 'maior que ', b)
    } else {        
        console.log( a, 'menor que ', b)
    }
    if (a % b === 0){
        console.log(a, ' é divisivel por ', b)
    } else {
        console.log(a, 'não é divisivel por ', b)
    }
    if (b % a === 0){
        console.log(b, ' é divisivel por ', a)
    } else {
        console.log(b, 'não é divisivel por ', a)
    }
    if (a > b){
        console.log('A diferença entre eles é ', (a-b))
    } else {
        console.log('A diferença entre eles é ', (b-a))
    }
}

console.log(logica5(5,10))
*/

//  ---------------------- Exercícios de Funções ---------------------- 
//  ---------------------- 1 ----------------------
//1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função.
/*
function funcao1 (array){
    array.sort()
    console.log(array[array.length-2], ' é o segundo maior e o segundo menor é ', array[1])
}
const arrayFuncao = [5, 12, 1, 35, 511, 10]

console.log(funcao1(arrayFuncao))
*/

//  ---------------------- 2 ----------------------
//2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.
/*
let oiF4 = function(){
    alert('Hello Future4')
}

console.log(oiF4())
*/

//  ---------------------- Exercícios de Objetos ---------------------- 
//  ---------------------- 1 ----------------------
//  ---------------------- 2 ----------------------
//  ---------------------- 3 ----------------------
//  ---------------------- 4 ----------------------