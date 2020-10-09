// -------- ex de interpretação de código --------

// ----- 1
/*
a função converte o dinheiro de dolar pra real

ela espera receber o valor em dolar (esse é o parametro)
dai ela pede pro usuario informar o valor da cotação do dolar, ele transforma o que ele digitou em numero e guarda na variavel cotacao
dai ele retorna com o R$ e a multiplicação do valor em dolar com a cotacao

pra essa função funcionar, ela foi jogada em outra const (meuDinheiro) e tá recebendo o valor 100
dai dá um console.log nessa const de meuDinheiro

entãoooo
se o usuario digitar 5.54 como cotação do dolar naquele prompt, o que vai aparecer no console é.....
R$ 554
*/

// ----- 2
/*
a função te mostra quanto o seu dinheiro vai render de acordo com cada tipo de investimento

ela espera receber um tipoDeInvestimento e um valor (esses são os parametros)
dai ela dentro da função tem essa variavel chamada valorAposInvestimento com um letque tá sem nada, só tá lá existindo

dai tem um switch case pra analisar o tipoDeInvestimento 
cada case é um possivel tipoDeInvestimento e dentro dele tem (olha só) a variavel valorAposInvestimento, dessa vez sem o let, só chamando ela mesmo
dentro da variavel que está dentro do case, tem uma multiplicação usando valor (o parametro lá de cima) vezes a taxa daquele tipo de investimento
logo abaixo desse calculo tem um break para parar o case e ir pro outro (pq se nao só um deles roda)
tem 4 cases de investimento com suas respectivas taxas dentro da multiplicação dentro da variavel (dentro do case)
e o default, que é caso o tipo de investimento nao se adeque as opçoes, é um alert! dizendo que o tipo informado tá incorreto

e entao, depois desse switch a variavel valorAposInvestimento retorna porque depois qe roda o switch, ela vai ficar com um novo valor

fora da função, tem duas variaveis chamando a função com os parametros desejados e um console.log das duas variaveis

entãoooooo
pra primeira variavel de fora que se chama novoMontante e que chama a função com "Açoes" para o parametro tipoDeInvestimento e 150 para o parametro valor,
vai aparecer 165 no console pq a função fez a conversao usando o switch

já para segunda que se chama segundoMontante e tem o parametro de tipoDeInvestimento como "Tesouro Direto" e o parametro valor como 200, 
vai aparecer um alert de TIPO DE INVESTIMENTO INFORMADO INCORRETO porque o tipo nao se adequa aos do switch e nada no console (usuario vacilao)

*/

// ----- 3
/*
esse codigo cria um array de pares e um array de impares com base no array array original chamado numeros e imprime a quantidade de cada array criado

primeiro tem array numeros com um monte de numeros
dai tem o array1 e o array2 que estao vazios

entao entra um for of
para cada numero do array numeros ele faz:
se o numero tiver resto 0 numa divisao por 2, adicione o numero para o array1 com o push
se nao, adicione para o array2 com o push

dai tem 3 console.logs para cada length (tamanho) dos arrays

entãoooooo
o primeiro console vai ser: Quantidade total de números 14
o segundo: 6
o terceiro: 8

*/

// ----- 4
/*
o codigo imprime o maior numero e o menor(incluindo os numeros negativos)

primeiros temos um array numeros com vaaarios numeros
e uma variavel chamada numero1 que é igual a infinito
dai uma variavel chamada numero2 que é igual a 0

dai entra em um for of com if para analizar os numeros
ele diz que para cada numero do array numeros faça isso:
se o numero for menor que a variavel numero1 (que é igual a infinito), ele é igual a numero1 (ou seja vai ser o menor numero)
se o numero for maior que 0 (variavel numero2) ele é igual ao numero2 (ou seja é o maior numero da array)

como está em um looping, o codigo vai rodar até encontrar esses dois numeros e dai vai ter um console para cada

entãoooooo
o primeiro console vai ser: -10 (pq infinito é todos os numeros positivos entao até o 1 tá no conjunto, só o -10 que nao)
e o segundo: 1590 (pq ele é o maior mesmo hehe)


*/

// -------- ex de logica de programaçao --------

// ----- 1
/*
pode ser por while, for e for of
-- array para todos
const frutasFavs = ["goiaba", "manga", "morango", "melão", "melancia", "uva"]

-- while
const whileFunction = (array) => {
    let i = 0
    while (i < array.length) {
        console.log(array[i])

        i++
    }
}
whileFunction(frutasFavs)

-- for
const forFunction = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }

}

forFunction(frutasFavs)

-- for of 
const forOfFunction = (array) => {
    for (let fruta of array) {
        console.log(fruta)
    }
}
forOfFunction(frutasFavs)
*/

