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

// errrrrr ta dificil

// ---- ex 4 - string em ordem alfabetica

/* const answer = prompt("Digite algo")

const sortString = (string) => {
    return string.split('').sort().join('');
}

console.log(sortString(answer))
 */

//  ---- ex 5 - letra inicial maiuscula
const answer = prompt("Escreva uma frase")

const uppercaseString = (string) => {
    let splitString = string.toLowerCase().split(' ');
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');
}

console.log(uppercaseString(answer))
