import { performAttackWithInversion } from "../src/performAttack"
import { Character } from "../src/validateCharacter"

describe('test attacks', () => {
    test('should perform an attack', () => {
        const validatorMock = jest.fn(() => {
			return true
        })

        const attacker:Character = {
            name: 'John Doe',
            health: 1500,
            defense: 400,
            attack: 800
        }

        const defender:Character = {
            name: 'Mary Harper',
            health: 1500,
            defense: 600,
            attack: 600
        }

        performAttackWithInversion(attacker, defender, validatorMock as any)

        expect(defender.health).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toBeCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test('should not perform an attack with invalid character', () => {
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker:Character = {
            name: 'John Doe',
            health: 1500,
            defense: 0,
            attack: 800
        }

        const defender:Character = {
            name: 'Mary Harper',
            health: 1500,
            defense: 600,
            attack: 600
        }

        try {
            performAttackWithInversion(attacker, defender, validatorMock as any)
        } catch (error) {
            expect(error.message).toBe("Invalid character.")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toBeCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }

    })
})