import React from "react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/free-mode";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SurgicalOutcomes = () => {
  return (
    <section id="surgical-outcomes" className="relative h-screen mobile:h-full mobile:py-[15%] mobile:pb-[35%] py-[8%] tablet:py-[10%]">
      <div className="w-screen h-full container-lg">
        <div className="w-full h-full flex flex-col items-start justify-start pb-[2vw] mobile:h-fit tablet:py-0 tablet:gap-[5vw]">
          <div className="w-full  flex flex-col items-center justify-start mb-[3vw] mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>
          <div className=" flex items-start justify-start gap-[3vw] w-full my-[5vw] h-full">
            <div className="glassmorphism w-[21vw] h-[16.5vw]  rounded-[2vw] border border-white p-[2vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A]">ADVA GLIDE SD - Advanced Stent Delivery System, designed with Swiss + Technology</p>
            </div>
            <div className="glassmorphism w-[21vw]  h-[16.5vw] rounded-[2vw] border border-white p-[2vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A]">ENHANCED Deliverability 
                Excellent force transmission from Hub to Tip Hydrophilic coating enhances navigation in tortuous vessels</p>
            </div>
            <div className="glassmorphism w-[21vw]  h-[16.5vw] rounded-[2vw] border border-white p-[2vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A]">PROPRIETORY Shaft Design Highly kink resistant and flexible shaft Balanced Push and Track performance</p>
            </div>
            <div className="glassmorphism w-[21vw]  h-[16.5vw]  rounded-[2vw] border border-white p-[2vw] z-[5]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A]">ENGINEERED for Navigation
                Smooth and Tapered tip design for challenging lesion access Assured confidence in crossing tortuous lesion</p>
            </div>
          </div>
          </div>
          </div>
          <div className="w-[100%] h-[100%] absolute top-0 left-0 z-[1]">
                <Image src="/assets/advapro/surgical-bg.png"
                fill
                alt="surgical-bg"/>
                </div>
                <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1]">
                <Image src="/assets/advapro/surgical-bg-1.png"
                fill
                alt="surgical-bg"/>
                </div>
    </section>
  );
};

export default SurgicalOutcomes;
