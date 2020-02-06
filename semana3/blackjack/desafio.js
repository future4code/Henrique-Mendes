import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao jogo de Blackjack!')

if(confirm('Quer iniciar uma nova rodada?')){
   const carta1Jogador = comprarCarta()
   const carta2Jogador = comprarCarta()
   const carta1Pc = comprarCarta()
   const carta2Pc = comprarCarta()
   let somaJogador = carta1Jogador.valor + carta2Jogador.valor
   let somaPC = carta1Pc.valor + carta2Pc.valor
   let resultadoJogador = []
   let resultadoPc = []
   
   // ----- 8 ------
   while(carta1Jogador.valor === 11 && carta2Jogador.valor === 11){
      console.log('Nova mao!')
      const carta1Jogador = comprarCarta()
      const carta2Jogador = comprarCarta()
   }
   
   // ---- 9 ------

   if(confirm('Suas cartas são '+ carta1Jogador.texto +''+ carta2Jogador.texto + 'A carta revelada do computador é ' + carta1Pc.texto + ' Deseja comprar mais uma carta?')){
      const carta3 = comprarCarta
    }
    else{
       console.log('Usuário - cartas: ', (carta1Jogador.valor+carta1Jogador.texto), (carta2Jogador.valor+carta2Jogador.texto), '- pontuação', somaJogador)
       console.log('Pc - cartas: ', (carta1Pc.valor+carta1Pc.texto), (carta2Pc.valor+carta2Pc.texto), '- pontuação', somaPC)
          if(somaJogador > somaPC){
      console.log('O usuário ganhou!')
      }else if(somaPC > somaJogador){
      console.log('O PC ganhou!')
      }else if(somaJogador = somaPC){
      console.log('Empate!')   
    }  

   }
} else{
   console.log('O jogo acabou')
}