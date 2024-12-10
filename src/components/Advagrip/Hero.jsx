import React from "react";
import Image from "next/image";
import { fadeup, paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = () => {
  paraAnim();
  fadeup()
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "hero-container",
        scrub: true,
      },
    });
    // tl.to(".hero-img", {
    //   yPercent: 60,
    // });
    tl.to(".hero-needle", {
      yPercent: 30,
      delay: -1,
    });

    gsap.fromTo(
      ".hero-img",
      {
        scale: 1.2,
        yPercent: -10,
      },
      {
        scale: 1.1,
        yPercent: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  });
  return (
    <section className=" hero-container dark" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[70vh] mobile:h-screen">
        <div className="w-screen h-screen absolute tablet:h-[70vh]">
          <Image
            data-speed="0.7"
            className="hero-img absolute object-cover"
            src="/assets/advagrip/advagrip-hero.png"
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>
        
        <div className="w-[100vw] h-screen absolute top-[20%] right-[-20%] z-[20] tablet:h-[70vh] tablet:z-0 hero-needle mobile:h-[200vw] mobile:w-[250vw] mobile:z-[0] mobile:right-[-50%] mobile:top-[10%] ">
          <Image
            src="/assets/advagrip/advagrip-needle.png"
            fill
            className="object-contain rotate-[20deg] absolute fadeUp"
            alt="hero-needles"
          />
        </div>
        

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col  mt-[12vw] items-start tablet:h-[70vh] mobile:items-center mobile:mt-[35vw] tablet:mt-[25vw]">
            <div className=" mobile:flex mobile:flex-col mobile:items-center ">
              <h1
                data-para-anim
                className="text-[5.5vw] title-1  aeonik drop-shadow-lg  leading-[1.25] mobile:text-center tablet:text-[9vw]"
              >
                <span className={`leading-[1.2] overflow-hidden text-white`}>
                  ADVAGRIP
                </span>
              </h1>
             
              <p
                className={` w-[50vw] mb-[4vw] tablet:max-w-[50vw] mobile:w-[80vw] mobile:my-[7vw] `}
              >
                <span
                  data-para-anim
                  className={`text-[#FFFFFF] mobile:text-center tracking-space text-[1.2vw] font-light mobile:text-[5vw] mobile:tracking-normal tablet:text-[2vw]`}
                >
                KNOTLESS TISSUE CONTROL DEVICE
                </span>
              </p>
              <div className="w-screen h-full text-white aeonik relative mobile:static mobile:w-full">
                <p data-para-anim className="uppercase text-[14vw] tracking-wider opacity-10 font-light top-[-20%] absolute left-[-12%] mobile:hidden tablet:top-[80%]">advagrip</p>
                <p data-para-anim className="text-[2.5vw] font-light absolute top-[45%] left-0 mobile:static mobile:text-[5vw] mobile:text-center tablet:top-[130%]">A <span className=" text-white">Grip</span> Like No Other.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
