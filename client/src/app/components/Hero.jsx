import React from "react";
import InputComponent from "./InputComponent";
import Image from "next/image";
import cover from "../../../public/images/cover.gif";
const Hero = () => {
  return (
    <div>
      <Image
        src={cover}
        alt="cover"
        className="min-w-full absolute top-22 -z-10 max-h-full"
        width={0}
        height={0}
      />

      <div className="justify-center p-60 ">
        <div className="bg-white flex pt-8 pb-8 flex-col opacity-90 rounded-md">
          <div className="h1 flex mx-auto justify-start text-7xl text-bold pb-10 text-purple-900">
            Lighting Up the World!
          </div>
          <div className="h1  flex justify-center text-3xl text-bold pb-10">
            One Panel at a Time.
          </div>
          <div>
            <InputComponent />
          </div>
        </div>
      </div>
      <div className="">{/* <Image src={ waves } alt = "wavey"/> */}</div>
    </div>
  );
};
export default Hero;
