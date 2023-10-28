"use client"
import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
  };

  return (
    <div className="w-1/3 mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
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
      <button onClick={handleSignup} className="w-full p-2 bg-teal-700 text-white rounded">
        Sign up
          </button>
          <div className='p-5 justify-center'>Have an account? <a className='text-xm  text-teal-700 hover:text-gray-600' href="/login">LogIn</a>
        </div>
    </div>
  );
};

export default Signup;
