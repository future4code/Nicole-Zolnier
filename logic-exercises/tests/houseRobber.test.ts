import { houseRobber } from '../src/houseRobber'

describe("Testing houseRobber", () => {
    it("Should return 4", () => {
        
        const result = houseRobber([1,2,3,1])

        expect(result).toBe(4)
    })

    it("Should return 12", () => {


        const result = houseRobber([2,7,9,3,1])

        expect(result).toBe(12)
    })
    
    it("Should return 28", () => {


        const result = houseRobber([2,3,6,12,3,9,11,4])

        expect(result).toBe(28)
    })

})