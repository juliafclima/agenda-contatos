import { RowDataPacket } from "mysql2";

import pool from "../config/db.js";
import { Contato } from "../model/contato.js";

type ContatoRow = Contato & RowDataPacket;

export const getAllContatosRepository = async (): Promise<Contato[]> => {
  const [rows] = await pool.query<ContatoRow[]>("SELECT * FROM contatos");

  return rows;
};

export const addNewContatoRepository = async ({
  nome,
  telefone,
}: Contato): Promise<void> => {
  await pool.query("INSERT INTO contatos (nome, telefone) VALUES (?, ?)", [
    nome,
    telefone,
  ]);
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
  const [rows] = await pool.query<ContatoRow[]>(
    "SELECT * FROM contatos WHERE id = ?",
    [id],
  );

  return rows[0] ?? null;
};

export const deleteContatoByIdRepository = async (
  id: number,
): Promise<void> => {
  await pool.query("DELETE FROM contatos WHERE id = ?", [id]);
};

export const updateContatoByIdRepository = async (
  id: number,
  { nome, telefone }: Partial<Contato>,
): Promise<void> => {
  await pool.query("UPDATE contatos SET nome = ?, telefone = ? WHERE id = ?", [
    nome,
    telefone,
    id,
  ]);
};
