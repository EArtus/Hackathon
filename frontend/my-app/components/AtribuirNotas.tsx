"use client"; // Adicione esta linha no topo

import React, { useState } from 'react';

const AtribuirNotas: React.FC = () => {
  const [notas, setNotas] = useState({
    originalidade: 0,
    impacto: 0,
    tecnica: 0,
    apresentacao: 0,
    viabilidade: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotas({
      ...notas,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para salvar notas
    console.log(notas);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Atribuir Notas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Originalidade do Projeto</label>
          <input
            type="number"
            name="originalidade"
            value={notas.originalidade}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            min="0"
            max="10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Impacto Potencial</label>
          <input
            type="number"
            name="impacto"
            value={notas.impacto}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            min="0"
            max="10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Execução Técnica</label>
          <input
            type="number"
            name="tecnica"
            value={notas.tecnica}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            min="0"
            max="10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Apresentação e Demonstração</label>
          <input
            type="number"
            name="apresentacao"
            value={notas.apresentacao}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            min="0"
            max="10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Viabilidade e Sustentabilidade</label>
          <input
            type="number"
            name="viabilidade"
            value={notas.viabilidade}
            onChange={handleChange}
            className="border rounded p-2 w-full text-black"
            min="0"
            max="10"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AtribuirNotas;
