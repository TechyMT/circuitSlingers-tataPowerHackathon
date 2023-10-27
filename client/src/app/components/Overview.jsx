import React from "react";

import Sidebar from "./Sidebar";


const Overview = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className="p-10">
                <h1>Overview</h1>
               
            </div>
        </div>
        
    )
}

export default Overview;