const answer = prompt("Escreva algo")

const reverseText = (string) => {
    return string.split("").reverse().join("")
}

console.log(answer)
console.log(reverseText(answer))