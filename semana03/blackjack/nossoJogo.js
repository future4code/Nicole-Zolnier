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


// const para cada carta
// console.log("Bem vindo ao jogo de Blackjack!")
// const inicioJogo = confirm('Quer iniciar uma nova rodada?')

// if(inicioJogo){

//    const carta1User = comprarCarta()
//    const carta2User = comprarCarta()
//    const carta1Pc = comprarCarta()
//    const carta2Pc = comprarCarta()

//    let pontosUser = carta1User.valor + carta2User.valor
//    let pontosPc = carta1Pc.valor + carta2Pc.valor

//    console.log(`Usuário - ${carta1User.texto} ${carta2User.texto} - pontuação ${pontosUser}`)
//    console.log(`Computador - ${carta1Pc.texto} ${carta2Pc.texto} - pontuação ${pontosPc}`)

//    if (pontosUser > pontosPc) {
//    console.log('O usuário venceu!')
//    } else if (pontosUser < pontosPc) {
//    console.log('O computador venceu!')    
//    } else if (pontosUser = pontosPc) {
//    console.log('Empate!')
//    }
// }


// else {
//    console.log('O jogo acabou')
// }


// array de cartas
console.log("Bem vindo ao jogo de Blackjack!")
const inicioJogo = confirm('Quer iniciar uma nova rodada?')

if(inicioJogo){
   //array de cartas para cada um 
   const cartasUser = [comprarCarta(), comprarCarta()]
   const cartasPc = [comprarCarta(), comprarCarta()]

   // setando pontuaçao e array de carta como string do usuario
   let pontosUser = 0
   let printCartasUser = ''

   for (let carta of cartasUser) {
      pontosUser += carta.valor
      printCartasUser += ` ${carta.texto}`
   }

   //  setando pontuaçao e array de carta como string do pc
   let pontosPc = 0
   let printCartasPc = ''

   for (let carta of cartasPc) {
      pontosPc += carta.valor
      printCartasPc += ` ${carta.texto}`
   }


   console.log(`Usuário - ${printCartasUser} - pontuação ${pontosUser}`)
   console.log(`Computador - ${printCartasPc} - pontuação ${pontosPc}`)

   if (pontosUser > pontosPc) {
      console.log('O usuário venceu!')
   } else if (pontosUser < pontosPc) {
      console.log('O computador venceu!') 
   } else if (pontosUser = pontosPc) {
      console.log('Empate!')
   }

}

else {
   console.log('O jogo acabou')
}


