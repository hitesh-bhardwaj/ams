import React,{useEffect} from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Manifold = () => {
 useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".mcard-up");
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
    <section className="overflow-hidden relative manifold-container mobile:py-[15%] tablet:py-[5%]" id="manifold">
    <div className="w-screen h-full container-lg  mobile:h-[150vh] tablet:h-[60vh] ">
      <div className="w-full h-full flex flex-col items-center justify-center  py-[2vw] gap-[2vw] tablet:py-0">
        <div className="w-full h-full flex flex-col items-center justify-center pt-[5vw] mobile:mb-[10vw] mobile:flex mobile:justify-start mobile:h-fit tablet:h-fit">
          <h2
            data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center"
          >
          Manifold
          </h2>
        </div>
        <div className=" w-full h-full  mobile:justify-start">
          <div className="h-[35vw] w-[50vw] relative left-[20%] mobile:w-[150vw] mobile:h-[120vw] tablet:w-[100vw] tablet:h-[70vw] tablet:left-[-5%] mobile:left-[-30%]">
            <Image
              src="/assets/accessories/manifold.png"
              fill
              alt="Ergonomic Product"
              className="object-contain fadein mobile:rotate-[-45deg]"
            />
          </div>


        
      </div>
      <div className='w-full h-full mobile:flex mobile:flex-col mobile:justify-end mobile:gap-[5vw]'>

          <div className="absolute h-fit w-[25%] rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] top-[32%] mcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">Can connect multiple medical devices together</p>
            
          </div>
          <div className="absolute h-fit w-[25%] rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] top-[29%] mcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p   className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">Clear handle sign indicates fluid control</p>
            
          </div>
          <div className="absolute  h-fit w-[25%] rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] bottom-[25%] mcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">Standard luer connector</p>
          </div>
          <div className="absolute  h-fit w-[35%] rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] bottom-[15%] mcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">Flexible luer provides better sealing performance under 500 PSI pressure</p>
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

export default Manifold