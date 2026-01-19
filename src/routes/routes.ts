import { Router } from "express";

import { getAllProdutosController } from "../controller/contatoController.js";

const router = Router();

router.get("/contatos", getAllProdutosController);

export default router;
