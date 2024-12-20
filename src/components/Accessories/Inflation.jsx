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
              trigger:content,
              start: "top 80%",
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
    <section className="overflow-hidden relative  mobile:py-[15%] inflation-container pt-[7%] pb-[10%]" id="inflation">
    <div className="w-screen h-full container-lg  mobile:h-[140vh] tablet:h-[70vh] ">
      <div className="w-full h-full flex flex-col items-center justify-center  mobile:justify-between tablet:py-0">
        <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit">
          <h2
data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center mobile:w-[90%]"
          >
            Inflation Device
          </h2>
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="h-[35vw] w-[60vw] relative mobile:w-[150vw] mobile:h-[100vw] tablet:w-[100vw] mobile:mt-[20vw] tablet:h-[70vw]">
            <Image
              src="/assets/accessories/inflation-device.png"
              fill
              alt="Ergonomic Product"
              className="object-contain fadeUp mobile:rotate-[-35deg]"
            />
          </div> 

        </div>
        <div className='w-full h-full mobile:flex mobile:flex-col mobile:gap-[3vw] mobile:items-center mobile:justify-end'>

          <div className="absolute h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[20%] top-[40%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[8vw] mobile:rounded-[4vw]  tablet:px-[2.5vw] tablet:py-[1.5vw] tablet:left-[10%]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3.5vw]">Ergonomic design</p>
            
          </div>
          <div className="absolute h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[12%] top-[32%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[8vw] mobile:rounded-[4vw] tablet:px-[2.5vw] tablet:py-[1.5vw] tablet:top-[24%]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3.5vw]">Intuitive versatility</p>
            
          </div>
          <div className="absolute  h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[12%] bottom-[20%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[8vw] mobile:rounded-[4vw] tablet:px-[2.5vw] tablet:py-[1.5vw] tablet:bottom-[35%] ">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3.5vw]">Enhanced usability</p>
          </div>
          <div className="absolute  h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[12%] bottom-[22%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[8vw] mobile:rounded-[4vw] tablet:px-[2.5vw] tablet:py-[1.5vw]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3.5vw]">Intelligent adaptability</p>
          </div>
          <div className="absolute  h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[45%] bottom-[12%] card-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[8vw] mobile:rounded-[4vw] tablet:px-[2.5vw] tablet:py-[1.5vw]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3.5vw]">Superior accessibility</p>
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