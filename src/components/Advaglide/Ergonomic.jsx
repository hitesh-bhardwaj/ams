import Image from "next/image";
import React, { useState } from "react";

const Ergonomic = () => {
  const [visibleTextIndex, setVisibleTextIndex] = useState(null);

  return (
    <>
      <section
        className="w-screen h-[55vw] overflow-hidden relative py-[7%]"
        id="advaglide-ergonomic"
      >
        <div className="w-full container-lg flex justify-center">
          <h2
            data-para-anim
            className="title-2 w-[60%] font-light aeonik text-center z-[10]"
          >
            Revolutionised for the Most Challenging Environments
          </h2>
        </div>
        <div className="absolute w-[70vw] h-[35vw] scale-[1.7] left-0 top-[10%] mt-[5vw] fadeUp">
          <Image
            src={"/assets/advaglide/advaglide-features.png"}
            alt="advaglide-features"
            fill
            className="object-contain w-full h-full rotate-[10deg]"
          />
        </div>

        {/* Dots with individual hover logic */}
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[36%] right-[28.5%] flex justify-center items-center cursor-pointer border"
          onMouseEnter={() => setVisibleTextIndex(0)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[47%] right-[40.5%] flex justify-center items-center cursor-pointer border"
          onMouseEnter={() => setVisibleTextIndex(1)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[54%] right-[44%] flex justify-center items-center cursor-pointer border"
          onMouseEnter={() => setVisibleTextIndex(2)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[29%] left-[41%] flex justify-center items-center cursor-pointer border"
          onMouseEnter={() => setVisibleTextIndex(3)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[25%] left-[31%] flex justify-center items-center cursor-pointer border"
          onMouseEnter={() => setVisibleTextIndex(4)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[25%] left-[24%] flex justify-center items-center cursor-pointer border"
          onMouseEnter={() => setVisibleTextIndex(5)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full"></span>
        </span>

        {/* Individual text elements */}
        <p
          className={`text-[1.4vw] font-light absolute top-[33%] right-[8%] text-[#4a4a4a] transition-opacity duration-300 ${
            visibleTextIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          Precision Balloon Positioning
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[40%] right-[35%] text-[#4a4a4a] transition-opacity duration-300 ${
            visibleTextIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          Optimized for Stability
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[40%] right-[40%] text-[#4a4a4a] transition-opacity duration-300 ${
            visibleTextIndex === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          Enhanced Flexibility
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[55%] left-[35%] text-[#4a4a4a] transition-opacity duration-300 ${
            visibleTextIndex === 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          Innovative Design
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[62%] left-[24%] text-[#4a4a4a] transition-opacity duration-300 ${
            visibleTextIndex === 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          Maximum Durability
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[60%] left-[20%] text-[#4a4a4a] transition-opacity duration-300 ${
            visibleTextIndex === 5 ? "opacity-100" : "opacity-0"
          }`}
        >
          Seamless Integration
        </p>
      </section>
    </>
  );
};

export default Ergonomic;
