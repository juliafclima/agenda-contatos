import swaggerJsdoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";

const PORT = process.env.PORT;

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Agenda Contatos",
      version: "1.0.0",
      description: "Documentação da API com Express + TypeScript",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.ts", "./src/docs/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
