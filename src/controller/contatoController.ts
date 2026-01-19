import { Request, Response } from "express";

import { getAllProdutosService } from "../service/contatoService.js";
import { internalServerError, notFound, ok } from "../utils/httpHelper.js";

export const getAllProdutosController = async (req: Request, res: Response) => {
  try {
    const contatos = await getAllProdutosService();

    if (!contatos || contatos.length === 0) {
      const response = await notFound("Nenhum contato encontrado!");

      return res.status(response.statusCode).json(response.body);
    }

    const response = await ok("Lista de contatos retornada com sucesso!", contatos);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    const response = await internalServerError("Erro ao buscar contatos!");
    res.status(response.statusCode).json(response.body);
  }
};
