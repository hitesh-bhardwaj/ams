import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Precision = () => {
  useGSAP(() => { 
    gsap.from(
      ".precision-img",
      {
        scrollTrigger: {
          trigger: "precision-container",
          start: "top top",
          end: "bottom top",
        },
        scale: 1.1,
        yPercent:20,
        opacity:0,
        duration: 1.5,
        delay:0.5,
        ease: "power3.out",
      }
    );
  
  });
 
  return (
    <>
      <section className="overflow-hidden relative mobile:py-[10%]" id="precision">
        <div className="w-screen h-full container-lg  overflow-hidden precision-container mobile:h-full tablet:h-[70%]">
          <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw]">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2 data-para-anim className="title-2 aeonik text-center mobile:text-center">Unmatched precision for every procedure</h2>
            </div>

            <div className="flex items-center justify-evenly gap-[0.5vw] w-full mobile:flex-col mobile:gap-[10vw]">
             <div className="h-[40vw] w-[80%] relative left-[-15%] overflow-hidden">
                <Image src="/assets/endolc/precision-product.png" fill alt="Precision Product" className="precision-img"/>
             </div>
             <div  className="absolute top-[45%] right-[10%] flex flex-col items-center justify-center">
                    <p data-para-anim className="font-light text-[2.5vw] text-[#2A2A2A]">Sequential Firing Mechanism
                    <span data-para-anim className="block text-[1.25vw] font-light ">simplifies operation.</span></p>
                </div>
                <div   className="absolute bottom-[15%] right-[25%]">
                    <p data-para-anim  className="font-light text-[2.5vw] text-[#2A2A2A]">Enhanced Control
                    <span data-para-anim className="block text-[1.25vw] font-light">with compact reach.</span></p>
                </div>
            </div>         
          </div>
        </div>
        <div className="absolute h-[100%] w-[130vw] bottom-0 z-[-1]">
                <Image src="/assets/endolc/precision-bg.png"
               fill
                alt="Precision bg"
                className="object-cover"/>
            </div>
      </section>
    </>
  );
};

export default Precision;
