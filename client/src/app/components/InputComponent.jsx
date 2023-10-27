import React from 'react';

const InputComponent = () => {
  return (
    <input
      type="text"
      name="text"
      className="focus:outline-none bg-gray-700 text-white px-4 py-2 rounded-lg border-none max-w-190 transition-transform transition-duration-400 focus:ring-2 focus:ring-green-500 hover:ring-2 hover:ring-green-300"
      placeholder="Ask me Anything"
    />
  );
};

export default InputComponent;
