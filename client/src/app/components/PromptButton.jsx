import React from "react";
const PromptButton = ({onClick}) => {
    return (
        <div>
            <button class="cursor-pointer group relative flex gap-1.5 px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md" onClick={onClick}>Ask
            </button>
        </div>
    )
}

export default PromptButton;