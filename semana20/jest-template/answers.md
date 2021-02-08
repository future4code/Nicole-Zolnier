# Exercícios de Testes

## 1
a)
````
export interface User {
	name: string
	balance: number
}
````
b)
````
export const performPurchase = (user: User, value: number): User | undefined => {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
````

## 2
````
describe("Perform purchase", () => {
    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }
    
        const result = performPurchase(user, 50)
        
        expect(result).toEqual(undefined)
    })
})
````
## 3
b)
````
export const verifyAge = (casino:Casino, users:User[]):Result => {
    const allowedBr:string[] = []
    const unallowedBr:string[] = []
    const allowedUs:string[] = []
    const unallowedUs:string[] = []

    if (casino.location === LOCATION.BRAZIL) {
        users.forEach(user => {
            if (user.nationality === NATIONALITY.BRAZILIAN) {
                if(user.age >= 18){
                    allowedBr.push(user.name)
                } else {
                    unallowedBr.push(user.name)
                }
            } else if (user.nationality === NATIONALITY.AMERICAN) {
                if(user.age >= 18){
                    allowedUs.push(user.name)
                } else {
                    unallowedUs.push(user.name)
                }
            }
        })
    }

    if (casino.location === LOCATION.EUA) {
        users.forEach(user => {
            if (user.nationality === NATIONALITY.BRAZILIAN) {
                if(user.age >= 21){
                    allowedBr.push(user.name)
                } else {
                    unallowedBr.push(user.name)
                }
            } else if (user.nationality === NATIONALITY.AMERICAN) {
                if(user.age >= 21){
                    allowedUs.push(user.name)
                } else {
                    unallowedUs.push(user.name)
                }
            }
        })
    }

    return {
        brazilians: {
            allowed: allowedBr,
            unallowed: unallowedBr
        },
        americans: {
            allowed: allowedUs,
            unallowed: unallowedUs
        }
    }
}
````
c) Acho que é muita coisa pra analisar, então foi necessario pensar em todos casos possíveis e dai é meio dificil :(

## 4
````
describe('test verifyAge', () => {

    test("1 brazilian allowed", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        }
    
        const result = verifyAge(casino, [brazilian])
        expect(result.brazilians.allowed).toEqual(["Astrodev"])
      })
    
      test("1 american allowed", () => {
        const brazilian: User = {
          name: "Astrodev",
          age: 19,
          nationality: NATIONALITY.AMERICAN,
        }
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.BRAZIL,
        }
    
        const result = verifyAge(casino, [brazilian])
        expect(result.americans.allowed).toEqual(["Astrodev"])
      })

      test("No one allowed", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        }
    
        const american: User = {
          name: "Astrodev EUA",
          age: 19,
          nationality: NATIONALITY.AMERICAN,
        }
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        }
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ])
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.unallowed).toEqual([
          "Astrodev EUA",
          "Astrodev EUA",
        ])
    })

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
          name: "Astrodev BR",
          age: 19,
          nationality: NATIONALITY.BRAZILIAN,
        }
    
        const american: User = {
          name: "Astrodev EUA",
          age: 21,
          nationality: NATIONALITY.AMERICAN,
        }
    
        const casino: Casino = {
          name: "Balada Estelar",
          location: LOCATION.EUA,
        }
    
        const result = verifyAge(casino, [
          brazilian,
          brazilian,
          american,
          american,
        ])
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
      })

})
````

## 5
````
````