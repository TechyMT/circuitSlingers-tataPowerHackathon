import React from "react";
import Sidebar from "./Sidebar";
import FourCards from "./FourCards";

const System = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className="p-10">
                <h1>Overview</h1>
                <FourCards w={ 20 } />
            </div>
        </div>
        
    )
}

export default System;