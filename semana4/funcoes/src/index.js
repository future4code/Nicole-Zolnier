// ---- ex 1 - interpretação ----

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// ---- RESPOSTA:
// vai ser impresso 10 e 50 porque a função está multiplicanado os valores por 5
// se retirar os console.logs, não vai aparecer nada no console

// ---- ex 2 - interpretação ----

// let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// ---- RESPOSTA:
// vai ser impresso dois consoles, um com o nome Darvas e o outro com o nome Caio, porque o for só tá pedindo <2 em vez da length do array
// vai aparecer dois consoles dnv só que agora um vai ser Amanda e o outro Caio

// ---- ex 3 - interpretação ----

// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

// const resultado = metodo([1, 2, 3, 4])
// console.log(resultado)

// ---- RESPOSTA:
// o código pega os números pares do array inicial e mutiplica eles por eles mesmos dai insere em um novo array chamado array.final
// um nome melhor para essa função poderia ser multiplicarPares

// ---- ex 4 - escrita ----

// -- a
// function aboutMe () {
//     console.log("Meu nome é Nicole, tenho 18 anos, moro em Curitiba e sou estudante")
// }
// aboutMe()

// -- b
// function aboutMe (name, age, address, student){
//     if (student){
//         student = "sou estudante"
//     }
//     else {
//         student= "não sou estudante"
//     }

//     console.log("Eu sou", name, "tenho", age, "sou de", address, "e" , student)
// }

// aboutMe("Nicole", 18, "Curitiba", false)

// ---- ex 5 - escrita ----

// -- a
// let addNumbers = (a, b) => {
//     return a+b
// }

// const result = addNumbers(4, 6)
// console.log(result)

// -- b
// let biggerNumber = (a, b) => {
//     const operation = a >= b
//     return operation
// }

// const result = biggerNumber(6, 4)
// console.log(result)

// -- c
// let message = (text) => {
//     for( let i = 0; i < 10; i++ ){
//         console.log(text)
//     }
// }

// message("Hello word!")

// ---- ex 6 - escrita ----

// -- a
// const numbersArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// let quantity = (array) => {
//     return array.length
// }

// let result = quantity(numbersArray)
// console.log(result)


// -- b
// let checkIfPair = (number) => {
//     if (number %  2 === 0){
//         return true
//     }
//     else {
//         return false
//     }
// }

// let result = checkIfPair(10)
// let result2 = checkIfPair(5)
// console.log(result)
// console.log(result2)

// -- c
// const numbersArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// let pairQuantity = (array) => {
//     let pairArray = []
//     for (let i = 0; i < array.length ;i++) {
//         if (array[i] %  2 === 0){
//             pairArray.push(array[i])
//         }
//     }
//     return pairArray.length
// }

// let result = pairQuantity(numbersArray)
// console.log(result)

// -- d
// const numbersArray = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// let checkIfPair = (number) => {
//         if (number %  2 === 0){
//             return true
//         }
//         else {
//             return false
//         }
//     }
// let countPairNumbers = (array) => {
//         let pairArray = []
//         for (let number of array){
//             if (checkIfPair(number)){
//                 pairArray.push(number)
//             }
//         }
//         return pairArray.length
//     }

// let finalResult = countPairNumbers(numbersArray)
// console.log(finalResult)