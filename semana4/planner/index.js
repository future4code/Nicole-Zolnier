function criarTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    const inputDiaSemana = document.getElementById("dias-semana").value
    const escolherSemana = document.getElementById(inputDiaSemana)
    if (inputTarefa.value === ""){
        alert("Epa!Escreva uma tarefa!")
    }
    else {
        escolherSemana.innerHTML += `<li onclick ="tarefaRiscada(this)">${inputTarefa.value}</li>`
        inputTarefa.value = ""
    }
    
}

function tarefaRiscada (id) {
    id.style.color = "green"
    id.style.textDecoration = "line-through"
}


function apagarTudo(){
    const certeza = confirm("Você tem certeza que quer apagar tudo?")
    if (certeza){
        
    }
    else{

    }
}

