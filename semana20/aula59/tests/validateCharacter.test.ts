import { validateCharacter } from "../src/validateCharacter"

describe('validate characters', () => {
    test('should return false for empy name', () => {
        const result = validateCharacter({
            name: '',
            health: 1500,
            defense: 800,
            attack: 700
        })

        expect(result).toBe(false)
    })

    test('should return true for health = 0', () => {
        const result = validateCharacter({
            name: 'Goku',
            health: 0,
            defense: 800,
            attack: 700
        })

        expect(result).toBe(true)
    })

    test('should return false for attack = 0', () => {
        const result = validateCharacter({
            name: 'Goku',
            health: 1500,
            defense: 800,
            attack: 0
        })

        expect(result).toBe(false)
    })

    test('should return false for defense = 0', () => {
        const result = validateCharacter({
            name: 'Goku',
            health: 1500,
            defense: 0,
            attack: 7000
        })

        expect(result).toBe(false)
    })

    test('should return false for NEGATIVE health', () => {
        const result = validateCharacter({
            name: 'Goku',
            health: -100,
            defense: 700,
            attack: 700
        })

        expect(result).toBe(false)
    })

    test('should return true for valid input', () => {
        const result = validateCharacter({
            name: 'Goku',
            health: 1000,
            defense: 700,
            attack: 700
        })

        expect(result).toBe(true)
    })

})