import React from "react";

const SunButton = () => {
    return (
        <div>
            <button class="border-black hover:scale-95 duration-300 relative group cursor-pointer text-black  overflow-hidden h-8 w-32 rounded-md bg-yellow-800 p-2 flex justify-center items-center font-extrabold">

            <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-yellow-900"></div>
            <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-yellow-800"></div>
            <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-yellow-600"></div>
            <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-yellow-400"></div>
            <p class="z-10">Read more</p>
            </button>
        </div>
    )
}
export default SunButton;