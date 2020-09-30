// ex 1 - interpretação

// // RESPOSTA:
// o código testa os números pares e ímpares. Se for um número par, ele vai passar no teste pq o resto da divisão por 2 vai ser 0
// Se for um número ímpar, ele não vai passar no teste

//  ex 2 - interpretação

// // RESPOSTA
// O código serve para ver o preço das frutas laranja, maçã, uva e pêra
// se o valor da fruta for Maçã, vai aparecer no console "O preço da fruta maçã é R$2.25"
// se retirar o break do pêra, o preço da pêra vai ser igual o valor de default

// ex 3 - interpretação

// // RESPOSTA
// a primeira linha pede pro usuário digitar um número e transforma o que ele digitou em número
// se for digitado 10, vai aparecer "Esse número passou no teste", se fosse -10, nao acontece nada.
// sim, haverá. a variavel mensagem foi definida dentro do escopo do if e por isso ela nao pode ter um console.log fora

// // // // // // 

// ex 4 - escrita
// const idade = Number(prompt("Digite sua idade:"))

// if (idade >= 18) {
//     console.log("Eba! Você pode dirigir")
// }
// else {
//     console.log("Ops, você não pode dirigir!")
// }

// ex 5 - escrita
// const turno = prompt("Digite M para matutino, V para vespertino ou N para Noturno").toUpperCase()

// if (turno === 'M') {
//     console.log("Bom dia!")
// }
// else if (turno === 'V') {
//     console.log("Boa tarde!")
// }
// else if (turno === 'N') {
//     console.log("Boa noite!")
// }
// else {
//     console.log("Não entendi, tente novamente!")
// }

// ex 6 - escrita
// let turno = prompt("Digite M para matutino, V para vespertino ou N para Noturno").toUpperCase()

// switch(turno){ 
//     case 'M':
//         console.log("Bom dia!")
//         break;
//     case 'V':
//         console.log("Boa tarde!")
//         break;
//     case 'N':
//         console.log("Boa noite!")
//         break;
//     default:
//         console.log("Não entendi, tente novamente!")
//         break;
// }

// ex 7 - escrita & desafio 1

// let filme = prompt("Qual o gênero do filme que vocês vão assistir?").toLowerCase()
// let preco = Number(prompt("Qual o preço do ingresso? Digite só o número!"))

// if (filme === 'fantasia' && preco <= 15) {
//     let snack = prompt("Qual o snack você quer comprar?")
//     console.log("Tenha um bom filme :)")
//     console.log(`... com ${snack}`)
// }
// else {
//     console.log("Puts, não vai rolar... Escolha outro filme!")
// }

// desafio 2
// let nome = prompt("Digite seu nome completo")
// let tipo = prompt("Qual o tipo de jogo? Digite IN para internacional e DO para doméstico").toLowerCase()
// let etapaJogo = prompt("Qual a etapa do jogo? Digite SF para semi-final, DT para terceiro lugar e FI para final").toLowerCase()
// let categoria = Number(prompt("Qual a categoria? Digite 1, 2, 3 ou 4"))
// let quantidade = Number(prompt("Digite a quantidade de ingressos"))

// let valorDoIngresso
// let valorTotal

// if ( etapaJogo === 'sf' ) {
//     etapaJogo = "Etapa Semi-final"
//     switch( categoria ) {
//         case 1:
//             valorDoIngresso = 1320
//             break;
//         case 2:
//             valorDoIngresso = 880
//             break;
//         case 3:
//             valorDoIngresso = 550
//             break;
//         case 4:
//             valorDoIngresso = 220
//             break;
//         default:
//             console.log("Essa categoria não existe")
//             break;
//     }
// }
// else if ( etapaJogo === 'dt' ) {
//     etapaJogo = "Decisão do Terceiro Lugar"
//     switch( categoria ){
//         case 1:
//             valorDoIngresso = 660
//             break;
//         case 2:
//             valorDoIngresso = 440
//             break;
//         case 3:
//             valorDoIngresso = 330
//             break;
//         case 4:
//             valorDoIngresso = 170
//             break;
//         default:
//             console.log("Essa categoria não existe")
//             break;

//     }
// }
// else if ( etapaJogo === 'fi' ) {
//     etapaJogo = "Etapa Final"
//     switch( categoria ){
//         case 1:
//             valorDoIngresso = 1980
//             break;
//         case 2:
//             valorDoIngresso = 1320
//             break;
//         case 3:
//             valorDoIngresso = 880
//             break;
//         case 4:
//             valorDoIngresso = 330
//             break;
//         default:
//             console.log("Essa categoria não existe")
//             break;
//     }
// }
// else {
//     etapaJogo = "Inválida"
// }


// if ( tipo === 'do' ) {
//     tipo = "Nacional"
// }
// else if ( tipo === 'in' ){
//     tipo = "Internacional"
//     valorDoIngresso = valorDoIngresso *4.1
// }
// else {
//     tipo = "Inválido"
// }

// valorTotal = valorDoIngresso * quantidade

// console.log("----Dados da Compra----")
// console.log(`Nome do cliente: ${nome}`)
// console.log(`Tipo de jogo: ${tipo}`)
// console.log(`Etapa do Jogo: ${etapaJogo}`)
// console.log(`Categoria: ${categoria}`)
// console.log(`Quantidade de Ingressos: ${quantidade} ingressos`)
// console.log("----Valores----")
// console.log(`Valor do ingresso: ${valorDoIngresso}`)
// console.log(`Valor total: ${valorTotal}`)