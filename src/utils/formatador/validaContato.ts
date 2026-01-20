import { Contato } from "../../model/contato.js";

type ValidationResult = string | null;

export const validaContato = (
  data: Partial<Contato>,
  isUpdate = false,
): ValidationResult => {
  if (!isUpdate) {
    return validaCriacaoContato(data);
  }

  return validaAtualizacaoContato(data);
};

const validaCriacaoContato = (data: Partial<Contato>): ValidationResult => {
  if (!isString(data.nome)) {
    return "Nome é obrigatório e deve ser uma string!";
  }

  const erroNome = validaNome(data.nome);
  if (erroNome) return erroNome;

  if (!isString(data.telefone)) {
    return "Telefone é obrigatório e deve ser uma string!";
  }

  return null;
};

const validaAtualizacaoContato = (data: Partial<Contato>): ValidationResult => {
  if (data.nome !== undefined) {
    if (!isString(data.nome)) {
      return "Nome deve ser uma string!";
    }

    const erroNome = validaNome(data.nome);
    if (erroNome) return erroNome;
  }

  if (data.telefone !== undefined && !isString(data.telefone)) {
    return "Telefone deve ser uma string!";
  }

  return null;
};

const validaNome = (nome: string): ValidationResult => {
  const nomeTratado = normalizaEspacos(nome);
  const palavras = nomeTratado.split(" ");

  if (palavras.length < 2) {
    return "Nome deve conter pelo menos duas palavras";
  }

  const palavraInvalida = palavras.some(isPalavraInvalida);

  if (palavraInvalida) {
    return "Cada palavra do nome deve ter pelo menos 3 letras";
  }

  return null;
};

const isString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const normalizaEspacos = (texto: string): string =>
  texto.trim().replace(/\s+/g, " ");

const isPalavraInvalida = (palavra: string): boolean =>
  palavra.length < 3 || !/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/.test(palavra);
