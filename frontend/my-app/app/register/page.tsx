"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', { username, password });
      if (response.status === 201) {
        alert('User created successfully');
        router.push('/login'); // Redirecionar para a página de login após registro
      }
    } catch (error) {
      alert('Erro ao criar usuário');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Registrar</h1>
      <div className="mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
          className="border rounded p-2 w-full text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="border rounded p-2 w-full text-black"
        />
      </div>
      <button onClick={handleRegister} className="bg-blue-500 text-white rounded p-2">
        Registrar
      </button>
    </div>
  );
};

export default Register;
