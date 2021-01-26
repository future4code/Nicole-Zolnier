## Exercicio 1
a) O round é o fator cost, um valor para definir o tempo . Quanto maior o valor que damos ao cost, mais lento será a requisição. O salt é um dado aleatório gerado pelo bcrypt para ser um input adicional à mensagem que será encriptada. Quanto maior o round, melhor será por motivos de segurança. Eu usei 12 que é o valor padrão.

b)
```
export const hash = async (
    plainText:string
    ): Promise<string> => {

        const rounds = Number(process.env.BCRYPTS_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(plainText, salt)
}
```
c)
```
export const compare = async (
    plainText:string, 
    cypherText: string
    ): Promise<boolean> => {
    
        return bcrypt.compare(plainText, cypherText)
}
```
------------
## Exercicio 2
a)

b) 
```

```
c) 
```

```
d)

------------
## Exercicio 3
a)
```

```

b)
```

```

c)
```

```

d)
```

```
------------
## Exercicio 4
```

```
------------
## Exercicio 5
```

```
------------
## Exercicio 6
```

```
