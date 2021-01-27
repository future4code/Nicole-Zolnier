// a) a entrada é um array e a saída é um objeto com 3 propriedades
// b) dentro do escopo da função tem a variavel numerosOrdenados que é um array de numeros e a variavel soma que é type number

type estatistica = {
    maior: number,
    menor: number,
    media: number
}

// c)
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => estatistica
}

function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 2, 3, 4, 5]))

