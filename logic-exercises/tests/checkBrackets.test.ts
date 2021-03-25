import { checkBrackets } from '../src/checkBrackets'

describe("Testing checkBrackets", () => {
    it("Should be false", () => {
        
        const result = checkBrackets("([)]")

        expect(result).toBe(false)
    })

    it("Should be true", () => {


        const result = checkBrackets("{[]}")

        expect(result).toBe(true)
    })

})