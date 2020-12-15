// substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

// ---- ex 1 - funcao que reverte um texto

/* const answer = prompt("Escreva algo").toLowerCase()

const reverseText = (string) => {
    return string.split("").reverse().join("")
}

console.log(answer)
console.log(reverseText(answer)) */

// ---- ex 2 - palindromo

/* const answer = prompt("Escreva uma palavra massa").toLowerCase()

const checkIfPalindrome = (string) => {
    const reverseString = string.split('').reverse().join('')

    if(reverseString === string){
        return `${string} é um palindromo`
    } else {
        return `${string} não é um palindromo`
    }
}

console.log(checkIfPalindrome(answer))  */

// ---- ex 3 - combinacoes string
/* const answer = prompt("Digite uma palavra maneira")
const getCombinations = (string) => {
    let stringArray = []
    for (i = 0; i < string.length; i++) {
        for (j = i + 1; j < string.length + 1; j++) {
            stringArray.push(string.slice(i, j));
        }
    }
    return stringArray.join(", ")
}
console.log(getCombinations(answer)) */


// ---- ex 4 - string em ordem alfabetica

/* const answer = prompt("Digite algo")

const sortString = (string) => {
    return string.split('').sort().join('');
}

console.log(sortString(answer))
 */

//  ---- ex 5 - letra inicial maiuscula
/* const answer = prompt("Escreva uma frase")

const uppercaseString = (string) => {
    let splitString = string.toLowerCase().split(' ');
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
}

console.log(uppercaseString(answer)) */

// ---- ex 6 - maior palavra
/* const sentence = prompt("Digite uma frase")

const getLongestWord = (string) => {
    let stringInArray = string.split(" ");
    let longest = 0;
    let longestWord = null;
    for (let word of stringInArray) {
        if (longest < word.length) {
            longest = word.length;
            longestWord = word;
        }
    }
    return `A maior palavra é ${longestWord}`
}

console.log(sentence)
console.log(getLongestWord(sentence)) */

// ---- ex 7 - contar vogals

/* const vowels = ["a", "e", "i", "o", "u"]
const word = prompt("Digite uma palavra")

const vowelCounter = (string) => {
    let counter = 0

    for (let letter of string.toLowerCase()){
        if (vowels.includes(letter)) {
           counter++
        }
    }
    const rightText = counter === 1 ? "vogal" : "vogais"

    return `${string} possui ${counter} ${rightText}`
}

console.log(vowelCounter(word)) */

// ---- ex 8 - segundo maior e menor
/* const numbersArray = [34, 21, 42, 13, -2, 3.14, 72, 64, -13, 450, 100]

const secondBest = (array) => {
    let lowest = Infinity
    let highest = 0
    let secondLowest = Infinity
    let secondHighest = 0
    let indexLowest = 0
    let indexHighest = 0
    for (let number of array) {
        if (number < lowest) {
            lowest = number
            indexLowest = array.indexOf(lowest)
        }
        if (number > highest) {
            highest = number
            indexHighest = array.indexOf(highest)
        }
    }
    array.splice(indexHighest, 1)
    array.splice(indexLowest, 1)
    for (let number of array) {
        if (number < secondLowest) {
            secondLowest = number
        }
        if (number > secondHighest) {
            secondHighest = number
        }
    }
    return `Os segundos maiores são ${secondLowest} e ${secondHighest}`
}

console.log(secondBest(numbersArray)) */
