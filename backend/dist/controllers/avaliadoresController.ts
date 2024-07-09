import { Request, Response } from 'express';
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

// Configurar pool de conexão com o banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Função para cadastrar avaliador
export const cadastrarAvaliador = async (req: Request, res: Response) => {
  const { nome, login, senha } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const result = await pool.query(
      'INSERT INTO avaliadores (nome, login, senha) VALUES ($1, $2, $3) RETURNING *',
      [nome, login, hashedPassword]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar avaliador', error });
  }
};

// Função para buscar avaliadores
export const buscarAvaliadores = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT id, nome, login FROM avaliadores');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar avaliadores', error });
  }
};

// Função para excluir avaliador
export const excluirAvaliador = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM avaliadores WHERE id = $1', [id]);
    res.status(200).json({ message: `Avaliador com id ${id} excluído` });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir avaliador', error });
  }
};
