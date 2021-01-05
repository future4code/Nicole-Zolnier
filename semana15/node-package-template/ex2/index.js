const operation = process.argv[2]
const first = Number(process.argv[3])
const second = Number(process.argv[4])

const doTheMath = (operation, x, y) => {
    if(operation && x && y){
        switch(operation) {
            case 'add':
                return `${x} + ${y} = ${x+y}`
            case 'sub':
                return `${x} - ${y} = ${x-y}`
            case 'mult':
                return `${x} x ${y} = ${x*y}`
            case 'div':
                return `${x} / ${y} = ${x/y}`
            default:
                return "Por favor, digite uma das 4 operações: add, sub, mult ou div"
        }
    } else {
        return "Por favor digite respectivamente o nome da operação e os dois números"
    }
}

console.log("\x1b[34m" ,doTheMath(operation, first, second))