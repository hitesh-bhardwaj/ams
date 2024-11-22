import React from "react";
import Image from "next/image";

const Think = () => {
  return (
    <section className="overflow-hidden pt-[8%]  mobile:py-[10%] h-full w-full relative" id="think">
      <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
        <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw] ">
          <div className="w-full h-full flex flex-col items-center mb-[4vw] justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Think Intelligent. Think ADVASTAP.
            </h2>
          </div>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <div className="h-[30vw] w-[50vw] scale-[1] relative left-[30%] -top-[5%]">
              <Image
                src="/assets/skinstapler/skin-stapler2.png"
                fill
                alt="Ergonomic Product"
                className="object-contain"
              />
            </div>
          </div>

          <div className="absolute left-[5%] flex flex-col items-start justify-center gap-[3vw]">
            <div className="px-[3vw] py-[1vw] border-[2px] border-[#3A87C8] rounded-[1vw] flex items-center justify-center gap-[2vw] my-[1vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point"/>
                <p className="text-[2.4vw] font-light text-[#2A2A2A]">User-Centric Intuitive Design</p>
            </div>
            <div className="px-[3vw]  flex items-center justify-center gap-[2vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point"/>
                <p className="text-[1.675vw]  font-light text-[#2A2A2A]">Versatile Flexibility</p>

            </div>
            <div className="px-[3vw]  flex items-center justify-center gap-[2vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point"/>
                <p className="text-[1.675vw]  font-light text-[#2A2A2A]">High Quality Construction</p>

            </div>
            <div className="px-[3vw]  flex items-center justify-center gap-[2vw]">
                <Image src="/assets/skinstapler/point.png" height={50} width={50} alt="point"/>
                <p className="text-[1.675vw]  font-light text-[#2A2A2A]">Optimized Cosmesis</p>

            </div>
          </div>
        </div>
      </div>
          <div className="absolute h-[100%] w-[100vw] top-0 left-0">
            <Image
              src="/assets/poweredlc/ergonomic-bg.png"
              fill
              alt="Precision bg"
              className="object-cover z-[-1]"
            />
          </div>
    </section>
  );
};

export default Think;
