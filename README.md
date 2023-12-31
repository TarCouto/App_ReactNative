<<<<<<< HEAD
# Sup

## Endpoints
=======
## Vídeo de apresentação
(Link do Vídeo Aqui)

## Integrantes
rm94269 | Douglas Welber - 2TDSS <br/>
rm94717 | Tarcisio Ferreira Couto - 2TDST<br/>
rm88383 | Felipe Jardim - 2TDST<br/>
rm94265 | Daniel Ferreira dos Santos - 2TDST <br/>

# Sup Endpoints
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07

- Usuário
  - [Registrar](#registrar-novo-usuario)
  - [Deletar](#apagar-usuario)
  - [Encontrar Todos](#encontrar-todos-usuarios)
  - [Atualizar](#atualizar-usuario)
  - [Detalhes](#detalhes-do-usuario)
- Empresa
  - [Registrar](#registrar-nova-empresa)
  - [Deletar](#deletar-empresa)
  - [Encontrar Todos](#encontrar-todas-empresas)
  - [Atualizar](#atualizar-empresa)
  - [Detalhes](#detalhes-da-empresa)

# Registrando um novo usuário

<<<<<<< HEAD
`POST` - /sup/api/usuario/registrar
=======
`POST` - /sup/api/usuarios/registrar
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07

**Campos da requisição**

| campo | tipo   | obrigatório | descrição                 |
| ----- | ------ | ----------- | ------------------------- |
| nome  | string | sim         | Nome completo do usuário. |
| email | string | sim         | E-mail do usuário.        |
| senha | string | sim         | Senha do usuário.         |

**Exemplo corpo da requisição**

```js
{
    nome: "Douglas Welber",
    email: 'douglas@gmail.com',
    senha: "123456789"
}
```

**Respostas**

| código | descrição                       |
| ------ | ------------------------------- |
| 201    | Usuário registrado com sucesso. |
| 401    | Campos inválidos.               |

---

### Apagando usuário

<<<<<<< HEAD
`DELETE` /sup/api/usuario/{id}
=======
`DELETE` /sup/api/usuarios/{id}
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07

**Respostas**

| código | descrição                    |
| ------ | ---------------------------- |
| 201    | Usuário apagado com sucesso. |
| 401    | Campos inválidos.            |

---

### Encontrando todos usuários

<<<<<<< HEAD
`GET` /sup/api/usuario
=======
`GET` /sup/api/usuarios
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07

**Exemplo corpo da requisição**

```js
[
    {
    id: 1
    nome: "Douglas Welber",
    email: 'usuario@gmail.com',
    senha: "123456789"
    },
    {
    id: 2
    nome: "Felipe Jardim",
    email: 'usuario@gmail.com',
    senha: "123456789"
    },
    {
    id: 00256
    nome: "Manuel Gomes",
    email: 'usuario@gmail.com',
    senha: "123456789"
    }
]
```

---

### Atualizando usuário

<<<<<<< HEAD
`PUT` - /sup/api/usuario/{id}
=======
`PUT` - /sup/api/usuarios/{id}
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07

**Exemplo corpo da requisição**

```js
{
    nome: "Manuel Gomes",
    email: 'usuario@gmail.com',
    senha: "123456789"
}
```

| código | descrição                       |
| ------ | ------------------------------- |
| 201    | Usuário atualizado com sucesso. |
| 401    | Campos inválidos.               |

---

### Detalhes do usuário

<<<<<<< HEAD
`GET` - /sup/api/usuario/{id}
=======
`GET` - /sup/api/usuarios/{id}
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07

**Exemplo corpo da requisição**

```js
{
    id: 00256
    nome: "Manuel Gomes",
    email: 'usuario@gmail.com',
    senha: "123456789",
}
```

**Respostas**

| código | descrição                                   |
| ------ | ------------------------------------------- |
| 201    | Detalhes do usuário resgatados com sucesso. |
| 401    | Campos inválidos.                           |

---

---

# Registrando nova empresa com ID do usuário

<<<<<<< HEAD
`POST` - /sup/api/addCompany/1
=======
`POST` - /sup/api/usuarios/addCompany/1
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07

**Campos da requisição**

| campo   | tipo    | obrigatório | descrição                             |
| ------- | ------- | ----------- | ------------------------------------- |
| usuario | decimal | sim         | Id do usuário para o link da empresa. |
| email   | string  | sim         | E-mail corporativo do usuário.        |
| nome    | string  | sim         | Nome da empresa.                      |
| cargo   | string  | sim         | Cargo que o usuário ocupa na empresa. |

**Exemplo corpo da requisição**

```js
{
    usuario: 1,
    nome: "Apple",
    email: "Apple@apple.com",
    cargo: "Gerente",
  },
```

**Respostas**

| código | descrição                       |
| ------ | ------------------------------- |
| 201    | Empresa registrada com sucesso. |
| 401    | Campos inválidos.               |

---

### Apagando empresa

`DELETE` /sup/api/empresas/{id}

**Respostas**

| código | descrição                     |
| ------ | ----------------------------- |
| 201    | Empresa deletada com sucesso. |
| 401    | Campos inválidos              |

---

### Encontre todas empresas

`GET` /sup/api/empresas

**Exemplo corpo da requisição**

```js
[
  {
    usuario: 1,
    nome: "Apple",
    email: "Apple@apple.com",
    cargo: "Gerente",
  },
  {
    usuario: 2,
    nome: "Coca Cola",
    email: "CocaCola@contato.com",
    cargo: "Vendedor",
  },
  {
    usuario: 3,
    nome: "Amazon",
    email: "Amazon@amazoncontato.com",
    cargo: "CTO",
  },
];
```

---

### Atualizando Empresa

`PUT` - /sup/api/empresas/{id}

**Exemplo corpo da requisição**

```js
    {
        id: 1
        nome: "Amazon Brasil",
        email: "Amazon@amazoncontato.com",
        cargo: "CTO"
    }
```

| código | descrição                    |
| ------ | ---------------------------- |
| 201    | Empresa editada com sucesso. |
| 401    | Campos inválidos.            |

---

### Detalhes da empresa

`GET` - /sup/api/empresas/{id}

**Exemplo corpo da requisição**

```js
    {
        id: 1
        nome: "Amazon Brasil",
        email: "Amazon@amazoncontato.com",
        cargo: "CTO"
    }
```

**Respostas**

| código | descrição                                   |
| ------ | ------------------------------------------- |
| 201    | Detalhes da empresa resgatados com sucesso. |
<<<<<<< HEAD
| 401    | Campos inválidos.                           |
=======
| 401    | Campos inválidos.                           |
>>>>>>> 8d95ed9520b8e20ad467da8129381f6e2984eb07
