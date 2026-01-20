import { Contato } from "../../model/contato.js";

export const validaContato = (
  data: Partial<Contato>,
  isUpdate: boolean = false,
) => {
  if (!isUpdate) {
    if (!data.nome || typeof data.nome !== "string") {
      return "Nome é obrigatório e deve ser uma string!";
    }

    const erroNome = validaNome(data.nome);
    if (erroNome) return erroNome;

    if (!data.telefone || typeof data.telefone !== "string") {
      return "Telefone é obrigatório e deve ser uma string!";
    }
  }

  if (isUpdate) {
    if (data.nome && typeof data.nome !== "string") {
      return "Nome deve ser uma string!";
    }

    if (data.nome) {
      const erroNome = validaNome(data.nome);
      if (erroNome) return erroNome;
    }

    if (data.telefone && typeof data.telefone !== "string") {
      return "Telefone deve ser uma string!";
    }
  }

  return null;
};

const validaNome = (nome: string): string | null => {
  const nomeTratado = nome.trim().replace(/\s+/g, " ");
  const palavras = nomeTratado.split(" ");

  if (palavras.length < 2) {
    return "Nome deve conter pelo menos duas palavras";
  }

  const palavraInvalida = palavras.some(
    (palavra) => palavra.length < 3 || !/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(palavra),
  );

  if (palavraInvalida) {
    return "Cada palavra do nome deve ter pelo menos 3 letra";
  }

  return null;
};
