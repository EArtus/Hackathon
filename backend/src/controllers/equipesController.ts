import { Request, Response } from 'express';

// Função para cadastrar equipe
export const cadastrarEquipe = (req: Request, res: Response) => {
  // Lógica para cadastrar equipe
  res.status(201).json({ message: 'Equipe cadastrada com sucesso' });
};

// Função para buscar equipes
export const buscarEquipes = (req: Request, res: Response) => {
  // Lógica para buscar equipes
  res.status(200).json({ message: 'Lista de equipes' });
};

// Função para excluir equipe
export const excluirEquipe = (req: Request, res: Response) => {
  // Lógica para excluir equipe
  const { id } = req.params;
  res.status(200).json({ message: `Equipe com id ${id} excluída` });
};
