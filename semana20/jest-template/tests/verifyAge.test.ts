import { Casino, LOCATION, NATIONALITY, User, verifyAge } from "../src/verifyAge";

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