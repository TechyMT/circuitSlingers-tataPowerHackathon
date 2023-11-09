import React from "react";
import { Avatar } from "@nextui-org/avatar";
import image from "../../../public/images/storySet.png";
import Image from "next/image";

const DashNav = () => {
  return (
    <>
      <div className="bg-black flex flex-wrap ">
        <div className="flex ml-8 ">
          <Image src={image} alt="storyset" width={100} height={60} />
        </div>
        <div className="flex flex-col p-8 rounded-sm">
          <div className="text-3xl text-white">Hello, Tata Power</div>
          <div className="p text-white">
            Hope this insights will help you to make better decisions
          </div>
        </div>
              <div className="flex items-center mr-8 ml-auto">
                  {/* <Avatar
                        src="https://avatars.githubusercontent.com/u/39870448?v=4"
                        
                      alt="user"
                    /> */}
        </div>
      </div>
    </>
  );
};

export default DashNav;
