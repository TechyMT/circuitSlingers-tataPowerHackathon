import React from "react";

import Sidebar from "./Sidebar";
import FourCards from "./FourCards";

const Overview = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className="p-10 text-4xl">
                <h1>Overview</h1>
                <FourCards w={ 20 } />
            </div>
        </div>
        
    )
}

export default Overview;