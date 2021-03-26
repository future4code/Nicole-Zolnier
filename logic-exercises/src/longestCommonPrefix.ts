export const longestCommonPrefix = (array : string[]) => {
    let prefix = ""
    if(array === null || array.length === 0) {
        return prefix
    }

    for (let i=0; i < array[0].length; i++){ 
        const char = array[0][i] // loop through all characters of the very first strings. 

        for (let j = 1; j < array.length; j++){ 
          // loop through all other strings in the array
            if(array[j][i] !== char) {
                return prefix
            }
        }
        prefix = prefix + char
    }

    return prefix
}
