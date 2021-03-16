// const checkEdits = (first: string, second: string): boolean => {
//     if (first === second) {
//         return false
//     }

//     if (first.length - second.length > 1) {
//         return false
//     }

//     if (first.length > second.length) {
//         return first.includes(second)
//     }
//     if (first.length < second.length) {
//         return second.includes(first)
//     }

//     let diferenceCharacter: number = 0

//     for (let i = 0; i < first.length; i++) {
//         if (first[i] !== second[i])

//             diferenceCharacter++
//     }

//     return diferenceCharacter === 1
// }

// console.log(checkEdits("banana", "banana"))
// console.log(checkEdits("banan", "banana"))
// console.log(checkEdits("bananak", "banana"))
// console.log(checkEdits("panana", "banana"))
// console.log(checkEdits("bananaaa", "banana"))

const compressString = (input: string) => {
    const compressedArray: string[] = []
    let letterCount = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== input[i - 1]) {
            letterCount = 0
        }
        if(input[i] !== input[i + 1]) {
            letterCount++
            compressedArray.push(input[i] + letterCount)
        } else {
            letterCount++
        }

    }    
    
    if (input.length > compressedArray.join("").length) {
        return compressedArray.join("")
    } else {
        return input
    }
}

console.log(compressString("aabbb")) 
console.log(compressString("aabcccccaaa")) 
console.log(compressString("accurate")) 
console.log(compressString("escola")) 
console.log(compressString("accuraaaaaaaaaate"))