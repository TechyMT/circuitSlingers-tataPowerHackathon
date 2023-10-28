"use client";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight, // Add the sidebar open icon
  faRegular,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../../public/images/close.png";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  const toggleSidebar = () => {
    setActive(!active);
  };

  return (
    <div>
      <div
        className={`min-h-screen flex-col bg-teal-700 p-16 ${
          active ? "hidden" : ""
        }`}
      >
        <div>
          <Image src={image} width={22} height={22} onClick={toggleSidebar} />
        </div>
        <div className="flex items-center justify-center h-24 text-white text-2xl font-bold text-lgthi">
          <Link href="/dashboard"> EcoSense</Link>
        </div>
        <ul className="flex flex-col text-sm py-2">
          {/* <SidebarItem link="/" item="Dashboard"/> */}
          <SidebarItem link="/overview" item="Overview">
            {/* <FontAwesomeIcon icon={faTachometerAlt} /> */}
          </SidebarItem>
          <SidebarItem link="/analysis" item="Analysis" />
          <SidebarItem link="/perform" item="Performance" />
          <SidebarItem link="/system" item="System" />
          <SidebarItem link="/logout" item="Logout" />
        </ul>
      </div>
      <div
        className={`fixed top-1/3 left-2  w-6 mt-28 bg-teal-700 text-white text-xl text-center ${
          active ? "" : "hidden"
        }`}
      >
        <FontAwesomeIcon icon={faArrowRightArrowLeft} onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
