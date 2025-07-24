'use client';

import { useState } from 'react';
import { registerUser } from 'src/lib/appwriteAuth';

export default function SignUp() { //prioridad al importarse a otros, solo puede haber uno por archivo
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await registerUser(email, password, name);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Algo salió mal');
    }
  };

  return ( //jsx moment yall, aka unpure html
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-dark-1 text-white">
      <h1 className="text-3xl font-bold mb-6">Regístrate</h1>

      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded bg-dark-2 text-white border border-gray-600"
          required
        />

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-dark-2 text-white border border-gray-600"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-dark-2 text-white border border-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90 transition"
        >
          Registrarse
        </button>

        {error && <p className="text-red-400 mt-2">{error}</p>}
        {success && <p className="text-green-400 mt-2">¡Registro exitoso! 🎉</p>}
      </form>
    </div>
  );
}
