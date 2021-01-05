// ---- a) 
// const myString: string = 34 

// o typescript ficou brabo e disse "type number is not assignable to type string", ou seja não pode :(

// ---- b)
// const myNumber: number = "string massa"

// a mesma coisa mais ao contrário, o typescript ficou brabo e disse "type string is not assignable to type number", ou seja não pode :(
// pra ele aceitar a string ficaria:

const myNumberOrNot: number | string = "string massa"

// ---- c)
const myself: {name: string, age: number, favColor: string} = {
    name: "Nicole",
    age: 18,
    favColor: "vermelho"
}
// ---- d)
type person = {name: string, age: number, favColor: string}

const monica: person = {
    name: "Mônica",
    age: 7,
    favColor: "vermelho"
}    

const magali: person = {
    name: "Magali",
    age: 7,
    favColor: "amarelo"
}    

const cebolinha: person = {
    name: "Cebolinha",
    age: 7,
    favColor: "verde"
}    

// ---- e)
enum colors {
    RED = "vermelho",
    ORANGE = "laranja",
    YELLOW = "amarelo",
    GREEN = "verde",
    BLUE = "azul",
    INDIGO = "indigo",
    VIOLET = "violeta"
}

type newPerson = {name: string, age: number, favColor: colors}

const cascao: newPerson = {
    name: "Cascão",
    age: 7,
    favColor: colors.YELLOW
}    

const denise: newPerson = {
    name: "Denise",
    age: 7,
    favColor: colors.VIOLET 
}
