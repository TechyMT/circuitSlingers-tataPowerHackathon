import React from "react";
import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faSearch, faTachometerAlt, faCogs } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="min-h-screen flex-col bg-teal-700 p-16">
            <div className="flex items-center justify-center h-24 text-white text-2xl font-bold text-lgthi">EcoSense</div>
            <ul className="flex flex-col text-sm py-2">
                {/* <SidebarItem link="/" item="Dashboard"/> */}
                <SidebarItem link="/overview" item="Overview">
                    {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
                </SidebarItem>
                <SidebarItem link="/analysis" item = "Analysis"/>
                <SidebarItem link="/perform" item = "Performance" />
                <SidebarItem link="/system" item="System" />
                <SidebarItem link="/logout" item="Logout"/>
            </ul>
        </div>
    )
}

export default Sidebar;