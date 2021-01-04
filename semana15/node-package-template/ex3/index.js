const fs = require('fs')

const newToDo = process.argv[2]

fs.appendFile('./toDoList.txt', `${newToDo}, `, error => {
    if(error) throw error

    console.log("Tarefa adicionada com sucesso!")

    fs.readFile('./toDoList.txt', 'utf-8', (error, data) => {
        if(error) throw error
        console.log(data)
        })
})

// const toDoList = require("./toDoList")
// const newToDo = process.argv[2]

// const createToDo = (activity, array) => {
//     if (activity) {
//         array.push(activity)
//         return "Tarefa adicionada com sucesso!"
        
//     } else {
//         return "Por favor, digite uma nova tarefa"
//     }
// }

// console.log("\x1b[36m", createToDo(newToDo, toDoList))

// console.log("")
// console.log("\x1b[35m", toDoList)