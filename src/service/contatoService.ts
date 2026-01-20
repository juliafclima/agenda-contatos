import { Contato } from "../model/contato.js";
import * as contatoRepository from "../repository/contatoRepository.js";

export const getAllContatosService = async () => {
  const data = await contatoRepository.getAllContatosRepository();

  return data;
};

export const addNewContatoService = async (
  contatoData: Contato,
): Promise<void> => {
  const contatoJaExiste = await contatoRepository.existsContatoRepository(
    contatoData.nome,
    contatoData.telefone,
  );

  if (contatoJaExiste) {
    throw new Error("DUPLICATE_CONTATO");
  }

  await contatoRepository.addNewContatoRepository(contatoData);
};

export const deleteContatoByIdService = async (
  id: number,
): Promise<Contato | null> => {
  const contato = await contatoRepository.getContatoByIdRepository(id);

  if (!contato) {
    return null;
  }

  await contatoRepository.deleteContatoByIdRepository(id);

  return contato;
};

export const updateContatoByIdService = async (
  id: number,
  contatoData: Contato,
): Promise<Contato | null> => {
  const contatoAtual = await contatoRepository.getContatoByIdRepository(id);

  if (!contatoAtual) {
    return null;
  }

  const contatoAtualizado: Omit<Contato, "id"> = {
    nome: contatoData.nome ?? contatoAtual.nome,
    telefone: contatoData.telefone ?? contatoAtual.telefone,
  };

  await contatoRepository.updateContatoByIdRepository(id, contatoAtualizado);

  return { id, ...contatoAtualizado };
};
