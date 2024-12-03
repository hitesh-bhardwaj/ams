import Image from "next/image";
import React from "react";

const Ergonomic = () => {
  return (
    <>
      <section
        className="w-screen overflow-hidden relative h-full py-[7%]"
        id="advaglide-ergonomic"
      >
        <div className="w-full container-lg flex justify-center">
          <h2 data-para-anim className="title-2 w-[60%] font-light aeonik text-center z-[10]">
            Revolutionised for the Most Challenging Environments
          </h2>
        </div>
        <div className="relative w-[80vw] h-[35vw] scale-[2.2] left-[-15%] mt-[5vw] fadeUp">
            <Image src={"/assets/advaglide/advaglide-features.png"} alt="advaglide-features" fill className="object-contain w-full h-full rotate-[10deg]"/>

        </div>
        <span className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[44%] left-[63%] flex justify-center items-center border"><span className="w-[0.5vw] h-[0.5vw] bg-blue-700 rounded-full"></span></span>
        <div className="absolute top-0 left-0 w-screen h-full z-[-1]">
          <Image src={"/assets/advaglide/advaglide-ergonomic-bg.png"} alt="" fill className="object-cover w-full h-full"/>

        </div>
        <div>
          <p className="text-[1.4vw] font-light absolute top-[50%] right-[10%] text-gray-600">Precision Balloon Positioning</p>
        </div>
      </section>
    </>
  );
};

export default Ergonomic;
