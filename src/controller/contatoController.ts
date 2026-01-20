import { Request, Response } from "express";

import * as contatoService from "../service/contatoService.js";
import {
  badRequest,
  conflict,
  created,
  internalServerError,
  notContent,
  notFound,
  ok,
} from "../utils/httpHelper.js";
import { validaContato } from "../utils/formatador/validaContato.js";
import { sendResponse } from "../utils/sendResponseHelper.js";

export const getAllContatosController = async (_: Request, res: Response) => {
  try {
    const contatos = await contatoService.getAllContatosService();

    if (!contatos || contatos.length === 0) {
      return sendResponse(res, notFound("Nenhum contato encontrado!"));
    }

    return sendResponse(
      res,
      ok("Lista de contatos retornada com sucesso!", contatos),
    );
  } catch {
    return sendResponse(res, internalServerError("Erro ao buscar contatos!"));
  }
};

export const addNewContatoController = async (req: Request, res: Response) => {
  try {
    const validationError = validaContato(req.body);

    if (validationError) {
      return sendResponse(res, badRequest(validationError));
    }

    await contatoService.addNewContatoService(req.body);

    return sendResponse(
      res,
      created("Contato inserido com sucesso!", req.body),
    );
  } catch (error: any) {
    if (error.message === "DUPLICATE_CONTATO") {
      return sendResponse(
        res,
        conflict("Contato com esse nome e telefone já existe!"),
      );
    }

    return sendResponse(
      res,
      internalServerError("Erro ao inserir novo contato!"),
    );
  }
};

export const deleteContatoController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return sendResponse(
        res,
        badRequest("ID do contato inválido para exclusão!"),
      );
    }

    const contato = await contatoService.deleteContatoByIdService(id);

    if (!contato) {
      return sendResponse(
        res,
        notFound("Contato não encontrado para exclusão!"),
      );
    }

    res.status(notContent("").statusCode).send();
  } catch {
    return sendResponse(res, internalServerError("Erro ao excluir contato!"));
  }
};

export const updateContatoController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return sendResponse(
        res,
        badRequest("ID do contato inválido para atualização!"),
      );
    }

    const { nome, telefone } = req.body;

    if (!nome && !telefone) {
      return sendResponse(
        res,
        badRequest("Nenhum dado fornecido para atualização!"),
      );
    }

    const validationError = validaContato({ nome, telefone }, true);

    if (validationError) {
      return sendResponse(res, badRequest(validationError));
    }

    const contatoAtualizado = await contatoService.updateContatoByIdService(
      id,
      { nome, telefone },
    );

    if (!contatoAtualizado) {
      return sendResponse(
        res,
        notFound("Contato não encontrado para atualização!"),
      );
    }

    return sendResponse(
      res,
      ok("Contato atualizado com sucesso!", contatoAtualizado),
    );
  } catch {
    return sendResponse(res, internalServerError("Erro ao atualizar contato!"));
  }
};
