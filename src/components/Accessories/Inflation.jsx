import React, { useEffect } from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Inflation = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".card-up");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger:".inflation-container",
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
    <section className="overflow-hidden relative  mobile:py-[10%] inflation-container" id="inflation">
    <div className="w-screen h-full container-lg  mobile:h-[140vh] tablet:h-[70%] ">
      <div className="w-full h-full flex flex-col items-center justify-center  gap-[5vw] py-[5vw] mobile:justify-between">
        <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit">
          <h2
            data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center mobile:w-[90%]"
          >
            Inflation Device
          </h2>
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="h-[35vw] w-[55vw] relative mobile:w-[150vw] mobile:h-[100vw]">
            <Image
              src="/assets/accessories/inflation-device.png"
              fill
              alt="Ergonomic Product"
              className="object-contain fadein mobile:rotate-[-35deg]"
            />
          </div> 

        </div>
        <div className='w-full h-full mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:items-center mobile:justify-end'>

          <div className="absolute h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[20%] top-[40%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw]">Ergonomic design</p>
            
          </div>
          <div className="absolute h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[12%] top-[32%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw]">Intuitive versatility</p>
            
          </div>
          <div className="absolute  h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[12%] bottom-[20%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw]">Enhanced usability</p>
          </div>
          <div className="absolute  h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[12%] bottom-[22%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw]">Intelligent adaptability</p>
          </div>
          <div className="absolute  h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[45%] bottom-[12%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw]">Superior accessibility</p>
          </div>
        </div>

       
      </div>
    </div>
    <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1]">
          <Image
            src="/assets/advastapcs/ergonomic-bg.png"
            fill
            alt="Ergonomic bg"
            className="object-cover"
          />
        </div>
  </section>
  )
}

export default Inflation