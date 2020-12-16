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

// ---- ex 3 - ordernar menor para maior / ordernar maior menor
/* const numbers = [3, 27, 12]

const sortAscending = (array) => {
    return array.sort(function(a, b){return a-b})
}

const sortDescending = (array) => {
    return array.sort(function(a, b){return b-a})
}

console.log(sortAscending(numbers))
console.log(sortDescending(numbers)) */

// ---- ex 4 - ordernar menor para maior + alert no maior
/* const numbers = [3, 27, 12]

const sortAscendingAlert = (array) => {
    let highest = 0
    for (let number of array) {
        if (number > highest) {
            highest = number
        }
    }
    alert(highest)
    return array.sort(function(a, b){return a-b})
}

console.log(sortAscendingAlert(numbers)) */

// ---- ex 5 - checar se é par ou divisivel por 3 ou os dois
/* const evenThree = () => {
    for(let i = 0; i < 30; i++){
        if(i%2 === 0 && i%3 === 0){
            console.log(`${i} é par e divisivel por 3`)
        } else if (i%3 === 0){
            console.log(`${i} é divisivel por 3`)
        } else if(i%2 === 0){
            console.log(`${i} é par`)
        } else {
            console.log(`${i} é um numero primo`)
        }
    }
}

evenThree() */

// ---- ex 6 - asteriscos
/* const pattern = () => {
    let i = 0
    let total = 5
    while (i < total) {
        let line = ""
        for (let asterisk = 0; asterisk < i + 1; asterisk++) {
            line += "*"
        }
        console.log(line)
        i++
    }
}

pattern() */