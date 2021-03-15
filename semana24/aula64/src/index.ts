const checkEdits = (first: string, second: string): boolean => {
    if(first === second) {
        return false
    }

    if(first.length - second.length > 1){
        return false
    }

    if (first.length > second.length) {
        return first.includes(second)
    } 
    if (first.length < second.length) {
        return second.includes(first)
    }

    let diferenceCharacter: number = 0

    for (let i = 0; i < first.length; i++){
        if (first[i] !== second[i]) 
        
        diferenceCharacter ++
    }

    return diferenceCharacter === 1
}

console.log(checkEdits("banana", "banana"))
console.log(checkEdits("banan", "banana"))
console.log(checkEdits("bananak", "banana"))
console.log(checkEdits("panana", "banana"))
console.log(checkEdits("bananaaa", "banana"))

