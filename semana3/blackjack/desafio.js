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
// MINHA CABEÇA TA FRITANDO E MEU NOTEBOOK TBM 

console.log("Bem vindo ao jogo de Blackjack!")

const inicioJogo = confirm('Quer iniciar uma nova rodada?')

let cartasUser = []
let pontosUser = []
let printCartasUser = ""
let printPontosUser = 0

let cartasPc = []
let pontosPc = []
let printCartasPc = ""
let printPontosPc = 0

if(inicioJogo) {
   // sorteio de cartas pro usuario sem ser duas A's
   for (let i=0; i < 2;) {
      let carta = comprarCarta()
      cartasUser.push(carta.texto)
      pontosUser.push(carta.valor)
      if ((cartasUser[0] === 'A') && (cartasUser[1] === 'A')) {
         i = i
      } else {
         i++
      }
   }
   
   for (let carta of cartasUser) {
      printCartasUser += (carta + " ")
   }

   // sorteio de cartas pro pc sem ser duas A's
   for (let i=0; i < 2;) {
      let carta = comprarCarta()
      cartasPc.push(carta.texto)
      pontosPc.push(carta.valor)
      if ((cartasPc[0] === 'A') && (cartasPc[1] === 'A')) {
         i = i
      } else {
         i++
      }
   }

   for (let carta of cartasPc) {
      printCartasPc += (carta + " ")
   }

   // pontuação de cada um
   for (let valor of pontosUser) {
      printPontosUser += valor
   }

   for (let valor of pontosPc) {
      printPontosPc += valor
   }

   //  console de cartas e pontuaçao & resultado final por enquanto 
   console.log(`Usuário - ${printCartasUser} - pontuação ${printPontosUser}`)
   console.log(`Computador - ${printCartasPc} - pontuação ${printPontosPc}`)

   if (pontosUser > pontosPc) {
      console.log('O usuário venceu!')
   } else if (pontosUser < pontosPc) {
      console.log('O computador venceu!') 
   } else if (pontosUser = pontosPc) {
      console.log('Empate!')
   }


}
else {
   console.log("O jogo acabou!")
}
