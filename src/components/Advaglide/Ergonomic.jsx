import Image from "next/image";
import React, { useState } from "react";

const Ergonomic = () => {
  const [visibleTextIndex, setVisibleTextIndex] = useState(null);

  return (
    <>
      <section
        className="w-screen h-[55vw] overflow-hidden relative py-[7%] mobile:h-[120vh] tablet:h-[120vw]"
        id="advaglide-ergonomic"
      >
        <div className="w-full container-lg flex justify-center">
          <h2
data-para-anim
            className="title-2 w-[60%] font-light aeonik text-center z-[10] mobile:w-[90%] tablet:text-[7vw] tablet:w-[90%]"
          >
            Revolutionised for the Most Challenging Environments
          </h2>
        </div>
        <div className="absolute w-[70vw] h-[35vw] scale-[1.7] left-0 top-[10%] mt-[5vw] fadeUp mobile:w-[140vw] mobile:h-[140vw] mobile:left-[-55%] mobile:top-[30%] mobile:rotate-[-40deg] fadeUp tablet:top-[30%] tablet:w-[120vw] tablet:h-[50vw] tablet:left-[-30%] tablet:rotate-[-30deg]">
          <Image
            src={"/assets/advaglide/advaglide-features.png"}
            alt="advaglide-features"
            fill
            className="object-contain w-full h-full rotate-[10deg]"
          />
        </div>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[43%] right-[28.5%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:top-[40%] tablet:w-[5vw] tablet:h-[5vw]"
          onMouseEnter={() => setVisibleTextIndex(0)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[49%] right-[37.5%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:top-[50%] mobile:right-[15%] tablet:w-[5vw] tablet:h-[5vw]"
          onMouseEnter={() => setVisibleTextIndex(1)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[58%] right-[44%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:right-[30%] mobile:top-[60%] tablet:w-[5vw] tablet:h-[5vw]"
          onMouseEnter={() => setVisibleTextIndex(2)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[27%] left-[44%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:left-[35%] tablet:w-[5vw] tablet:h-[5vw]"
          onMouseEnter={() => setVisibleTextIndex(3)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[23%] left-[35%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:left-[45%] tablet:w-[5vw] tablet:h-[5vw]"
          onMouseEnter={() => setVisibleTextIndex(4)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[22%] left-[24%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] tablet:w-[5vw] tablet:h-[5vw]"
          onMouseEnter={() => setVisibleTextIndex(5)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <p
          className={`text-[1.4vw] font-light absolute top-[33%] right-[8%] text-[#4a4a4a] transition-opacity duration-300 mobile:text-[5vw] tablet:text-[3.5vw] ${
            visibleTextIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          Precision Balloon Positioning
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[40%] right-[35%] text-[#4a4a4a] transition-opacity duration-300 mobile:text-[5vw] tablet:text-[3.5vw] ${
            visibleTextIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          Optimized for Stability
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[45%] right-[45%] text-[#4a4a4a] transition-opacity duration-300 mobile:text-[5vw] tablet:text-[3.5vw] ${
            visibleTextIndex === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          Enhanced Flexibility
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[55%] left-[35%] text-[#4a4a4a] transition-opacity duration-300 mobile:text-[5vw] tablet:text-[3.5vw] ${
            visibleTextIndex === 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          Innovative Design
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[62%] left-[27%] text-[#4a4a4a] transition-opacity duration-300 mobile:text-[5vw] tablet:text-[3.5vw] ${
            visibleTextIndex === 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          Maximum Durability
        </p>
        <p
          className={`text-[1.4vw] font-light absolute top-[65%] left-[20%] text-[#4a4a4a] transition-opacity duration-300 mobile:text-[5vw] tablet:text-[3.5vw] ${
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
