const name = process.argv[2]
const age = Number(process.argv[3])
const sevenLater = age + 7

if(name && age){
    console.log("\x1b[33m", `Olá ${name}, você tem ${age} anos. Daqui 7 anos você terá ${sevenLater}`)
} else {
    console.log("\x1b[31m", "Por favor digite respectivamente seu nome e sua idade")
}
