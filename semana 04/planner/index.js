function criarTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    const inputDiaSemana = document.getElementById("dias-semana").value
    const horarioTarefa = document.getElementById("horario").value
    const escolherDia = document.getElementById(inputDiaSemana)

    if (inputTarefa.value === ""){
        alert("Epa!Escreva uma tarefa!")
    }
    else {
        escolherDia.innerHTML += `<li class="item" onclick ="tarefaRiscada(this)"> ${horarioTarefa} - ${inputTarefa.value}</li>`
        inputTarefa.value = ""
    }
    
}

function tarefaRiscada (id) {
    id.style.color = "green"
    id.style.textDecoration = "line-through"
}


function apagarTudo(){
    const certeza = confirm("Você tem certeza que quer apagar tudo?")
    const apagarLista = document.getElementsByClassName("lista")

    if (certeza){
        for (let i = 0; i < apagarLista.length; i++){
            apagarLista[i].innerHTML = " "
        }
    }
    else{
        return
    }
}


