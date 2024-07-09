import { Request, Response } from 'express';

// Função para cadastrar avaliador
export const cadastrarAvaliador = (req: Request, res: Response) => {
  // Lógica para cadastrar avaliador
  res.status(201).json({ message: 'Avaliador cadastrado com sucesso' });
};

// Função para buscar avaliadores
export const buscarAvaliadores = (req: Request, res: Response) => {
  // Lógica para buscar avaliadores
  res.status(200).json({ message: 'Lista de avaliadores' });
};

// Função para excluir avaliador
export const excluirAvaliador = (req: Request, res: Response) => {
  // Lógica para excluir avaliador
  const { id } = req.params;
  res.status(200).json({ message: `Avaliador com id ${id} excluído` });
};
