import { twoSum } from '../src/twoSum'

describe("Testing twoSum", () => {
    it("Should return [0,1]", () => {
      
        expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0,1])
    })

    it("Should return [1,3]", () => {

        expect(twoSum([4, 5, 10, 12, 21], 17)).toStrictEqual([1,3])
    })
    

})