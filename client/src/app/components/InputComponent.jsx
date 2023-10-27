import React from "react";

const InputComponent = () => {
  return (
    <div className="flex justify-center p-80 flex-col gap-20">
      <div className="h1 text-4xl flex justify-center">Hello</div>

      <div className="justify-center flex">
        <input
          type="text"
          name="text"
          className="focus:outline-none bg-gray-700 text-white px-4 py-2 rounded-lg border-none max-w-full transition-transform transition-duration-400 focus:ring-2 focus:ring-green-700 hover:ring-2 hover:ring-green-400"
          placeholder="Ask me Anything"
        />
      </div>
    </div>
  );
};

export default InputComponent;
