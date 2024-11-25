import React,{useEffect} from "react";
import Image from "next/image";
import { fadeIn } from "../gsapAnimations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ergonomic = () => {
  fadeIn();
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
      <section className="overflow-hidden relative mobile:py-[10%]" id="ergonomic">
        <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
          <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw]">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2
                data-para-anim
                className="title-2 aeonik text-center w-[60%] mobile:text-center"
              >
                Ergonomic Design For Comfortable Single-Hand Use
              </h2>
            </div>
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div className="h-[50vw] w-[80vw] relative scale-[1] left-[10%] pointer-events-none">
                <Image
                  src="/assets/advastapcs/circular-stapler2.png"
                  fill
                  alt="Ergonomic Product"
                  className="object-cover fadein"
                />
              </div>

              <div className="absolute w-[15%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[10%] top-[5%] ecard-up">
                <p  className="text-[1.67vw] font-light">Removable Anvil Design</p>     
              </div>
              <div className="absolute w-[18%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] top-[7%] ecard-up">
                <p  className="text-[1.67vw] font-light">Deeper Housing Capacity</p>
                
              </div>
              <div className="absolute w-[18%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-0 bottom-[20%] ecard-up">
                <p  className="text-[1.67vw] font-light">Superior Hemostatic Effect</p>
              </div>
              <div className="absolute w-[15%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[37%] top-[29%] ecard-up">
                <p  className="text-[1.67vw] font-light">High Staples per Firing</p>
              </div>
              <div className="absolute w-[20%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[7%] top-[42%] ecard-up">
                <p  className="text-[1.67vw] font-light">Adjustable Staple Height Control</p>
              </div>
              <div className="absolute w-[16%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[30%] bottom-[5%] ecard-up">
                <p  className="text-[1.67vw] font-light">Precise Staple Line Formation</p>
              </div>
            </div>

          
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1]">
              <Image
                src="/assets/advastapcs/ergonomic-bg.png"
                fill
                alt="Ergonomic bg"
                className="object-cover "
              />
            </div>
      </section>
    </>
  );
};

export default Ergonomic;
