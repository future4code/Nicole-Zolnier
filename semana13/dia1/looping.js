// ---- ex 1 - maior numero
/* const numbersArray = [1, 3, 9, 5 , 2, 7]
const highestNumber = (array) => {
    let highest = 0
    for (let number of array) {
        if (number > highest) {
            highest = number
        }
    }
    return `O maior numero é ${highest}`
}

console.log(highestNumber(numbersArray)) */

// ---- ex 2 - string mais longa de um array
/* const wordsArray = ["Casa", "Elefante", "Espelho", "Internacional"]

const getLongestWord = (array) => {
    let length = 0;
    let longestWord = null;
    for (let word of array) {
        if (length < word.length) {
            length = word.length;
            longestWord = word;
        }
    }
    return `A maior palavra é ${longestWord}`
}

console.log(getLongestWord(wordsArray))
 */

// ---- ex 3 - ordernar menor para maior
// const numbers = [3, 27, 12]

// const sortAscending = (array) => {
//     return array.sort(function(a, b){return a-b})
// }

// console.log(sortAscending(numbers))
