# Cookenu

## Como rodar o projeto
1- rode o comando abaixo
```
npm install
```
2- crie um arquivo .env na raíz do projeto com esses dados:
```
//dados do seu banco

DB_HOST
DB_USER
DB_PASSWORD
DB_DATABASE_NAME

//suas preferências para key e expire

JWT_KEY
JWT_EXPIRES_IN

//suas preferências de cost

BCRYPT_COST
```
3- rode esse comando:

```
npm run setup
```
4- agora esse
```
npm start
```
5- TÁ PRONTO O SORVETINHOOOOO!

-----------------
## Endpoints

## **User Endpoints**


## **POST** Sign Up

**Path:** `/user/signup`

**Body:**

```json
{
    "name": "Dua Lipa",
    "email": "future@dua.com",
    "password": "rulebreaker"
}
```

## **POST** Login

**Path:** `/user/login`

**Body:**

```json
{
    "email": "grimes@musk.com",
    "password": "foraelon"
}
```
## **POST** Follow User

**Path:** `/user/follow`

**Headers**
```
authorization: "token de autenticação"
```

**Body:**

```json
{
    "userToFollowId": "7d49a150-6b37-4cb7-a648-616a5f14b78e"
}
```

## **POST** Unfollow User

**Path:** `/user/unfollow`

**Headers**
```
authorization: "token de autenticação"
```

**Body:**

```json
{
    "userToUnfollowId": "7d49a150-6b37-4cb7-a648-616a5f14b78e"
}
```


## **POST** Reset Password

**Path:** `/user/password/reset`

**Body:**

```json
{
    "email": "lady@g.com"
}
```
**Body de Resposta:**

```json
{
    "message": "Password updated. Please check your email"
}
```


## **GET** All Users
**Path:** `/users/all`

**Headers**
```
authorization: "token de autenticação"
```

**Body de Resposta:**

```json
{
    "users": [
        {
            "id": "360e9dd3-7ce4-4922-a247-0a2dd3520175",
            "name": "Ariana Grande"
        },
        {
            "id": "72408ceb-f3d4-43e1-b78e-fbd5b12fedbe",
            "name": "Lorde"
        },
        {
            "id": "7d49a150-6b37-4cb7-a648-616a5f14b78e",
            "name": "Dua Lipa"
        },
        {
            "id": "94d8e292-8b2a-41f1-9577-a7436897c836",
            "name": "Taylor Swift"
        },
        {
            "id": "df6e79ef-186f-439e-8263-03958ec96b2b",
            "name": "Grimes"
        }
    ]
}
```

## **GET** Own Profile
**Path:** `/user/profile`

**Headers**
```
authorization: "token de autenticação"
```

**Path Param**: id da missão

**Body de Resposta:**

```json
{
    "user": {
        "id": "72408ceb-f3d4-43e1-b78e-fbd5b12fedbe",
        "name": "Lorde",
        "email": "ella@venenosa.com"
    }
}
```

## **GET** User Profile
**Path:** `/user/:id`

**Headers**

```
authorization: "token de autenticação"
```

**Path Param**: id do user

**Body de Resposta:**

```json
{
    "user": {
        "id": "94d8e292-8b2a-41f1-9577-a7436897c836",
        "name": "Taylor Swift",
        "email": "taylor@swift.com"
    }
}
```

## **DELETE** User (precisa ser administrador!)
**Path:** `/user/:id`

**Headers**

```
authorization: "token de autenticação"
```

**Path Param**: id do user

**Body de Resposta:**

```json
{
    "message": "User deleted"
}
```
----------------
## Recipe Endpoints

## **POST** Create Recipe

**Path:** `/recipe/create`

**Body:**

```json
{
	"title": "Ovo Frito",
	"description": "Pega o ovo, põe na frigideira e reza!"
}
```

## **GET** All Recipes
**Path:** `/recipe/all`

**Headers**
```
authorization: "token de autenticação"
```

**Body de Resposta:**

```json
{
    "recipes": [
        {
            "id": "bde81465-bcab-4a06-a6bc-48098db86a0d",
            "title": "Pure de Batata",
            "description": "Pega umas batatas, cozinha, amassa, adiciona sal e tá pronto!"
        },
        {
            "id": "e9a4bcd4-5a21-4faf-a895-501133fd7f5e",
            "title": "Ovo Frito",
            "description": "Pega o ovo, põe na frigideira e reza!"
        }
    ]
}
```

## **GET** Recipe By Id
**Path:** `/recipe/:id`

**Headers**
```
authorization: "token de autenticação"
```

**Path Param**: id da receita

**Body de Resposta:**

```json
{
    "recipe": {
        "id": "bde81465-bcab-4a06-a6bc-48098db86a0d",
        "title": "Pure de Batata",
        "description": "Pega umas batatas, cozinha, amassa, adiciona sal e tá pronto!",
        "createdAt": "29/01/2021",
        "creatorId": "df6e79ef-186f-439e-8263-03958ec96b2b",
        "creatorName": "Grimes"
    }
}
```