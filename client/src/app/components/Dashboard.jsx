import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import FourCards from "./FourCards";

const Dashboard = () => {
    return (
        <div className="flex">
            <div>
            <Sidebar/>
            </div>
            <FourCards w={ 100 } />
        </div>
       
    )
}

export default Dashboard;