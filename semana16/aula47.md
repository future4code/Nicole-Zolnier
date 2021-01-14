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
## Exercicio 2
a) É uma tabela de elenco do filme que se relaciona com a tabela de filme, por meio da chave movie_id, e com a tabela de atores, por meio da chave actor_id

b)
```
INSERT INTO MovieCast 
VALUES ("001", "002"),
VALUES ("002", "003"),
VALUES ("003", "004"),
VALUES ("004", "003"),
VALUES ("001", "001"),
VALUES ("002", "002");
```
c) Não é possível adicionar ou atualizar um item filho.
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails...
```
d) Não é possível adicionar ou atualizar um item pai.
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails...
```
---------------
## Exercicio 3
a) Essa query filtra filmes e avaliações correspondentes atrás da chave estrangeira id da tabela Movies e movie_id da tabela Rating. O ON é a condição, neste caso, se id de Movies for igual a movie_id de Rating.

b) 
```
SELECT movie_name, Movies.id, rate FROM Movies
INNER JOIN Rating 
ON Movies.id = Rating.movie_id
```
--------------