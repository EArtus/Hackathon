"use client"; // Adicione esta linha no topo

import React, { useState } from 'react';
import api from '../services/api';

const CadastrarAvaliadores: React.FC = () => {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/avaliadores', { nome, login, senha });
      setNome('');
      setLogin('');
      setSenha('');
      alert('Avaliador cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar avaliador:', error);
      alert('Erro ao cadastrar avaliador');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastrar Avaliadores</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Login"
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="border rounded p-2 w-full text-black"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastrarAvaliadores;
