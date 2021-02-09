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

**O post é criado na hora então não precisa passar horário (pfvr não passa que ele não vai ver ok?)**
   
## 4. **GET** Post By Id

**Path:** `/post/:id`

**Path Param**: id da receita

**Body de Resposta:**

```json
{
    "message": "Success!",
    "post": {
        "id": "d8fd59e9-8839-46fa-b1ca-114b22b418c5",
        "photo": "https://static.wikia.nocookie.net/disney/images/5/5a/Monsters-inc-disneyscreencaps.com-9782.jpg/revision/latest/top-crop/width/360/height/450?cb=20200609162910",
        "description": "Mike Wazoski!",
        "type": "normal",
        "createdAt": "05/02/2021",
        "authorId": "8b25700a-2ef6-408f-94ad-a6909dfa284e"
    }
}
```