import { RowDataPacket } from "mysql2";

import pool from "../config/db.js";
import { Contato } from "../model/contato.js";

export const getAllContatosRepository = async (): Promise<RowDataPacket[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM contatos");

  return rows;
};

export const addNewContatoRepository = async (
  contatoData: Contato,
): Promise<void> => {
  try {
    const { nome, telefone } = contatoData;

    await pool.query("INSERT INTO contatos (nome, telefone) VALUES (?, ?)", [
      nome,
      telefone,
    ]);
  } catch (error) {
    throw error;
  }
};

export const existsContatoRepository = async (
  nome: string,
  telefone: string,
): Promise<boolean> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT 1 FROM contatos WHERE nome = ? AND telefone = ? LIMIT 1",
    [nome, telefone],
  );

  return rows.length > 0;
};

export const getContatoByIdRepository = async (
  id: number,
): Promise<Contato | null> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM contatos WHERE id = ?",
    [id],
  );

  if (rows.length === 0) {
    return null;
  }

  const contato: Contato = {
    id: rows[0].id,
    nome: rows[0].nome,
    telefone: rows[0].telefone,
  };

  return contato;
};

export const deleteContatoByIdRepository = async (
  id: number,
): Promise<void> => {
  await pool.query("DELETE FROM contatos WHERE id = ?", [id]);
};

export const updateContatoByIdRepository = async (
  id: number,
  contatoData: Contato,
): Promise<void> => {
  const { nome, telefone } = contatoData;

  await pool.query("UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?", [
    nome,
    telefone,
    id,
  ]);
};
