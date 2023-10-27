import React from "react";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SunButton from "./SunButton";
const InfoCards = (props) => {
    return (
        <div className="card m-auto text-gray-300 w-[clamp(260px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-lg overflow-hidden relative">
        <div className="px-8 py-10">
                <div className=" group-hover:shadow-teal-900 transition-all">
          </div>
          <div className="uppercase font-bold text-xl">
            
          </div>
          <div className="text-gray-300 uppercase tracking-widest">
            {props.name}
          </div>
          <div className="text-gray-400 mt-8">
                    <p>{ props.desc}</p>
          </div>
            </div>
            <div className="p-4">
                <SunButton/>
            </div>
       
  
        <div class="h-2 w-full bg-gradient-to-l via-teal-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
        <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-teal-950 group-hover:via-teal-500 w-[70%] m-auto rounded transition-all"></div>
      </div>
    )
}

export default InfoCards;