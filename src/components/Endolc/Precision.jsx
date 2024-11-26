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
      <section className="overflow-hidden relative mobile:py-[10%] " id="precision">
        <div className="w-screen h-full container-lg  overflow-hidden precision-container mobile:h-[120vh] tablet:h-[70%]">
          <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] mobile:static">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2 data-para-anim className="title-2 aeonik text-center mobile:text-center">Unmatched precision for every procedure</h2>
            </div>

            <div className="flex items-center justify-evenly gap-[1vw] w-full mobile:flex-col mobile:gap-[10vw]">
             <div className="h-[40vw] w-[80%] relative left-[-15%] mobile:absolute mobile:top-[35%] mobile:left-0 mobile:w-[170vw] mobile:h-[50vh]">
                <Image src="/assets/endolc/precision-product.png" fill alt="Precision Product" className="object-contain mobile:rotate-[-20deg] precision-img " />
                <div className="absolute top-[30%] right-[-20%] mobile:top-[-25%] mobile:right-[48%]">
                    <p className="font-light text-[2.5vw] text-[#2A2A2A] mobile:text-[9vw] mobile:w-[80vw] mobile:text-center mobile:leading-[1.2]">Sequential Firing Mechanism
                    <span className="block text-[1.25vw] font-light leading-[1.2] mobile:text-[4vw] ">simplifies operation.</span></p>
                </div>
                <div   className="absolute bottom-[20%] right-0 mobile:right-[20%] mobile:bottom-[-35%] mobile:w-full mobile:flex mobile:flex-col mobile:items-center">
                    <p data-para-anim  className="font-light text-[2.5vw] text-[#2A2A2A] mobile:text-[9vw] mobile:leading-[1.2]">Enhanced Control</p>
                    <p data-para-anim className="block text-[1.25vw] font-light mobile:text-[4vw] mobile:text-center">with compact reach.</p>
                </div>
            </div>         
          </div>
        </div>
            </div>
        <div className="absolute h-[100%] w-[130vw] bottom-0 mobile:left-0 z-[-1]">
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
