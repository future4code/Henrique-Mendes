// ---------- 1 ----------
/*
const minhaFuncao = (quantidade) => {
    const array = []
    for(let i = 0; i < quantidade; i+=2) {
            for(let j = 0; j < i; j++) {
                array.push(j)
            }
    }
    return array
}
console.log(minhaFuncao(8))

a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
[]

b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
(6) [0, 1, 0, 1, 2, 3]

c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
*/

// ---------- 2 ----------

/*
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"));
*/
/*
a. Explicite quais são as saídas impressas no console
0
2
undefined

b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número,
 ao se chamar a função? Justifique sua resposta.
 O codigo iria funcionar normalmente.

 */

// ---------- 3 ----------

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }

// O código abaixo mostra uma função que recebe um array e devolve outro array.
// Explique rapidamente o que ela faz e sugira um nome melhor para ela!
// 
// R. A funcao cria um nova array que tera em cada posicao o valor duplo do elmento e uma posicao para o quadrado do elemento.
// Um novo melhor nome para funcao: fazDublicarfazQuadrado

// ---------- 4 ----------

//a. A função deve receber um número correspondente aos "anos humanos" 
//que um cachorro tem e calcular a "idade de cachorro" dele. Considere que 1 ano humano equivale a 7 anos de cachorro
//Para a entrada 4, deve devolver 28

function medirAnoCanino(n){
  return n*7
}
n = Number(prompt('Idade'))
console.log(medirAnoCanino(n))

//b.

function informacoes(NOME, IDADE, ENDEREÇO, ESTUDANTE){
    if (ESTUDANTE === 'SIM'){
    return 'SOU'
  }
  else{
    return = 'NAO SOU'
  }  
}

let 

// ---------- 5 ----------

function pertenceAnoSeculo (ano){
  if (ano<=1)
}

return O ano [ANO] pertence ao século [SÉCULO EM ALGARISMOS ROMANOS]

// ---------- 6 ----------

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function mostraComprimento(array){
  array.lenght
  return array.lenght
}