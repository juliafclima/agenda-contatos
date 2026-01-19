import { Request, Response } from "express";

import * as contatoService from "../service/contatoService.js";
import {
  badRequest,
  conflict,
  created,
  internalServerError,
  notFound,
  ok,
} from "../utils/httpHelper.js";
import { validaContato } from "../utils/formatador/validaContato.js";
import { StatusCode } from "../utils/statusCode.js";

export const getAllContatosController = async (req: Request, res: Response) => {
  try {
    const contatos = await contatoService.getAllContatosService();

    if (!contatos || contatos.length === 0) {
      const response = notFound("Nenhum contato encontrado!");

      return res.status(response.statusCode).json(response.body);
    }

    const response = ok("Lista de contatos retornada com sucesso!", contatos);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    const response = internalServerError("Erro ao buscar contatos!");
    res.status(response.statusCode).json(response.body);
  }
};

export const addNewContatoController = async (req: Request, res: Response) => {
  try {
    const errorMessage = validaContato(req.body);

    if (errorMessage) {
      const response = badRequest(errorMessage);
      return res.status(response.statusCode).json(response.body);
    }

    await contatoService.addNewContatoService(req.body);

    const response = created("Contato inserido com sucesso!", req.body);
    return res.status(response.statusCode).json(response.body);
  } catch (error: any) {
    if (error.message === "DUPLICATE_CONTATO") {
      const response = conflict("Contato com esse nome e telefone já existe");
      return res.status(response.statusCode).json(response.body);
    }

    const response = internalServerError("Erro ao inserir novo contato!");
    res.status(response.statusCode).json(response.body);
  }
};

export const deleteContatoController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      const response = badRequest("ID do contato inválido para exclusão.");
      return res.status(response.statusCode).json(response.body);
    }

    const contatoDeletado = await contatoService.deleteContatoByIdService(id);

    if (!contatoDeletado) {
      const response = notFound("Contato não encontrado para exclusão.");
      return res.status(response.statusCode).json(response.body);
    }

    const response = notFound("Contato deletado com sucesso!");
    res.status(response.statusCode).json([response.body.message]);
  } catch (error) {
    const response = internalServerError("Erro ao deletar contato!");
    res.status(response.statusCode).json(response.body);
  }
};
