import { Casino, LOCATION, NATIONALITY, User, verifyAge } from "../src/verifyAge";

describe('test complex verifyAge', () => {
    test("1 brazilian allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nationality: NATIONALITY.BRAZILIAN,
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
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
        expect(result.americans.unallowed.length).toBe(0)
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
    
        expect(result.brazilians.unallowed).toContain("Astrodev BR")
        expect(result.americans.unallowed).toContain("Astrodev EUA")
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
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})