/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  paraAnim();
  

  //   useGSAP(() => {
  //     if(globalThis.innerWidth>1024){
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".hero-container",
  //       },
  //     });

  //     tl.fromTo(
  //       ".hero-img",
  //       {
  //         xPercent:100
  //       },
  //       {
  //        xPercent:10,
  //         duration: 1,
  //         delay: 0.1,
  //         ease: "power3.out",
  //       }
  //     );
  //     tl.fromTo(".line",{
  //       scale:0,
  //     },{
  //       scale:1,
  //       transformOrigin:"left",
  //       duration: 1,
  //       delay: -0.7,
  //       ease: "power3.out",
  //     })
  //   }
  //   });

  return (
    <section className="" id="advaglideHero">
      <div className="w-screen h-screen relative overflow-hidden mobile:h-screen tablet:h-[70vh]">
        <Image
          src="/assets/advaglide/advaglide-bg.png"
          fill
          alt="advaglide-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[20%] tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] mobile:left-[10%] mobile:w-[100%] tablet:left-[15%] z-[10]">
            <h1 data-para-anim className="font-light text-blue-400 text-[5.3vw] aeonik drop-shadow-md leading-[1]">
              <span
                className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[7.5vw]`}
              >
                ADVA GLIDE
              </span>
            </h1>
            <div className="w-[80%] h-[1px] bg-black/50 my-[4vw] hidden mobile:block"></div>
            <div className="flex items-center mobile:w-[80%] mobile:justify-center ">
              <p
                data-para-anim
                className=" text-[1.25vw] uppercase leading-[1.2] tracking-wide font-light mobile:text-[4.6vw] mobile:tracking-widest  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full  flex items-center justify-start mobile:text-center mobile:justify-center"
              >
                PTCA BALLOON CATHETER SEMI COMPLIANT
              </p>
            </div>
              <div className="flex items-center justify-start ml-[-2vw] mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[4.5vw] h-[2px] bg-black rotate-90 mobile:rotate-0 mobile:w-[80vw] mobile:hidden mobile:absolute mobile:top-[22%] mobile:h-[1px] tablet:w-[8vw] fadeUp"></span>
                <p className="max-w-[25vw] ml-[-1vw] mt-[4vw] mb-[4vw] text-[1.65vw] leading-[1.2] font-light mobile:text-[4.8vw] mobile:max-w-full mobile:leading-[1.2] tablet:text-[2.5vw] tablet:max-w-[55%]">
                  <span data-para-anim>
                    Pioneering The Next Frontier of PTCA Technology
                  </span>
                </p>
              </div>
          </div>

          <div className="w-full h-full relative left-[10%] hero-container   tablet:w-[100%]  mobile:top-[15%] tablet:top-[10%] tablet:left-[20%]">
            <div className="w-[100vw] h-[50vw]  mobile:w-[150vw] mobile:h-[150vw] mobile:left-[-90%] relative tablet:w-[100vw] tablet:h-[100vw] fadeUp">
              <Image
                src="/assets/advaglide/advaglide-hero-element.png"
                alt="side-image"
                fill
                className=" hero-img object-contain mobile:rotate-[-105deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
