"use client"; // Adicione esta linha no topo

import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Avaliador {
  id: number;
  nome: string;
}

const ListarAvaliadores: React.FC = () => {
  const [avaliadores, setAvaliadores] = useState<Avaliador[]>([]);

  useEffect(() => {
    api.get('/avaliadores')
      .then(response => {
        setAvaliadores(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar avaliadores:', error);
      });
  }, []);

  const handleDelete = (id: number) => {
    api.delete(`/avaliadores/${id}`)
      .then(() => {
        setAvaliadores(avaliadores.filter(avaliador => avaliador.id !== id));
      })
      .catch(error => {
        console.error('Erro ao excluir avaliador:', error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Listar Avaliadores</h1>
      <ul>
        {avaliadores.map((avaliador) => (
          <li key={avaliador.id} className="flex justify-between items-center mb-2">
            {avaliador.nome}
            <button 
              onClick={() => handleDelete(avaliador.id)} 
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarAvaliadores;
