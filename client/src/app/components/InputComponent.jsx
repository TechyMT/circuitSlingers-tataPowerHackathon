"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";

const InputComponent = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    console.log(query);
    setQuery(e.target.value);
  };

  const handleClick = async (prompt) => {
    const queryWithoutSpaces = prompt.split(" ").join("");
    console.log(queryWithoutSpaces);
    try {
      const responsellama = await axios.get(
        `http://dbb1-35-222-231-104.ngrok-free.app/get/${queryWithoutSpaces}`
      );

      console.log(responsellama);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex justify-center flex-col gap-20">
      <div className="justify-center flex gap-10">
        <input
          values={query}
          type="text"
          name="text"
          className="focus:outline-none bg-gray-700 text-white px-4 py-2 rounded-lg border-none max-w-full transition-transform transition-duration-400 focus:ring-2 focus:ring-purple-700 hover:ring-2 hover:purple-green-700"
          placeholder="Ask me Anything"
          onChange={handleChange}
        />
        <button
          className="bg-gray-800 rounded text-white p-2"
          onClick={async () => {
            await handleClick(query);
          }}
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default InputComponent;
