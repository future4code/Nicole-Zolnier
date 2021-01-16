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
	"id": "1",
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

## **GET** All Users
**Path:** `/user/all`

**Body de Resposta:**

```json
{
	"users": [{
		"id": "1",
		"nickname": "astrodev"
	}]
}
```

## **GET** Task by User Id
**Path:** `/task/search?userId=id`

**Query String:** id do usuário que criou através da chave `userId`

**Body de Resposta:**

```json
{
	"tasks": [{
		"taskId": "1",
		"title": "Criar banco dos alunos",
		"description": "Devemos criar o banco dos alunos para o módulo do backend",
		"dueDate": "04/05/2020",
		"userId": "001",
		"status": "to_do",
		"userNickname": "astrodev"
	}]
}
```

## **GET** User By Name
**Path:** `/user/search?nickname=astro`

**Query String:** nickname do usuario através da chave `nickname`

**Body de Resposta:**

```json
{
	"users": [{
		"id": "1",
		"nickname": "astrodev",
	}]
}
```

## **POST** Assign responsible
**Path:** `/task/responsible`

**Body:**

```json
{
	"taskId": "Astro Dev",
	"userId": "astrodev"
}
```

## **GET** Responsible users
**Path:** `/task/:id/responsible`

**Path Param**: é o id da tarefa

**Body de Resposta:**

```json
{
	"users": [{
		"id": "1",
		"nickname": "astrodev"
	}]
}
```

## **POST** Edit Status

**Path:** `/task/status/edit`

**Body:**

```json
{
	"taskId": "1"
	"status": "doing"
}
```