export const findMissingNumber = (arr: number[], n: number = arr.length) => {
    let total = ((n + 1) * (n + 2)) / 2
        for (let i = 0; i < n; i++){
            total -= arr[i]
            
        }
        return total 
}

console.log(findMissingNumber([1,2,3,5,6,7]))

// original equation would be (n(n+1))/2
// but since there is one missing we add this one to both items
// (n+1(n+1+1))/2
// ((n+1)(n+2))/2
// yay :)