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
              trigger:".manifold-container",
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
    <section className="overflow-hidden relative manifold-container mobile:py-[10%]" id="manifold">
    <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
      <div className="w-full h-full flex flex-col items-center justify-center  gap-[5vw] py-[5vw]">
        <div className="w-full h-full flex flex-col items-center justify-center pt-[5vw] mobile:mb-[10vw] mobile:flex mobile:justify-center">
          <h2
            data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center"
          >
          Manifold
          </h2>
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="h-[45vw] w-[80vw] relative">
            <Image
              src="/assets/accessories/manifold.png"
              fill
              alt="Ergonomic Product"
              className="object-contain fadein"
            />
          </div>

          <div className="absolute h-fit w-[25%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-0 top-[5%] mcard-up">
            <p  className="text-[1.67vw] font-light">Can connect multiple medical devices together</p>
            
          </div>
          <div className="absolute h-fit w-[25%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-0 top-[3%] mcard-up">
            <p   className="text-[1.67vw] font-light">Clear handle sign indicates fluid control</p>
            
          </div>
          <div className="absolute  h-fit w-[25%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-0 bottom-[20%] mcard-up">
            <p  className="text-[1.67vw] font-light">Standard luer connector</p>
          </div>
          <div className="absolute  h-fit w-[35%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[2%] bottom-0 mcard-up">
            <p  className="text-[1.67vw] font-light">Flexible luer provides better sealing performance under 500 PSI pressure</p>
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