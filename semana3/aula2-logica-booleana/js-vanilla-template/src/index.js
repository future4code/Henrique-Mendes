//1
//a. false
//b. false
//c. true
//d. false
//e. boolean

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) //3 e 4

array[i+1] = 19 //4=19
const valor = array[i+6] //valor=9
console.log('V. ', array[i+1], " e ", valor)//19 e 9

i+=1 //i=1
array[i] = array[i-1] //3
console.log('VI. ', array[i])//3

i = array.length - 1//i=10
array[i] = array[i-3]//i=7
const resultadoC = array[i]%array[1]//resultadoC = 7%3 = 1
console.log('VII. ', resultadoC)//1

//2
//I. undefined
//II. null
//III. 11
//IV. 3 e 4
//V. 19 e 9
//VI. 3
//VII. 1


/*
a. O que é `array` e como se declara em `JS`?
Array é um objeto de acesso e armazenamento de mais de uma informação ao mesmo tempo.
let || const array=[]

b. Qual o index inicial de um `array`?
Index inicial é 0

c. Como se determinar o tamanho do `array`?
array.lenght

d. Indique todas as mensagens impressas no console.

*/

//Escrita
//1
let grausFahrenheit
let grausKelvin
let grausCelcius


//a
grausFahrenheit = 77
const kelvin = (grausFahrenheit-32)*5/9+273.15
console.log('1 a. '+kelvin+"K")

//b
grausCelcius = 80
const fahrenheit = (grausCelcius)*9/5+32
console.log('1 b '+fahrenheit+"°F")


//c + d
grausCelcius = 30
console.log("1 c1. "+fahrenheit+"°F")
grausFahrenheit = (grausCelcius)*9/5+32
console.log("1 c2. "+kelvin+"K")

//d
grausCelcius = prompt ("Graus Celcius")
console.log("1 c1. "+fahrenheit+"°F")
console.log("1 c2. "+kelvin+"K")

//2

const table = prompt('Is the book on the table?')
console.log('O livro, '+table+', esta sobre a mesa')

const idade = prompt("Qual sua idade?")
console.log(idade+" é o meu numero da sorte")

const hotel = prompt ("Hotel?")
console.log(hotel+' nao é kayke')

const idioma = prompt ('Quais idiomas vc fala?')
console.log('eu tb falo '+idioma)

const nome = prompt('e qual seu nome?')
console.log('Bem-vindo '+nome)

//3

const qwh = 0.05
let consumo = 280
console.log('3a. R$'+qwh*consumo)

let desconto = 15
console.log((qwh*consumo)*(1-desconto/100))

//Desafio
//a
const lbParaKg = 0.453592
let lb = 20
console.log(lb+'lb equivalem a '+ lb*lbParaKg+'kg')

//b
const ozParaKg = 0.0283495
let oz = 10.5
console.log(oz+'oz equivalem a '+ oz*ozParaKg+'kg')

//c
const miParaM = 1609.34
let mi = 100
console.log(mi+'mi equivalem a '+ mi*miParaM+'m')

//d
const ftParaM = 0.3048
let ft = 50
console.log(ft+'ft equivalem a '+ ft*ftParaM+'m')

//e
const galParaL = 3.78541
let gal = 103.56
console.log(gal+'gal equivalem a '+ gal*galParaL+'l')

//f
const xicParaL = 0.25
let xic = 450
console.log(xic+'xic equivalem a '+xic*xicParaL+'l')

//g
xic = prompt ('Quantidade de xic para l')
console.log(xic+'xic equivalem a '+xic*xicParaL+'l')