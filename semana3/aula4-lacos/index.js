// --------- 1 ---------

// O código soma todos os numeros abaixo de 15, começanco no 0
// Resultado 105

/*let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
*/

// --------- 2 ---------

//a. O comando .push aqui cria uma nova lista em uma Array vazia, selecionando apenas os itens diviciveis por 5 da Array lista

//b. [10, 15, 25, 30]

//c. 3 - [12, 15, 18, 21, 27, 30]
//c. 4 - [12]

// --------- 2 Desafio ---------

/*
0
00
000
0000
*/

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}


// --------- 3 ---------

const original = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a.

let maior = 0
let menor = 999999

for(let i of original){
    if(i > maior){
        maior = i
    }
}
for(let i of original){
    if(i < menor){
        menor = i
    }
}
console.log('O maior número é', maior, 'e o menor é', menor)

//b.

let array10 = []

for(let i of original){
    if(i%10 === 0){
        array10.push(i)
    }
}
console.log(array10)

//c.

let arrayPar = []

for(let i of original){
    if(i%2 === 0){
        arrayPar.push(i)
    }
}
console.log(arrayPar)

//d.

for(let i of original){
    console.log('O elemento do índex ', original.indexOf(i), 'é ', i)
}

//--------- Desafio ---------

const nEscolhido = Number(prompt('Escolha um número'))
if (nEscolhido !== ''){
    console.log('Vamos jogar!')
}
let nChutado = Number(prompt('Chute um número'))
if (nChutado !== ''){
    console.log('O número chutado foi:', nChutado)
}

while (nChutado !== nEscolhido){
    if (nChutado > nEscolhido){
        console.log('Errou. O número escolhido é menor')
    } else{
        console.log('Errou. O número escolhido é maior')
    }
    nChutado = Number(prompt('Chute um número'))
        if (nChutado !== ''){
        console.log('O número chutado foi:', nChutado)
}