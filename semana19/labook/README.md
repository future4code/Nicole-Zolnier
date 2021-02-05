# LABOOK

## Primeiros Passos

* Clonar este repositório
* Executar `npm install` para adicionar as dependências
* Criar um arquivo .env na raiz do projeto e preencher as chaves a seguir com os valores apropriados:
   ```
   DB_HOST = 
   DB_USER = 
   DB_PASSWORD = 
   DB_NAME = 

   JWT_KEY = 
   JWT_EXPIRES_IN = 

   BCRYPT_COST = 
   ```
* Executar `npm run setup` para adicionar as tabelas ao banco de dados (em caso de sucesso, o servidor já estará pronto para receber requisições)

# Endpoints

## 1. **POST** Sign Up

**Path:** `/user/signup`

**Body:**

```json
{
    "name": "Mark Zuchinni",
    "email": "mark@labook.com",
    "password": "bestboss"
}
```

## 2. **POST** Login

**Path:** `/user/login`

**Body:**

```json
{
    "email": "prichan@labook.com",
    "password": "foramark"
}
```

## 3. **POST** Create Post

**Path:** `/post/create`

**Headers**
```
authorization: "token de autenticação"
```

**Body:**

```json
{
	"photo": "https://ichef.bbci.co.uk/news/976/cpsprodpb/41CF/production/_109474861_angrycat-index-getty3-3.jpg", 
   "description": "Rawr!",
   "type": "normal"
}
```
   
## 4. **GET** Post By Id

**Path:** `/post/:id`

**Path Param**: id da receita

**Body de Resposta:**

```json
{
    "message": "Success!",
    "post": {
        "id": "8b680f9a-ae2a-43d5-8a20-88c82dbabaa5",
        "photo": "https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
        "description": "Stay safe!",
        "type": "normal",
        "createdAt": "2021-02-05T16:31:08.000Z",
        "authorId": "659b457a-35c8-4e23-a89b-a17b04ab6d1d"
    }
}
```