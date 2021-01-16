# TO DO List

## **PUT** Create user

**Path:** `/user`

**Body:**

```json
{
	"name": "Astro Dev",
	"nickname": "astrodev",
	"email": "astro@dev.com"
}
```

## **GET** User by Id
**Path:** `/user/:id`

**Path Param**: user id

**Body de Resposta:**

```json
{
	"id": "001",
	"nickname": "astrodev"
}
```

## **POST** Edit User
**Path:** `/user/edit/:id`

**Path Param**: user id

**Body:**

```json
{
	"name": "Astro Dev",
	"nickname": "astrodev"
}
```

## **PUT** Create task
**Path:** `/task`

**Body:**

```json
{
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"dueDate": "04/05/2020",
    "userId": "3"
}
```

## **GET** Task By Id

**Path:** `/task/:id`

**Path Param**: é o id da tarefa

**Body de Resposta:**

```json
{
	"taskId": "001",
	"title": "Criar banco dos alunos",
	"description": "Devemos criar o banco dos alunos para o módulo do backend",
	"dueDate": "04/05/2020",
	"status": "to_do",
	"userId": "3",
}
```