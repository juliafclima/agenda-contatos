import { Contato } from "../../model/contato.js";

export const validaContato = (
  data: Partial<Contato>,
  isUpdate: boolean = false,
) => {
  if (!isUpdate) {
    if (!data.nome || typeof data.nome !== "string") {
      return "Nome é obrigatório e deve ser uma string!";
    }

    if (!data.telefone || typeof data.telefone !== "string") {
      return "Telefone é obrigatório e deve ser uma string!";
    }
  }

  if (isUpdate) {
    if (data.nome && typeof data.nome !== "string") {
      return "Nome deve ser uma string!";
    }

    if (data.telefone && typeof data.telefone !== "string") {
      return "Telefone deve ser uma string!";
    }
  }

  return null;
};
