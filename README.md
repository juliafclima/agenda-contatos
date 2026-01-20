# Agenda de Contatos

API REST para gerenciamento de contatos, permitindo criar, listar, atualizar e excluir contatos.  
O projeto foi desenvolvido em **Node.js**, utilizando **Express**, **MySQL** e **Swagger** para documentação.

---

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- MySQL
- Swagger (swagger-jsdoc + swagger-ui-express)
- dotenv

---

## Documentação da API (Swagger)

A API possui documentação interativa gerada com Swagger.

Após iniciar o servidor, acesse: **http://localhost:PORT/api-docs**

---

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/juliafclima/agenda-contatos.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd agenda-contatos
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

---

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha_do_banco
DB_NAME=agenda_contatos
DB_PORT=3306
```

> ⚠️ **Importante:**
>
> * Certifique-se de que o MySQL esteja em execução
> * O banco de dados `agenda_contatos` deve existir antes de iniciar a aplicação
> * Preencha a senha do banco de dados no arquivo .env

---

## Uso

Para iniciar o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

* API: `http://localhost:PORT`
* Swagger: `http://localhost:PORT/api-docs`

---

## Endpoints Principais

| Método | Rota            | Descrição                     |
| ------ | --------------- | ----------------------------- |
| POST   | `/contatos`     | Cria um novo contato          |
| GET    | `/contatos`     | Lista todos os contatos       |
| PATCH  | `/contatos/:id` | Atualiza um contato existente |
| DELETE | `/contatos/:id` | Remove um contato             |

📌 **Obs:** A descrição completa dos endpoints, parâmetros e exemplos está disponível no Swagger.

---

## Observações

* Estrutura organizada em camadas (controller, service, repository)
* Projeto configurado para desenvolvimento com TypeScript e seguindo as melhores práticas do Clean Code

---

## 👩‍💻 Desenvolvido por **Júlia Lima**

- LinkedIn: https://www.linkedin.com/in/juliafclima
- GitHub: https://github.com/juliafclima
- Portfólio: https://www.juliafclima.software/