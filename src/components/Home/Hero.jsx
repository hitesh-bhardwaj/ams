import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  const [videoSrc, setVideoSrc] = useState(null);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVideoSrc("/assets/home/homepage-hero-video.mp4");
      }, 2000);
  
      return () => clearTimeout(timer); 
    }, []);
  
  useEffect(() => {
    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Define your animations here within the context
      const tl = gsap.timeline();
      tl.from(".hero-img-anim", {
        yPercent: 10,
        opacity: 0,
        delay: 0.5,
      });
    });

    // Clean up the context on component unmount
    return () => ctx.revert();
  }, []);
// if(!isClient) return null;
  
    return (
        <section className="hero mobile:mb-[0vw] overflow-hidden relative" id="hero">
          <div className="px-[12%] relative mobile:px-[5vw] mobile:w-[100vw] tablet:px-[10%] ">
            <div className="flex h-dvh w-full justify-start items-center mobile:h-screen tablet:h-[60vh]">
              <div className="w-[55%] z-[50] mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center tablet:w-3/4 mt-[4vw]">
                <h1 data-para-anim className="title-1 aeonik  mobile:text-center mobile:text-[15vw] text-[#ffffff] title-shadow">
                Advancing the way we care
                </h1>
                <p  className="font-light max-w-[50vw] text-[1.25vw] text-white mt-[4vw] mb-[7vw] mobile:text-[4.5vw] mobile:max-w-[90vw] mobile:text-center mobile:mt-[10vw] mobile:px-[5vw] mobile:mb-[15vw]  tablet:text-[2vw] tablet:max-w-[40vw]">
                  <span data-para-anim className="mobile:leading-[1.8]">
                  AMS is dedicated to advancing healthcare by providing meaningful MedTech solutions, improving lives for patients around the world.
                  </span>
                </p>
                <div className="fadeUp">

                <PrimaryButton text={"About us"} link={'/about'} className={"secondary  !text-white"}/>
                </div>
               
              </div>
             
              <div className="absolute top-0 left-0  h-full tablet:top-[45%] mobile:relative">
              <div className="w-screen h-full relative mobile:w-[100vw] mobile:h-[80vw] mobile:bottom-[50%] tablet:bottom-0 tablet:w-[65vw] tablet:h-[45vw]">
                <video
                  poster="/assets/home/homepage-hero-video-poster.webp"
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
    )
}