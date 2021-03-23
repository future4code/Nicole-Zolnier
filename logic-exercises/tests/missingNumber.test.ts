import { findMissingNumber } from '../src/missingNumber'

describe("Testing findMissingNumber", () => {
    it("Should return 42", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 50; i++){
            numberArray.push(i)
            numberArray.splice(41, 1)
        }
        

        const result = findMissingNumber(numberArray)

        expect(result).toBe(42)
    })

    it("Should return 13", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 30; i++) {
            numberArray.push(i)
            numberArray.splice(12, 1)
        }

        const result = findMissingNumber(numberArray)

        expect(result).toBe(13)
    })

    
})