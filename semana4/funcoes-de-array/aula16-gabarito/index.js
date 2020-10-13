let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    despesas.forEach((despesa) => {
        divDespesas.innerHTML += `<li>valor: R$${despesa.valor} | tipo: ${despesa.tipo} | descrição: ${despesa.descricao}</li>`
    })
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0

    arrDespesas.forEach((despesa) => {
        if(despesa.tipo === 'alimentação') {
            gastoAlimentacao += despesa.valor
            gastoTotal += despesa.valor
        }
        else if (despesa.tipo === 'utilidades'){
            gastoUtilidades += despesa.valor
            gastoTotal += despesa.valor
        }
        else if (despesa.tipo === 'viagem'){
            gastoViagem += despesa.valor
            gastoTotal += despesa.valor
        }
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){

    let valorMinInput = document.getElementById('valorFiltroMin')
    let valorMaxInput = document.getElementById('valorFiltroMax')
    let tipoFiltroInput = document.getElementById('tipoFiltro')
    let tipoFiltro = (tipoFiltroInput.value)
    let valorMin = Number(valorMinInput.value)
    let valorMax = Number(valorMaxInput.value)
    

    if(camposPreenchidos(tipoFiltroInput, valorMinInput, valorMaxInput)){
        if(validarValores(valorMin, valorMax)){

            let despesasFiltradas = arrDespesas.filter((despesa) => {
                if((tipoFiltro === despesa.tipo || tipoFiltro === 'todos') && despesa.valor >= valorMin && despesa.valor <= valorMax ){
                    return true
                }
            })
        
            imprimirDespesas(despesasFiltradas)
        }
        else{
            alert("Opa! Insira numeros positivos e o valor minimo não pode ser maior que o valor maximo")
        }
    }
    else{
        alert("Opa! Algo deu errado, preencha todos os campos!")
    }
    
    
}

// funçao de organizar - desafio 2
function organizarDespesas () {
    arrDespesas.sort((a,b) => {
        return b.valor - a.valor
    })

    imprimirDespesas(arrDespesas)
}


// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}

// funções criadas para o desafio 1

// verifica se tudo foi preenchido
function camposPreenchidos(input, input2, input3){
    if(input.value !== "" || input2.value !== "" || input3.value !== "") {
        return true
    }
    else {
        return false
    }
}

// verifica se o valor minimo e negativos são positivos e se o minimo é menor que o maximo
function validarValores(minimo, maximo){
    if((minimo >= 0) && (maximo > 0) && (minimo < maximo)){
        return true
    }
    else{
        return false
    }
}

