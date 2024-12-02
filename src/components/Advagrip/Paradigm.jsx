import Image from "next/image";
import React from "react";
import { fadeUp } from "../gsapAnimations";

const Paradigm = () => {
  fadeUp()
  return (
    <>
      <section id="paradigm" className="mobile:py-[15%]">
        <div className="container-lg flex flex-col gap-[6vw] justify-center items-center mobile:gap-[15vw]">
          <h2 data-para-anim className="title-2 aeonik w-[60%] text-center mobile:w-[90%] tablet:w-[70%]">
            Changing The Paradigm of Knotless Suture Technology
          </h2>
          <div className="w-full h-full flex gap-[2vw] mobile:flex-col mobile:gap-[7vw] ">
            <div className="w-[50%] h-[40vw] glassmorphism rounded-[2.5vw] px-[5vw] py-[3vw] pb-[10vw] relative flex flex-col gap-[3vw] border font-light mobile:w-[90vw] mobile:h-[150vw] mobile:rounded-[9vw] mobile:justify-end overflow-hidden fadeUp">
              <h4 data-para-anim className="aeonik text-[2.5vw] mobile:text-[8vw] mobile:text-center mobile:leading-[1.2] tablet:text-[3vw] ">
                Unmatched Precision With ADVALLOY Needles
              </h4>
              <div className="pl-[1.5vw] flex flex-col gap-[1.5vw] mobile:gap-[4vw] mobile:mt-[5vw] tablet:text-[2.2vw] text-[1.7vw]  ">
                <div className="">
                  <p data-para-anim className=" aeonik leading-[1.2] mobile:text-[6vw] mobile:text-center w-[40%] mobile:w-full ">SECURITY
                  </p>
                  <p data-para-anim className=" aeonik leading-[1.2] mobile:text-[6vw] mobile:text-center w-full mobile:w-full">Swage Integrity.</p>
                </div>
                <div className="">
                  <p data-para-anim className=" aeonik leading-[1.2] mobile:text-[6vw] mobile:text-center w-[40%] mobile:w-full">STRENGTH

                 </p>
                 <p data-para-anim className="aeonik leading-[1.2] mobile:text-[6vw] mobile:text-center w-full mobile:w-full"> Supreme Durability.</p>
                </div>
                <div className="">
                  <p data-para-anim className=" aeonik leading-[1.2] mobile:text-[6vw] mobile:text-center w-[40%] mobile:w-full">SHARPNESS
                    
                  </p>
                  <p data-para-anim className=" aeonik leading-[1.2] mobile:text-[6vw] mobile:text-center w-full mobile:w-full">Exceptional Penetration.</p>
                </div>
              </div>
              <div className="w-[15vw] h-[34vw] absolute right-[10%] top-0 mobile:w-[60vw] mobile:h-[80vw] mobile:right-[5%] mobile:top-[-15%] fadeUp">
                <Image fill src={"/assets/advagrip/paradigm-1.png"} alt="paradigm-1" className="mobile:rotate-[0deg]"/>

              </div>
            </div>
            <div className="w-[50%] h-[40vw] glassmorphism rounded-[2.5vw] px-[5vw] py-[3vw] pb-[10vw] relative flex flex-col gap-[3vw] border font-light mobile:w-[90vw] mobile:h-[150vw] mobile:rounded-[9vw] mobile:justify-end overflow-hidden fadeUp">
              <h4 data-para-anim className="aeonik text-[2.5vw] mobile:text-[8vw] mobile:text-center mobile:leading-[1.2] tablet:text-[3vw]">
              ADVAGRIP: Advanced Packaging with ADVATRAY
              </h4>
              
              <div className="w-[40vw] h-[28vw] absolute left-[50%] translate-x-[-50%] top-[30%] mobile:w-[120vw] mobile:h-[80vw] mobile:top-0 mobile:left-[40%]">
                <Image fill src={"/assets/advagrip/paradigm-2.png"} alt=""/>

              </div>
              <div className="w-[8vw] h-[8vw] absolute left-[10%] top-[55%] mobile:w-[30vw] mobile:h-[30vw] mobile:left-[50%] mobile:top-[42%]">
                <Image fill src={"/assets/advagrip/paradigm-3.png"} alt=""/>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paradigm;

