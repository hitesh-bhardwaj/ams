import React,{useEffect} from "react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/free-mode";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SurgicalOutcomes = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".card-up");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger:"#surgicalOutcomes",
              start: "top top",
              end: "bottom bottom",
            },
            opacity: 0,
            y: 50,
            ease: 'power3.out',
            duration: 0.7,
            stagger: 0.5,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);
  return (
    <section id="surgicalOutcomes" className="relative h-screen w-screen mobile:h-full mobile:py-[15%] mobile:pb-[35%] py-[8%] tablet:py-[10%] tablet:h-[80vh]">
      <div className="w-full h-full container-lg">
        <div className="w-full h-full flex flex-col items-start justify-start pb-[2vw] mobile:h-fit tablet:py-0 tablet:gap-[5vw]">
          <div className="absolute top-[10%] text-center flex items-center justify-center w-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center z-[10] mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>
          <div className=" flex items-start justify-start gap-[3vw] z-[5] w-full my-[10vw] h-full tablet:flex-wrap tablet:justify-center">
            <div className="glassmorphism card-up w-[21vw] h-[14vw]  rounded-[2vw] border border-white p-[2vw] tablet:w-[35vw] tablet:h-[25vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.2vw]">ADVA GLIDE SD - Advanced Stent Delivery System, designed with Swiss + Technology</p>
            </div>
            <div className="glassmorphism card-up w-[21vw]  h-[14vw] rounded-[2vw] z-[5] border border-white p-[2vw] tablet:w-[35vw] tablet:h-[25vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.2vw]">ENHANCED Deliverability 
                Excellent force transmission from Hub to Tip Hydrophilic coating enhances navigation in tortuous vessels</p>
            </div>
            <div className="glassmorphism card-up w-[21vw]  h-[14vw] rounded-[2vw] border border-white p-[2vw] tablet:w-[35vw] tablet:h-[25vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.2vw]">PROPRIETORY Shaft Design Highly kink resistant and flexible shaft Balanced Push and Track performance</p>
            </div>
            <div className="glassmorphism card-up w-[21vw]  h-[14vw]  rounded-[2vw] border border-white p-[2vw] z-[5] tablet:w-[35vw] tablet:h-[25vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.2vw]">ENGINEERED for Navigation
                Smooth and Tapered tip design for challenging lesion access Assured confidence in crossing tortuous lesion</p>
            </div>
          </div>
          </div>
          </div>
          <div className="w-[100%] h-[100%] absolute top-0 left-[20%] z-[1]">
                <Image src="/assets/advapro/surgical-bg.png"
                fill
                alt="surgical-bg"
                className=" object-contain"/>
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
