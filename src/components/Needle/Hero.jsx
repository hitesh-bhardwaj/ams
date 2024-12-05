import React from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = () => {
  paraAnim();
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
    tl.to(".hero-needle",{
      yPercent:30,
      delay:-1
    })

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
    <section className=" hero-container mobile:mb-[15%]" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[50vh]">
        <div className="w-screen h-screen absolute tablet:h-[50vh]">
          <Image data-speed="0.7"
            className="hero-img absolute object-cover"
            src="/assets/needle/needle-hero-bg.webp"
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>
        
        <div className="w-[100vw] h-screen absolute top-0 right-[-10%] z-[20] tablet:h-[50vh] tablet:z-0 mobile:hidden hero-needle">
            <Image src="/assets/needle/hero-needles.webp" fill className="object-cover absolute" alt="hero-needles"/>

        </div>
        <div className="w-[100vw] h-screen top-0 left-0 absolute hidden mobile:block">
          <Image src="/assets/needle/needle-hero-bg-mobile.webp" alt="needle-hero-mobile" className="object-cover" fill/>

        </div>

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[50vh] mobile:items-center">
            <div className="">
              <h1
                data-para-anim
                className="title-1 aeonik drop-shadow-lg  leading-[1.25] mobile:text-center"
              >
                <span className={`leading-[1.25] overflow-hidden text-black `}>
                The Next Generation 
                </span>
                <br />
                <span className={`leading-[1.25] overflow-hidden text-black `}>
                of Needle Technology
                </span>
              </h1>
              <h1
                
                className="title-1 aeonik drop-shadow-lg  leading-[1] hidden mobile:block tablet:block"
              >
                <span data-para-anim className={`leading-[1.25] overflow-hidden text-[#FFFFFF] text-center tablet:text-start `}>
                  
                </span>
              </h1>
              <p className={` max-w-[50vw] mt-[4vw] mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] `}>
                <span data-para-anim className={`text-black mobile:text-center`}>
                At Advanced Needle Technologies, our commitment to excellence begins with the finest raw materials and culminates in the creation of world-class surgical needles. Our meticulous process ensures that every needle we produce meets the highest standards of quality and performance.
                </span>
              </p>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
