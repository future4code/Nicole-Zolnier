## Exercicios Testes Unitarios

## 1
a)
````
export interface Character {
    name: string,
    health: number,
    defense: number,
    attack: number
}
````
b)
````
export const validateCharacter = (input: Character) => {
    if( !input.name || 
        input.health === undefined || 
        input.defense === undefined || 
        input.attack === undefined
        ){
        return false
    }

    if(input.health < 0 || input.attack <= 0 || input.defense <= 0){
        return false
    }

    return true
}
````

## 2
a)
```
test('should return false for empy name', () => {
    const result = validateCharacter({
        name: '',
        health: 1500,
        defense: 800,
        attack: 700
    })
    expect(result).toBe(false)
})
```
b)
```
test('should return true for health = 0', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 0,
        defense: 800,
        attack: 700
    })
    expect(result).toBe(true)
})
```

c)
```
test('should return false for attack = 0', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 1500,
        defense: 800,
        attack: 0
    })
    expect(result).toBe(false)
})
```

d)
```
test('should return false for defense = 0', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 1500,
        defense: 0,
        attack: 7000
    })
    expect(result).toBe(false)
})
```

e)
```
test('should return false for NEGATIVE health', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: -100,
        defense: 700,
        attack: 700
    })
    expect(result).toBe(false)
})
```
f)
```
test('should return true for valid input', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 1000,
        defense: 700,
        attack: 700
    })
    expect(result).toBe(true)
})
```
## 3
a)
````
export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.attack > defender.defense) {
        defender.health -= attacker.attack - defender.defense
    }
}
````
b)
````
export const performAttackWithInversion = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.attack > defender.defense) {
        defender.health -= attacker.attack - defender.defense
    }
}
````
c) Na primeira função é usado a função validateCharacter para fazer a validação do personagem e na segunda não.

## 4
a) A função validateCharacter, porque se os dados não forem válidos, não é possivel rodar a próxima função.

b)
````
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		})
})
````
c)
````
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		})
})
````
## 5
a)
````
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
````
b)
````
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
````