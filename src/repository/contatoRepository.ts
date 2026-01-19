import { RowDataPacket } from "mysql2";

import pool from "../config/db.js";

export const getAllProdutosRepository = async (): Promise<RowDataPacket[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM contatos");

  return rows;
};
