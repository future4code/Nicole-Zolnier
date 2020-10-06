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
// SERIO EU NEM SEI MAIS O QUE TA ACONTECENDO AQUI

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

if (inicioJogo) {
   // sorteio de cartas pro usuario sem ser duas A's
   for (let i = 0; i < 2;) {
      let carta = comprarCarta()
      cartasUser.push(carta.texto)
      pontosUser.push(carta.valor)
      if ((pontosUser[0] === 11) && (pontosUser[1] === 11)) {
         i = i
      } else {
         i++
      }
   }

   for (let carta of cartasUser) {
      printCartasUser += (carta + " ")
   }

   // sorteio de cartas pro pc sem ser duas A's
   for (let i = 0; i < 2;) {
      let carta = comprarCarta()
      cartasPc.push(carta.texto)
      pontosPc.push(carta.valor)
      if ((pontosPc[0] === 11) && (pontosPc[1] === 11)) {
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

   // depois de sortear as cartas, vai analisar se um deles ganhou, se nao continua o caos
   if (printPontosUser === 21) {
      console.log(`Suas cartas são ${printCartasUser} e as do computador ${printCartasPc}`)
      console.log("A pontuação do usuário é", printPontosUser, "e a do computador é", printPontosPc)
      console.log("O usuário ganhou!")
   }

   else if (printPontosPc === 21) {
      console.log(`Suas cartas são ${printCartasUser} e as do computador ${printCartasPc}`)
      console.log("A pontuação do usuário é", printPontosUser, "e a do computador é", printPontosPc)
      console.log("O computador ganhou!")
   }

   else {
      let continuarJogo = true
      while (continuarJogo) {

         let comprarMais = confirm(`Suas cartas são ${printCartasUser}. A carta revelada do computador é ${printCartasPc[0]}${printCartasPc[1]}
         Deseja comprar mais uma carta?`)

         if (comprarMais && printPontosUser < 21) {
            let carta = comprarCarta()
            cartasUser.push(carta.texto)
            pontosUser.push(carta.valor)
            printCartasUser += (carta.texto + " ")
            printPontosUser += carta.valor
         }
         else {
            comprarMais = false
            continuarJogo = false
            let vezDoPc = true

            while (vezDoPc) {
               if ((printPontosPc < printPontosUser) && (printPontosPc < 21)) {
                  let carta = comprarCarta()
                  cartasPc.push(carta.texto)
                  pontosPc.push(carta.valor)
                  printCartasPc += (carta.texto + " ")
                  printPontosPc += carta.valor
               }
               else {
                  vezDoPc = false
                  console.log(`Suas cartas são ${printCartasUser} e as do computador ${printCartasPc}`)
                  console.log("A pontuação do usuário é", printPontosUser, "e a do computador é", printPontosPc)

                  
                  if ((printPontosUser > printPontosPc) && (printCartasUser <= 21)) {
                     console.log("O usuário ganhou!")
                  }
                  else if ((printPontosUser < printPontosPc) && (printCartasPc <= 21)) {
                     console.log("O computador ganhou!")
                  }
                  else if ((printPontosPc === printPontosUser)) {
                     console.log("Empate!")
                  }
                  else if((printPontosUser > 21 && printPontosPc > 21)) {
                     console.log("Os dois perderam!")
                  }
                  else if((printPontosUser < printPontosPc) && (printPontosPc > 21)) {
                     console.log("O usuário ganhou!")
                  }
                  else if((printPontosUser > printPontosPc) && (printPontosPc < 21)) {
                     console.log("O computador ganhou!")
                  }
                  else if((printPontosPc < 21) && (printPontosUser < 21) && (printPontosUser > printPontosPc)){
                     console.log("O usuário ganhou!")
                  }
                  else if((printPontosPc < 21) && (printPontosUser < 21) && (printPontosPc > printPontosUser)){
                     console.log("O computador ganhou!")
                  }
                  else if (printPontosUser = 21) {
                     console.log("O usuário ganhou!")
                  }
                  else if (printPontosPc = 21) {
                     console.log("O computador ganhou!")
                  }
               }
            }

         }
      }

   }

}
else {
   console.log("O jogo acabou!")
}
