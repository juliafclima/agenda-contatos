import express from "express";
import swaggerUi from 'swagger-ui-express';

import router from "./routes/routes.js";
import swaggerSpec from "./config/swagger.js";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  return app;
}

export default createApp;
