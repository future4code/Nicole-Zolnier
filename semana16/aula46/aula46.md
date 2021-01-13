## Exercicio 1

a) O raw devolve tudo! Inclusive meta-dados, por isso precisa pegar a posição certa do array nos resultados
b) Query:
```
const getActorByName = async (name: string): Promise<any> => {
    try {
        const result = await connection
            .raw(`
                SELECT * FROM Actor
                WHERE name LIKE "%${name}%"
                `)
        return result[0]
    } catch (error) {
        console.log(error)
        return []
    }
}
```

c) Query:
```
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    
    return result[0]
  }
```
-----------------