// ----- 2
/*
const booleano1 = true 
const booleano2 = false
const booleano3 = !booleano2 -> true
const booleano4 = !booleano3 -> false

a. true e false e false = FALSE
b. (true e false) - false  (false ou false) = FALSE
c. (false ou true) - true (false ou true) - true (true e true) = TRUE
d. (false e true) - !false - true    (true e true) - !true - false  --- (true ou false) = TRUE
e. (true e true e true) - true     false e false (false) ou true = TRUE

*/

// ----- 3
/*
o codigo nao funciona, ele vai entrar em um loop infinito porque não ten incremento entao nunca vai ser verdadeiro, só vai continuar rodando

const quantidadeDeNumerosPares = (n) => {
    let i = 0
    while (i < n) {
        console.log(i * 2)
        i++
    }
}
quantidadeDeNumerosPares(3)

*/

// ----- 4
/*
const verificaTriangulo = (a, b, c) => { 
    if (a === b && c === b) {
        return "Triangulo equilátero"

    } else if ((a === b && b !== c) || (a === c && c !==b) || (c === b && b !== a)) {
        return tipoTriangulo = "Triangulo isóceles"

    } else {
        return tipoTriangulo = "Triangulo escaleno"
    }
}

const trianguloIso = verificaTriangulo(10, 10, 8)
const trianguloEsc = verificaTriangulo(3, 4, 5)
const trianguloEqu = verificaTriangulo(10, 10, 10)

console.log(trianguloIso)
console.log(trianguloEsc)
console.log(trianguloEqu)


*/

// ----- 5
/*
const compararNumeros = (a, b) => {
    if (a > b) {
        console.log(`O maior é ${a}`)
    }
    else {
        console.log(`O maior é ${b}`)
    }


    if (a % b === 0) {
        console.log(`${a} é divisível por ${b}`)
    }
    else {
        console.log(`${a} não é divisível por ${b}`)
    }


    if (b % a === 0) {
        console.log(`${b} é divisível por ${a}`)
    }
    else {
        console.log(`${b} não é divisível por ${a}`)
    }

    let diferenca = a - b

    if (diferenca < 0) {
        diferenca = diferenca * (-1)
    }
    console.log(`A diferença entre eles é ${diferenca}`)

}

compararNumeros(10, 20)
compararNumeros(30, 10)

*/

// -------- ex de funcoes --------
// ----- 1
/*
const segundoMaiorMenor = (array) => {
    let menor = Infinity
    let maior = 0
    let segundoMenor = Infinity
    let segundoMaior = 0
    let indexMenor = 0
    let indexMaior = 0

    array.map((numero, i) => {

        if (numero < menor) {
            menor = numero
            indexMenor = i
        }
        else if (numero > maior) {
            maior = numero
            indexMaior = i
        }

    })

    array.splice(indexMenor, 1)
    array.splice(indexMaior, 1)

    array.map((numero, i) => {

        if (numero < segundoMin) {
            segundoMenor = numero
            indexMenor = i

        }
        else if (numero > segundoMax) {
            segundoMax = numero
            indexMaior = i
        }

    })

    console.log(menor, maior)
    console.log(segundoMenor, segundoMaior)
}


const numeros = [10, 20, 30, 40, 50, 60, 70]

segundoMaiorMenor(numeros)


*/

// ----- 2
/*
const hello = () => {
	alert("Hello Future4")
}
hello()


*/
// -------- ex de objetos --------
// ----- 1
/*
Um objeto é como se fosse um jogo de stop. Você tem a categoria (chaves) de nome, cep, comida, minha sogra é
e dai quando vc vai jogar, voce preenche o maximo que conseguir com coisas das sua mente (valores). Só que ao contrário do jogo de stop
que é feito numa folha de caderno e depois vai ser jogado no lixo para a professora não ver, o objeto é importante para guardar coisas
sobre o usuário, compra ou até mesmo despesa! Usamos ele quando para salvar informações de uma maneira categorizada.
Ele é muito bom quando queremos fazer algo com as informações mas não queremos perder os dados iniciais colocados.

Um array é tipo uma lista assim que vc fez sem pensar muito. O array não é tão organizado como um objeto. Mas ele pode receber um objeto! E com isso 
podemos filtrar as informações de uma maneira melhor! Ele é melhor quando vc ainda quer adicionar itens a lista ou quando vc quer remover.


*\
