// criando a hashTable com uma interface pro typescript nao bater em mim
interface hashTable {
    [index: number]: number;
}

export const twoSum = (arr: number[], target: number) => {
    // criando a hashtable no codigo
    let hash : hashTable = {}
    for(let i = 0; i < arr.length; i++){
        // numero de agora
        let current = arr[i]
        // diferença entre o desejado e o numero de agora / numero que falta
        let next = target - current
        // acha o numero que falta na hashtable
        const indexNext = hash[next]
        
        // se achar o numero aka nao for undefined retorna os index
        if(indexNext !== undefined) return [indexNext, i]
        // adiciona na hashtable se nao achou
        hash[current] = i
    }

}
