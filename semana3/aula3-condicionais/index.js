//1

/* O programa verifica se o numero do usuario é par ou impar.
O código transforma um númro digitado do usuario para Number
e faz um teste, caso ele seja divisivel por 2 é apresentado a
mensagem "Passou no teste", caso contrario "Não passou no teste".
Se o número for par, mensagem passou, caso impar, mensagem não passou.
*/

//2

//a. O código serve para apresentar o preço da fruta digitada pelo usuário.

//b. O preço da  fruta Maçã  é  R$  2,25

//c. R$24.55 banana = 5 do default

//d. O preço da fruta  Pêra  é  R$  5

//3

/* O terminal ira apresentar um erro por falta de definição
da variavel "mensagem", porque ela só existe dentro do escopo
do "if" inicial if(numero1 > 0 && numero2 > 0).
Caso o comando console estive dentro do escopo do IF, então
a mensagem seria "Número 1 é menor ou igual ao 2!"
*/

//4

const n1 = prompt (Number('Digite um número'))
const n2 = prompt (Number('Digite outro número'))
const n3 = prompt (Number('Digite novamente outro número'))

//a.
if(n1>n2){
  console.log(n1, n2)}
  else{
    (n1<n2)
    console.log(n2, n1)
  }

//b.

if(n1>n2 && n1>n3){
  let nPrimeiro = n1
} else if(n1>n2 && n1<n3){
  let nSegundo = n1
} else if(n1<n2 && n1<n3){
  let nTerceiro = n1
} else if(n2>n1 && n2>n3){
  let nPrimeiro = n2
} else if(n2>n1 && n2<n3){
  let nSegundo = n2
} else if(n2<n1 && n2<n3){
  let nTerceiro = n2
} else if(n3>n2 && n3>n1){
  let nPrimeiro = n3  
} else if(n3>n2 && n3<n1){
  let nSegundo = n3
} else if(n3<n2 && n3<n1){
  let nTerceiro = n3  
}
console.log(nTerceiro, nSegundo, nPrimeiro)

//c