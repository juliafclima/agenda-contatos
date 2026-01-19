import { getAllProdutosRepository } from "../repository/contatoRepository.js";

export const getAllProdutosService = async () => {
   const data = await getAllProdutosRepository();
   
   return data;
}