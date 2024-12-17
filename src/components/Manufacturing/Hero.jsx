
import { useState, useEffect } from "react";
import { paraAnim } from "../gsapAnimations";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc("/assets/manufacturing/manufacturing-hero-video.mp4");
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  paraAnim();

  return (
    <>
      <section className="hero h-[100vh] mobile:mb-[20%] tablet:h-[60vh] mobile:h-[100vh] overflow-hidden mobile:w-full dark" id="hero">
        <div className="px-[10%] relative">
          <div className="flex h-dvh w-full justify-start items-center tablet:h-[50vh] mobile:flex-col mobile:justify-center mobile:mt-[20%]">
            <div className="w-full mobile:flex mobile:justify-center mobile:items-center mobile:flex-col mobile:text-center z-[50]">
              <h1
                data-para-anim
                className="title-1 aeonik  leading-[1.15] mobile:text-[12.5vw]"
              >
                 <span data-para-anim className={`leading-[1.21] overflow-hidden text-[#FFFFFF] w-[90%] mobile:w-full mobile:text-center  `}>
                 Ushering the next generation of medical device technology
                 </span>
               
              </h1>
              <p className="max-w-[40vw] mt-[4vw] mb-[4vw]  text-white text-[1.45vw] font-light tablet:text-[2vw] tablet:max-w-[40vw] mobile:max-w-[90vw] mobile:text-center">
                <span data-para-anim>
                At AMS, we are pioneering the future of medical device technology, harnessing cutting-edge manufacturing advancements to drive unparalleled quality, innovation, and agility in our processes.
                </span>
              </p>
            </div>
            <div className="absolute top-0 left-0  h-full tablet:top-[45%] mobile:relative">
              <div className="w-screen h-full relative mobile:w-[100vw] mobile:h-[80vw] mobile:bottom-[50%] tablet:bottom-0 tablet:w-[65vw] tablet:h-[45vw]">
                <video
                  poster="/assets/manufacturing/manufacturing-hero-poster.webp"
                  autoPlay
                  loop
                  muted
                  src={videoSrc} 
                  className="w-full h-full object-cover object-left"
                  playsInline
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
