// ----------- ex 1
// ------ a)
const printNumbersAscending = (integer: number) => {
    if (integer >= 0) {
      printNumbersAscending(integer - 1)
      console.log(integer)
    }
}

console.log(printNumbersAscending(2))

// ------ b)
const printNumbersDescending = (integer: number) => {
    if (integer >= 0) {
      console.log(integer)
      printNumbersDescending(integer - 1)
    }
}

console.log(printNumbersDescending(3))

// ----------- ex 2
const sum = (integer: number): number => {
    if (integer === 0) {
      return 0
    }
    return integer + sum(integer - 1);
}

console.log(sum(4))

// ----------- ex 3
const sumIterative = (integer: number) => {
    let sum = 0
    for (let i = 0 ; i <= integer; i++) {
        sum += i
  }
  return sum
}

console.log(sumIterative(4))

// ----------- ex 4
const printArray = (array: number[], index: number = 0) => {
    if (index < array.length) {
      console.log(array[index])
      printArray(array, index + 1)
      
    }
}

console.log(printArray([1,2,3,4,5]))