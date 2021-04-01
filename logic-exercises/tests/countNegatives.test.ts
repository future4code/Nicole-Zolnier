import { countNegatives } from '../src/countNegatives'

describe("Testing countNegatives", () => {
    it("Should return 8", () => {
        
        const result = countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])

        expect(result).toBe(8)
    })
    it("Should return o", () => {
        
        const result = countNegatives([[3,2],[1,0]])

        expect(result).toBe(0)
    })
    it("Should return 3", () => {
        
        const result = countNegatives([[1,-1],[-1,-1]])

        expect(result).toBe(3)
    })

})