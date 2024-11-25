import React,{useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ergonomic = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".ecard-up");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger:"#ergonomic",
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
    <>
      <section className="overflow-hidden  mobile:py-[10%] relative" id="ergonomic">
        <div className="w-screen h-full container-lg z-[5] mobile:h-full tablet:h-[70%] ">
          <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw] py-[5vw]">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2
                data-para-anim
                className="title-2 aeonik text-center w-[60%] mobile:text-center"
              >
                Ergonomic Design For Comfortable Single-Hand Use
              </h2>
            </div>
            <div className=" relative  w-full h-full flex flex-col items-center justify-center">
              <div className="h-[50vw] w-[80vw] relative ">
                <Image
                  src="/assets/poweredlc/ergonomic-lc2.png"
                  fill
                  alt="Ergonomic Product"
                  className="object-cover fadein"
                />
              </div>

              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[5%] top-[8%] ecard-up">
                <p  className="text-[1.67vw] font-light">Rotating Knob:</p>
                <p  className="text-[1.25vw] font-light">Effortless reload angulation adjustment.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[20%] top-[7%]  ecard-up">
                <p  className="text-[1.67vw] font-light">Smart Reload:</p>
                <p  className="text-[1.25vw] font-light">Convenient reload unload switch.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[20%] top-[40%]  ecard-up">
                <p  className="text-[1.67vw] font-light">Battery Life:</p>
                <p   className="text-[1.25vw] font-light"> Efficient for up to multiple firings.</p>
              </div>
              <div className="absolute w-[28%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[5%] bottom-[10%]  ecard-up">
                <p   className="text-[1.67vw] font-light">User Controls:</p>
                <p  className="text-[1.25vw] font-light">Safety button for firing; simple controls for jaw, close, and fire functions.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[5%] top-[55%]  ecard-up">
                <p  className="text-[1.67vw] font-light">Actuated Motor:</p>
                <p  className="text-[1.25vw] font-light">Ensures precise firing across all tissue thickness.</p>
              </div>
              <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] bottom-[5%]  ecard-up">
                <p  className="text-[1.67vw] font-light">Atraumatic Tapered Tip:</p>
                <p  className="text-[1.25vw] font-light"> for delicate tissue management.</p>
              </div>
            </div>

          
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0">
              <Image
                src="/assets/poweredlc/ergonomic-bg.png"
                fill
                alt="Ergonomic bg"
                className="object-cover"
              />
            </div>
      </section>
    </>
  );
};

export default Ergonomic;
