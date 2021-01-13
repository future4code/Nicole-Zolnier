// ex 1 - interpretação
//  const bool1 = true
//  const bool2 = false
//  const bool3 = !bool2

//  let resultado = bool1 && bool2 true / false = false
//  console.log("a. ", resultado)

//  resultado = bool1 && bool2 && bool3 true / false / false = false
//  console.log("b. ", resultado)

//  resultado = !resultado && (bool1 || bool1) true / true = true
//  console.log("c. ", resultado)

//  console.log("e. ", typeof resultado) boolean

// RESPOSTA:
// a. false
// b. false
// c. true
// e. boolean

// ex 2 - interpretação
//  let array
//  console.log('a. ', array) - undefined

//  array = null
//  console.log('b. ', array)  - null

//  array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 11 números
//  console.log('c. ', array.length) 11

//  let i = 0 -> 3
//  console.log('d. ', array[i]) 3

//  array[i+1] = 19
//  console.log('e. ', array)  4 -> 19

//  const valor = array[i+6]
//  console.log('f. ', valor) 9

// RESPOSTA
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// ex 1 - escrita

// let yourAge = prompt("Qual a sua idade?")
// let friendAge = prompt("Qual a idade do seu melhor amigo?")

// let answer = Number(yourAge) > Number(friendAge)

// console.log(`Sua idade é maior do que a do seu melhor amigo? ${answer}`)

// let difference = Number(yourAge) - Number(friendAge)

// console.log(`A diferença das idades é: ${difference}`)

// ex 2 - escrita

// let pair = prompt("Escreva um número ímpar")

// let remainder = Number(pair)%2
// console.log(`O resto da divisão é ${remainder}`)

// se for um número par, o resto é 0
// se for um número ímpar, o resto é 1

// ex 3 - escrita
// let array = []
// let listaDeTarefas = array

// let t1 = prompt("Escreva uma tarefa para hoje")
// let t2 = prompt("Escreva mais uma tarefa para hoje")
// let t3 = prompt("Escreva uma última tarefa para hoje")

// listaDeTarefas.push(t1)
// listaDeTarefas.push(t2)
// listaDeTarefas.push(t3)

// console.log(listaDeTarefas)

// let completado = prompt("Qual tarefa você completou? Escreva 0, 1 ou 2.")
// listaDeTarefas.splice(Number(completado), 1)
// console.log(listaDeTarefas)

// ex 4 - escrita
// let userName = prompt("Qual o seu nome?")
// let userEmail = prompt("Qual o seu email?")
// console.log("O e-mail" , userEmail , "foi cadastrado com sucesso. Seja bem-vinda(o)" , userName + "!")

//  // desafios //  //
// ex 1 

// let ftok = (( 77 -32)*5)/9 +273.15
// console.log("77°F é igual a" , ftok +  "K")

// let ctof = (80*9/5) + 32
// console.log("80°C é igual a", ctof +  "°F")

// let cetofa = (30*9/5) + 32
// let cetoke = 30 + 273.15
// console.log("30°C é igual a" , cetofa + "°F e" , cetoke + "K")

// let Ce = prompt("Digite uma temperatura em °C")
// let Fa = (Ce*9/5) + 32
// let Ke = Ce + 273.15
// console.log(Ce , "é igual a" , Fa + "°F e" , Ke + "K")

// ex 2

//  // para 280 da casa //  //
// let kWhouse = 280*0.05
// console.log("Numa residência com gasto de 280kWh, o valor é" , kWhouse , "reais")

// let discounthouse = kWhouse*(0.15)
// console.log("Numa residência com gasto de 280kWh, o desconto é" , discounthouse , "reais")

// let totalhouse = kWhouse - discounthouse
// console.log("Numa residência com gasto de 280kWh, o total a ser pago é" , totalhouse , "reais")

//  // geral //  //

// let spent = prompt("Quantos quilowatt-horas você consumiu? Digite em número e sem a unidade!")
// let value = spent*0.05
// console.log("Você terá que pagar" , value , "reais com base no seu consumo.")


// let discount = value*(0.15)
// console.log("Você terá um desconto de" , discount , "reais")

// let total = value - discount
// console.log("O total a ser pago é" , total , "reais!")

// ex 4

// let lb = prompt("Digite um valor em libra")
// let kg = lb / 2.205
// console.log(lb + "lb é igual a" , kg + "kg")

// let oz = prompt("Digite um valor em onça")
// let kg1 = oz / 35.274
// console.log(oz + "oz é igual a" , kg1 + "kg")

// let mil = prompt("Digite um valor em milhas")
// let me = mil * (1609)
// console.log(mil + "mi é igual a" , me + "m")

// let ft = prompt("Digite um valor em pés")
// let me2 = ft / 3.281
// console.log(ft + "ft é igual a" , me2 + "m")

// let gal = prompt("Digite um valor em galões")
// let li = gal * (4.546)
// console.log(gal + "gal é igual a" , li + "l")

// let xic = prompt("Digite um valor em xícaras")
// let lit = (xic*6) / 25
// console.log(xic , "xícaras é igual a" , lit + "l")