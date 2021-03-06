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
## Exercicio 4
a)
```
SELECT movie_name, Movies.id, rate, comment FROM Movies
LEFT JOIN Rating 
ON Movies.id = Rating.movie_id
```
b)
```
SELECT movie_name, Movies.id, actor_id FROM Movies
JOIN MovieCast
ON Movies.id = MovieCast.movie_id
```
c)
```
SELECT movie_name, AVG(rate) FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.movie_id
GROUP BY movie_name
```
--------------
## Exercicio 5
a) Porque 3 tabelas estão sendo unidas. O primeiro join une a primeira e a segunda, e o segundo join une o resultado do primeiro join com a terceira tabela.

b) 
```
SELECT m.id as "Id do Filme", movie_name as "Título do filme", actor_id as "ID do Ator", name as "Nome do ator" FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
c) Não há uma coluna m na lista de campos. Tem uma vírgula no lugar no ponto em m.title. Se substituirmos, o erro persiste, porque não existe o campo title na tabela Movies. Teria que ser m.movie_name
```
Error Code: 1054. Unknown column 'm' in 'field list'
```
d)
```
SELECT m.id AS movie_id, m.movie_name, a.id AS actor_id, a.name, r.rate, r.comment
FROM
    Movies m
        LEFT JOIN
    Rating r ON r.movie_id = m.id
        LEFT JOIN
    MovieCast mc ON m.id = mc.movie_id
        JOIN
    Actor a ON a.id = mc.actor_id
```
--------------
## Exercicio 6
a) É uma relação N:M, vários filmes se relacionam com vários oscars ganhos

b)
```
CREATE TABLE Oscars (
	oscar_name VARCHAR(255) NOT NULL,
    oscar_date DATE NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id)
        REFERENCES Movies(id)
);
```
c)
```
INSERT INTO Oscars
VALUES("Oscar de melhor atriz", "2013-02-22",
  "002"
), (
  "Oscar de melhor diretor",
  "2019-02-24",
  "004"
),(
  "Oscar de melhor filme",
  "2019-02-24",
  "004"
);
```
d)
```
SELECT 
    m.id AS movie_id,
    m.movie_name AS movie_name,
    o.oscar_name AS oscar_name,
    o.oscar_date AS oscar_date
FROM
    Movies m
        LEFT JOIN
    Oscars o ON o.movie_id = m.id
```