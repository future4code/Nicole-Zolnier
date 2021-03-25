import { longestCommonPrefix } from '../src/longestCommonPrefix'

describe("Testing longestCommonPrefix", () => {
    it("Should return fl", () => {
        
        const result = longestCommonPrefix(["flower","flow","flight"])

        expect(result).toBe("fl")
    })

    it("Should return ''", () => {


        const result = longestCommonPrefix(["dog","racecar","car"])

        expect(result).toBe("")
    })

})