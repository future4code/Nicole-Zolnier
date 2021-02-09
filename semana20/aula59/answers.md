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