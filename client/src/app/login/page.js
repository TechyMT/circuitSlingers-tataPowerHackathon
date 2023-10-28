"use client"
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <div className="w-1/3 mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 rounded border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 rounded border"
      />
      <button onClick={handleLogin} className="w-full p-2 bg-teal-700 text-white rounded">
        Login
          </button>
          <div className='p-5 justify-center'>
              Don't have an account? <a className='text-xm  text-teal-700 hover:text-gray-600' href="/signup">SignUp</a>
        </div>
    </div>
  );
};

export default Login;
