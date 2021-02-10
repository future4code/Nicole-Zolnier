import { Character, validateCharacter } from "./validateCharacter";

export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.attack > defender.defense) {
        defender.health -= attacker.attack - defender.defense
    }
}

export const performAttackWithInversion = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }

    if (attacker.attack > defender.defense) {
        defender.health -= attacker.attack - defender.defense
    }
}