import React from "react";
import InputComponent from "./InputComponent";
import Image from "next/image";
import waves from '../../../public/waves.png'
const Hero = () => {
    return (
        <div className="flex">
            <div className="justify-center p-60">
                <div className="h1 mx-auto justify-center text-4xl text-bold pb-10">Lighting Up the World,</div>
                <div className="h1 mx-auto justify-center text-3xl text-bold pb-10">One Panel at a Time.</div>
                <InputComponent/>
            </div>
            <div className="">
                {/* <Image src={ waves } alt = "wavey"/> */}
            </div>
        </div>
    )
}
export default Hero;