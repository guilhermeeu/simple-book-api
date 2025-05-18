# Bookie - API de Gerenciamento de Livros

## Descrição

Bookie é um projeto simples de API REST para gerenciar livros, usando Firebase Firestore como banco de dados. O backend é feito em TypeScript com Node.js e Express.

---

## Funcionalidades

- Adicionar livros com título, autor, sinopse, gênero, preço, avaliação e nota opcional.
- Listar todos os livros cadastrados.
- Atualizar dados de um livro pelo seu ID.
- Deletar um livro pelo seu ID.
- Validação básica sem bibliotecas externas.

---

## Tecnologias usadas

- Node.js  
- TypeScript  
- Express  
- Firebase Firestore (Firebase Admin SDK)  
- dotenv  

---

## Rotas da API

- **POST /** — Adicionar um novo livro  
- **GET /** — Listar todos os livros  
- **DELETE /delete** — Deletar um livro (enviar `bookDocId` no body)  
- **PUT /update/** — Atualizar um livro (enviar os dados no body, incluindo `documentID`)  

---

## Como usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/theguilhermex/Book---api
   cd bookie

   ``` 
