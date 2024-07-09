import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Sistema de Avaliação para Hackathon</h1>
      <div className="flex justify-end mb-4">
        <Link href="/login" className="bg-blue-500 text-white rounded p-2">
          Login
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">Total de Equipes Cadastradas</h2>
          {/* Exibir número total */}
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">Total de Avaliadores Cadastrados</h2>
          {/* Exibir número total */}
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-semibold">Total de Notas Atribuídas</h2>
          {/* Exibir número total */}
        </div>
      </div>
    </div>
  );
};

export default Home;
