"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excluirAvaliacao = exports.buscarAvaliacoes = exports.cadastrarAvaliacao = void 0;
// Função para cadastrar avaliação
const cadastrarAvaliacao = (req, res) => {
    // Lógica para cadastrar avaliação
    res.status(201).json({ message: 'Avaliação cadastrada com sucesso' });
};
exports.cadastrarAvaliacao = cadastrarAvaliacao;
// Função para buscar avaliações
const buscarAvaliacoes = (req, res) => {
    // Lógica para buscar avaliações
    res.status(200).json({ message: 'Lista de avaliações' });
};
exports.buscarAvaliacoes = buscarAvaliacoes;
// Função para excluir avaliação
const excluirAvaliacao = (req, res) => {
    // Lógica para excluir avaliação
    const { id } = req.params;
    res.status(200).json({ message: `Avaliação com id ${id} excluída` });
};
exports.excluirAvaliacao = excluirAvaliacao;
