import React from "react";
import Image from "next/image";
import city1 from "../../../public/images/city1.gif";

const Collaboration = () => {
  return (
    <div className="flex justify-between p-32">
      <div className="flex items-center">
        <Image src={city1} width={1200} height={1200} unoptimized={true} />
      </div>
      <div className="flex flex-col ml-auto">
        <div className="text-4xl mx-auto mt-8 text-purple-700 font-bold">
          Our Purpose
        </div>
        <div className="p-20 flex mx-auto justify-end">
          <div className="pl-10 lg break-words">
            Climate change is our responsibility. We believe everyone deserves a
            future on our home planet. Swimming in our rivers, walking in our
            forests or simply breathing clean air should always be an option:
            for us, for our children and for their children. We know that to
            keep the planet our home we have to get to 100% renewable energy. So
            that's what we are working towards every single day.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
