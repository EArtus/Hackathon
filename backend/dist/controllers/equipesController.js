"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirEquipe = exports.buscarEquipes = exports.cadastrarEquipe = void 0;
// Função para cadastrar equipe
const cadastrarEquipe = (req, res) => {
    // Lógica para cadastrar equipe
    res.status(201).json({ message: 'Equipe cadastrada com sucesso' });
};
exports.cadastrarEquipe = cadastrarEquipe;
// Função para buscar equipes
const buscarEquipes = (req, res) => {
    // Lógica para buscar equipes
    res.status(200).json({ message: 'Lista de equipes' });
};
exports.buscarEquipes = buscarEquipes;
// Função para excluir equipe
const excluirEquipe = (req, res) => {
    // Lógica para excluir equipe
    const { id } = req.params;
    res.status(200).json({ message: `Equipe com id ${id} excluída` });
};
exports.excluirEquipe = excluirEquipe;
