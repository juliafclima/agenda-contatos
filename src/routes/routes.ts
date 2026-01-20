import { Router } from "express";
import * as contatoController from "../controller/contatoController.js";

const router = Router();

router.get("/contatos", contatoController.getAllContatosController);

router.post("/contatos", contatoController.addNewContatoController);

router.delete("/contatos/:id", contatoController.deleteContatoController);

router.patch("/contatos/:id", contatoController.updateContatoController);

export default router;
