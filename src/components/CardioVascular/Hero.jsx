import React from "react";
import Image from "next/image";
import { paraAnim, titleAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import LazyVideo from "../layoutComponents/LazyVideo";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = ({}) => {
  
  titleAnim()
  paraAnim();
  // useGSAP(() => { 
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "hero-container",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       // markers:true
  //     },
  //   });
  //   tl.to(".hero-img", {
  //     yPercent: 60,
  //   });
  //   gsap.fromTo(
  //     ".hero-img",
  //     {
  //       scale: 1.2,
  //       yPercent: -10,
  //     },
  //     {
  //       scale: 1.1,
  //       yPercent: 0,
  //       duration: 1,
  //       delay: 0.1,
  //       ease: "power3.out",
  //     }
  //   );
  
  // });
  return (
    <section className={` hero-container mobile:mb-[15%] dark`} id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[70vh]">
        <div className="w-full h-full absolute tablet:h-full">
        <LazyVideo
                    poster={"/assets/cardiovascular/cv-video-frame.webp"}
                    type="video/mp4"
                    autoPlay="true"
                    loop="true"
                    videoSrc={"/assets/cardiovascular/cv-hero-video.mp4"}
                    className='w-full h-full object-cover left-0 top-0 absolute'
                    />
        </div>
        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[60vh] mobile:justify-start mobile:pt-[35vw]">
            <div className={`w-[90%] mobile:w-full`}>
              <h1
                
                className={`title-1 w-full aeonik title-shadow   leading-[1]`}
              >
                <span data-para-anim className={`leading-[1.21] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center `}>
                Advancing the Science of Cardiothoracic Surgery
                </span>
              </h1>
              <p className={` max-w-[40vw] mt-[4vw] mb-[4vw] content-p mobile:text-center  mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] tablet:text-[2.5vw]`}>
                <span data-para-anim className={`text-[#FFFFFF] leading-[1.4] `}>
                At the forefront of cardiac care, we provide leading-edge solutions designed to enhance surgical precision and improve patient outcomes. With our advanced cardiac portfolio, we are setting new standards in the field of cardiothoracic therapy.
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