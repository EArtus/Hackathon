"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.status === 200) {
        localStorage.setItem('loggedIn', 'true');
        router.push('/atribuir-notas'); // Redirecionar para a página de atribuição de notas após login
      }
    } catch (error) {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
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
      <button onClick={handleLogin} className="bg-blue-500 text-white rounded p-2">
        Login
      </button>
    </div>
  );
};

export default Login;
