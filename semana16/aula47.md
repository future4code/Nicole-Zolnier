## Exercicio 1
a) São chaves primárias de uma tabela que são exportadas para outra criando relação entre elas.

b)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating 
VALUES('a', 'pessimo, 5 estrelas', 5, '001'),
	  ('b', 'amy dunne tava certissima, nunca critiquei', 4, '002'),
	  ('c', 'inspirador a historia do rato, mostra que todos nós podemos cozinhar', 4.5, '003'),
	  ('d', '#parasitouu', 5, '004');
```
c) Não é possível adicionar ou atualizar um item filho
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails
```

d)
```
ALTER TABLE Movie DROP COLUMN rating;
```

e) Não é possível adicionar ou atualizar um item pai
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails
```
---------------
