import { Request, Response } from 'express';

// Função para cadastrar avaliação
export const cadastrarAvaliacao = (req: Request, res: Response) => {
  // Lógica para cadastrar avaliação
  res.status(201).json({ message: 'Avaliação cadastrada com sucesso' });
};

// Função para buscar avaliações
export const buscarAvaliacoes = (req: Request, res: Response) => {
  // Lógica para buscar avaliações
  res.status(200).json({ message: 'Lista de avaliações' });
};

// Função para excluir avaliação
export const excluirAvaliacao = (req: Request, res: Response) => {
  // Lógica para excluir avaliação
  const { id } = req.params;
  res.status(200).json({ message: `Avaliação com id ${id} excluída` });
};
