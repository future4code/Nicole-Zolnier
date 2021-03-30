import { isAnagram } from '../src/isAnagram'

describe("Testing isAnagram", () => {
    it("Should be false", () => {
        
        const result = isAnagram("gato", "rato")

        expect(result).toBe(false)
    })

    it("Should be true", () => {

        const result = isAnagram("anagrama", "nagarama")

        expect(result).toBe(true)
    })

})