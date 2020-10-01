// ----- ex 1 interpretação -----

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// RESPOSTA:
// o código diz que enquanto a variavel i (que tem o valor de inicio 0) for menor que 5, é para somar a varivel valor
// (que tbm vale 0 no início) com a variavel i
// então o código vai ficar rodando, soma 0+0 depois 0+0+1, 0+0+1+2, e assim vai até chegar no 4 (que é o último numero menor que 5)
// o resultado dessa soma vai ser 10 e é esse 10 que vai aparecer impresso no console no final

// ----- ex 2 - interpretação -----

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// RESPOSTA:
// serão impressos os números da array lista que são maiores de 18
//  não seria suficiente, porque o for sempre mostra o elemento, mesmo com [] ele não mostra o indice
// só se usar um conceito não aprendido ainda com o indexOf mas mesmo assim não ia ficar muito bonito não kkkkk
// ou se vc criar um contador
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//  console.log(lista.indexOf(numero))
//  console.log(numero)
//  numero++
// }

// ----- desafio 1 - interpretacao -----
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// RESPOSTA:
// primeiro ele pergunta pro usuario digitar um numero de linhas
// dai seta a quantidadeAtual como 0
// e diz que enquanto quantidadeAtual ser menor que quantidadeTotal é para a linha ficar vazia
// dai no for seta mais uma variavel asteriscos com 0 e para os asteriscos forem menor que quantidadeAtual +1
// soma a linha + 0
// ou seja, o usuário digita um numero de linhas, digamos que seja 4
// o console vai dar primeiro 0 dai vai repetir o código
// depois vai ser 00 dai repetir 
// dai 000 e dai repetir
// dai 0000 e acabar ihuuu

// ----- ex 3 - escrita -----

// -- a --
// let arrayOriginal = [3, 4, 7, 8, 12, 13, 28, 34]

// for (let numero of arrayOriginal) {
//     console.log(numero)
// }

// -- b --
// let arrayOriginal = [3, 4, 7, 8, 12, 13, 28, 34]

// for (let numero of arrayOriginal) {
//     let dividido = numero/10
//     console.log(dividido)
// }

// -- c --
// let arrayOriginal = [3, 4, 7, 8, 12, 13, 28, 34]
// let arrayPar = []

// for (let numero of arrayOriginal) {
//     if (numero%2 === 0) {
//         arrayPar.push(numero)
//     }
    
// }
// console.log(arrayPar)

// -- d --
// let arrayOriginal = [3, 4, 7, 8, 12, 13, 28, 34]
// let i = 0

// for (let numero of arrayOriginal) {
//     let novoArray = (`O elemento do index ${i} é ${numero}`)
//     console.log(novoArray)

//     i++
// }

// -- e --
// let arrayOriginal = [3, 4, 7, 8, 12, 13, 28, 34]
// let valorMaximo = arrayOriginal[1]
// let valorMinimo = arrayOriginal[1]


// for (let numero of arrayOriginal ) {
    
//     if (valorMaximo < numero) {
//         valorMaximo = numero
//     }
//     else if (valorMinimo > numero){
//         valorMinimo = numero
//     }

// }

// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

// ----- desafio 2 -----

// let numeroEscolhido = Number(prompt("Escolha um número"))
// console.log("Vamos jogar")
// let numeroChute = Number((prompt("Chute um número")))
// console.log(`O numero chutado foi ${numeroChute}`)

// let tentativa = 1

// while (numeroEscolhido !== numeroChute) {

//     if(numeroEscolhido > numeroChute) {    
//         console.log("Errou. O número escolhido é maior")
        
//     }
//     else if(numeroEscolhido < numeroChute) {
//         console.log("Errou. O número escolhido é menor")
        
//     }

//     tentativa++

//     numeroChute = Number((prompt("Chute um número")))
//     console.log(`O numero chutado foi ${numeroChute}`)
    
// }

// console.log("Acertou!!!")
// console.log(`O número de tentativas foi ${tentativa}`)


// ----- desafio 3 -----

// let numeroEscolhido = Math.floor(Math.random( ) * 100);
// console.log("Vamos jogar")
// let numeroChute = Number((prompt("Chute um número")))
// console.log(`O numero chutado foi ${numeroChute}`)

// let tentativa = 1

// while (numeroEscolhido !== numeroChute) {

//     if(numeroEscolhido > numeroChute) {    
//         console.log("Errrrrrrrou. O número escolhido é maior")
        
//     }
//     else if(numeroEscolhido < numeroChute) {
//         console.log("Errou. O número escolhido é menor")
        
//     }

//     tentativa++

//     numeroChute = Number((prompt("Chute de novo um número")))
//     console.log(`O numero chutado foi ${numeroChute}`)
    
// }

// console.log("Acertou!!")
// console.log(`O número de tentativas foi ${tentativa}`)
