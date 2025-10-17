# UAIFOOD API

API RESTful para o projeto UAIFOOD, um clone do iFood desenvolvido para a matéria de Desenvolvimento Web 2.

## Tecnologias Utilizadas

- Node.js
- NestJS
- Prisma
- PostgreSQL
- Docker
- Swagger
- JWT (JSON Web Token)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/products/docker-desktop/)

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd uaifood-api
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o banco de dados com Docker:**
    ```bash
    docker-compose up -d
    ```

4.  **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    npm run start:dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

## Comandos Úteis

- `docker ps`: Lista os contêineres em execução.
- `docker-compose down`: Para e remove os contêineres definidos no `docker-compose.yml`.