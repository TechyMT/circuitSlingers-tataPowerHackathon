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
        className="min-h-fit min-w-full absolute top-12 -z-10 opacity-70"
      />

      <div className="justify-center p-60">
        <div className="h1 flex mx-auto justify-center text-4xl text-bold pb-10 text-white">
          Lighting Up the World,
        </div>
        <div className="h1 mx-auto flex justify-center text-3xl text-bold pb-10">
          One Panel at a Time.
        </div>
        <InputComponent />
      </div>
      <div className="">{/* <Image src={ waves } alt = "wavey"/> */}</div>
    </div>
  );
};
export default Hero;
