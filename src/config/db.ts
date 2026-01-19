import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const setupDatabase = async () => {
  const query = `
      CREATE TABLE IF NOT EXISTS contatos (
         id INT AUTO_INCREMENT PRIMARY KEY,
         nome VARCHAR(255) NOT NULL,
         telefone VARCHAR(20) NOT NULL
      );
   `;
  await pool.query(query);
};

setupDatabase();

export default pool;
