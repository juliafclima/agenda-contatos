import { Contato } from "../model/contato.js";
import * as contatoRepository from "../repository/contatoRepository.js";

export const getAllContatosService = async () => {
  const data = await contatoRepository.getAllContatosRepository();

  return data;
};

export const addNewContatoService = async (
  contatoData: Contato,
): Promise<void> => {
  const existe = await contatoRepository.existsContatoRepository(
    contatoData.nome,
    contatoData.telefone,
  );

  if (existe) {
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
