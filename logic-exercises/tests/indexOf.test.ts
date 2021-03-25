import { indexOf } from '../src/indexOf'

describe("Testing indexOf", () => {
    it("Should return 0", () => {
        
        const result = indexOf("banana", "b")

        expect(result).toBe(0)
    })

    it("Should return 2", () => {
        const array = ["n", "a", "o"]

        const result = indexOf(array, "o")

        expect(result).toBe(2)
    })

    it("Should return 2", () => {
        const result = indexOf("verde", "e")

        expect(result).toBe(1)
    })

})