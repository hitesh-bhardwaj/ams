import React from "react";
import Image from "next/image";

const Ergonomic = () => {
  return (
    <>
      <section className="overflow-hidden  mobile:py-[10%]" id="ergonomic">
        <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
          <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw]">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2
                data-para-anim
                className="title-2 aeonik text-center w-[60%] mobile:text-center"
              >
                Ergonomic Design for comfortable single-hand use
              </h2>
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="h-[50vw] w-[80vw] relative scale-[1] left-[10%]">
                <Image
                  src="/assets/advastapcs/circular-stapler2.png"
                  fill
                  alt="Ergonomic Product"
                  className="object-cover"
                />
              </div>

              <div className="absolute w-[22%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-0 top-0">
                <p className="text-[2.2vw] font-light">Removable Anvil Design</p>
                
              </div>
              <div className="absolute w-[22%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] top-[7%]">
                <p className="text-[2.2vw] font-light">Deeper Housing Capacity</p>
                
              </div>
              <div className="absolute w-[25%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-0 bottom-[10%]">
                <p className="text-[2.2vw] font-light">Superior Hemostatic Effect</p>
              </div>
              <div className="absolute w-[22%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[35%] top-[25%]">
                <p className="text-[2.2vw] font-light">High Staples per Firing</p>
              </div>
              <div className="absolute w-[25%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[2%] top-[40%]">
                <p className="text-[2.2vw] font-light">Adjustable Staple Height Control</p>
              </div>
              <div className="absolute w-[25%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] bottom-[5%]">
                <p className="text-[2.2vw] font-light">Precise Staple Line Formation</p>
              </div>
            </div>

            <div className="absolute h-[100%] w-[100vw]">
              <Image
                src="/assets/advastapcs/ergonomic-bg.png"
                fill
                alt="Ergonomic bg"
                className="object-cover z-[-1]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ergonomic;
