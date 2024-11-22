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
                Ergonomic Design For Comfortable Single-Hand Use
              </h2>
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="h-[50vw] w-[80vw] relative ">
                <Image
                  src="/assets/poweredlc/ergonomic-lc2.png"
                  fill
                  alt="Ergonomic Product"
                  className="object-cover"
                />
              </div>

              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[5%] top-[5%]">
                <p className="text-[2.2vw] font-light">Rotating Knob:</p>
                <p className="text-[1.675vw] font-light">Effortless reload angulation adjustment.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[20%] top-[7%]">
                <p className="text-[2.2vw] font-light">Smart Reload:</p>
                <p className="text-[1.675vw] font-light">Convenient reload unload switch.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[20%] top-[40%]">
                <p className="text-[2.2vw] font-light">Battery Life:</p>
                <p className="text-[1.675vw] font-light"> Efficient for up to multiple firings.</p>
              </div>
              <div className="absolute w-[35%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-0 bottom-[10%]">
                <p className="text-[2.2vw] font-light">User Controls:</p>
                <p className="text-[1.675vw] font-light">Safety button for firing; simple controls for jaw, close, and fire functions.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[5%] top-[50%]">
                <p className="text-[2.2vw] font-light">Actuated Motor:</p>
                <p className="text-[1.675vw] font-light">Ensures precise firing across all tissue thickness.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] bottom-[5%]">
                <p className="text-[2.2vw] font-light">Atraumatic Tapered Tip:</p>
                <p className="text-[1.675vw] font-light"> for delicate tissue management.</p>
              </div>
            </div>

            <div className="absolute h-[100%] w-[100vw]">
              <Image
                src="/assets/poweredlc/ergonomic-bg.png"
                fill
                alt="Precision bg"
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
