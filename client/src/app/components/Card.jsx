import React from "react";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = (props) => {
  return (
    <div className="card text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-4 border-t-2 border-gray-900 rounded-md overflow-hidden relative">
      <div className="px-2 py-2 flex justify-evenly">
        <div className="items-center flex">
          <div className=" w-10 h-18 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all">
            <FontAwesomeIcon
              icon={props.icon || faPiggyBank}
              className="text-yellow-500"
              size="2xl"
            />
          </div>
        </div>
        <div>
          <div className="uppercase font-bold text-xl">{props.name}</div>
          <div className="text-gray-300 uppercase tracking-widest">
            {props.value}
          </div>
        </div>
      </div>

      <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
    </div>
  );
};
export default Cards;
