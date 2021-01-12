## Exercicio 1

a) Apaga a coluna salary

b) Altera o nome da coluna de gender para sex e mantém a quantidade de caracteres

c) Altera a quantidade de caracteres aceito na coluna gender

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-------------
## Exercicio 2

a)
```
UPDATE Actor 
SET 
    name = 'Toninho Rodrigues', birth_date = '1989-03-05'
WHERE
    id = '003'
```

b)
```
UPDATE Actor 
SET 
    name = 'JULIANA PÃES'
WHERE
    name = 'Juliana Paes'
```

```
UPDATE Actor 
SET 
    name = 'Juliana Paes'
WHERE
    name = 'JULIANA PÃES'
```

c)
```
UPDATE Actor 
SET 
    name = 'Marina Ruy Barbosa',
    salary = 800000,
    birth_date = '1995-06-30',
    gender = 'female'
WHERE
    id = '005';
```

d) Ele executa a query, mas nada é atualizado

---------------

## Exercicio 3
a) 
```
DELETE FROM Actor 
WHERE
    name = "Fernanda Montenegro";
```

b)
```
DELETE FROM Actor 
WHERE
    gender = "male" AND salary > 1000000
```

--------------
## Exercicio 4
a)
```
SELECT 
    MAX(salary) AS 'Maior salário'
FROM
    Actor
```

b)
```
SELECT 
    MIN(salary) AS 'Menor salário'
FROM
    Actor
```

c)
```
SELECT 
    COUNT(*)
FROM
    Actor
WHERE
    gender = 'female'
```

d)
```
SELECT 
    SUM(salary) AS 'Soma de salários'
FROM
    Actor
```