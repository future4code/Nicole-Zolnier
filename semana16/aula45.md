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

------------
## Exercicio 5
a) A query agrupa os atores com base no gênero

b)
```
SELECT 
    id, name
FROM
    Actor
ORDER BY name DESC
```

c)
```
SELECT 
    name, salary
FROM
    Actor
ORDER BY salary DESC
```

d) 
```
SELECT 
    id, name, salary
FROM
    Actor
ORDER BY salary DESC
LIMIT 3
```

e) 
```
SELECT 
    AVG(salary), gender
FROM
    Actor
GROUP BY gender
```
-------------
## Exercicio 6
a) 
```
ALTER TABLE Movies ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movies MODIFY COLUMN classification FLOAT NOT NULL;
```

c) 
```
UPDATE Movies
SET 
    playing_limit_date = '2020-12-31'
WHERE
    id = '001';
```

```
UPDATE Movies
SET 
    playing_limit_date = '2021-01-20'
WHERE
    id = '002';
```

d) A query é executada mas nenhuma linha é afetada por ela.

-------------
## Exercicio 7
a) 
```
SELECT 
    *
FROM
    Movies
WHERE
    classification > 7.5
```

b) 
```
SELECT 
    AVG(classification)
FROM
    Movies
```

c) 
```
SELECT 
    COUNT(*)
FROM
    Movies
WHERE
    playing_limit_date >= CURDATE()
```

d)
```
SELECT 
    COUNT(*)
FROM
    Movies
WHERE
    launch_date >= CURDATE()
```

e)
```
SELECT 
    MAX(classification)
FROM
    Movies
```

f)
```
SELECT 
    MIN(classification)
FROM
    Movies
```
