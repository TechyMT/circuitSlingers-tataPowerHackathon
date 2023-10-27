import React from "react";

const SidebarItem = (props) => {
    return (
        <>
            <li>
                <a href={props.link} className="flex items-center text-white text-m hover:bg-gray-700 hover:rounded-lg px-6 py-6">
                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 1214 4L19 7">
                        </path>
                    </svg>
                        {props.item}
                </a>
            </li>
        </>
    )
}

export default SidebarItem;