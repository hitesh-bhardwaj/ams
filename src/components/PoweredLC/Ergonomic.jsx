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
      <section
        className="overflow-hidden  mobile:py-[10%] relative"
        id="ergonomic"
      >
        <div className="w-screen h-full container-lg z-[5] mobile:h-[170vh] tablet:h-[70%] ">
          <div className="w-full h-full flex flex-col items-center justify-center py-[5vw] ">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit">
              <h2
                data-para-anim
                className="title-2 aeonik text-center w-[60%] mobile:text-center mobile:w-full"
              >
                Ergonomic Design For Comfortable Single-Hand Use
              </h2>
            </div>
            <div className=" h-[50vw] w-[80vw] mobile:h-full flex flex-col items-center justify-end mobile:pb-[10%]">
             
                <div className=" w-full h-full flex flex-col items-center justify-center mobile:h-fit">
                  <div className="h-[50vw] w-[80vw] relative mobile:w-[200vw] mobile:h-[100vw] mobile:left-[-25%] mobile:absolute mobile:top-[15%] ">
                    <Image
                      src="/assets/poweredlc/ergonomic-lc2.png"
                      fill
                      alt="Ergonomic Product"
                      className="object-cover fadein"
                    />
                  </div>
                  <div className="mobile:flex mobile:flex-col mobile:gap-[5vw]">

                  <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[12%] top-[35%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
                    <p
                      data-para-anim
                      className="text-[1.67vw] font-light mobile:text-[6vw]"
                    >
                      Rotating Knob:
                    </p>
                    <p
                      data-para-anim
                      className="text-[1.25vw] font-light mobile:text-[4vw]"
                    >
                      Effortless reload angulation adjustment.
                    </p>
                  </div>
                  <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[20%] top-[30%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
                    <p className="text-[1.67vw] font-light mobile:text-[6vw]">
                      Smart Reload:
                    </p>
                    <p className="text-[1.25vw] font-light mobile:text-[4vw]">
                      Convenient reload unload switch.
                    </p>
                  </div>
                  <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[25%] top-[55%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
                    <p
                      data-para-anim
                      className="text-[1.67vw] font-light mobile:text-[6vw]"
                    >
                      Battery Life:
                    </p>
                    <p
                      data-para-anim
                      className="text-[1.25vw] font-light mobile:text-[4vw]"
                    >
                      {" "}
                      Efficient for up to multiple firings.
                    </p>
                  </div>
                  <div className="absolute w-[30%] h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] bottom-[10%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
                    <p
                      data-para-anim
                      className="text-[1.67vw] font-light mobile:text-[6vw]"
                    >
                      User Controls:
                    </p>
                    <p
                      data-para-anim
                      className="text-[1.25vw] font-light mobile:text-[4vw] mobile:text-center"
                    >
                      Safety button for firing; simple controls for jaw, close,
                      and fire functions.
                    </p>
                  </div>
                    <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] top-[65%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
                      <p className="text-[1.67vw] font-light mobile:text-[6vw]">
                        Actuated Motor:
                      </p>
                      <p className="text-[1.25vw] font-light mobile:text-[4vw]">
                        Ensures precise firing across all tissue thickness.
                      </p>
                    </div>
                   
                      <div className="absolute w-fit h-fit rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[20%] bottom-[10%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw]">
                        <p className="text-[1.67vw] font-light mobile:text-[6vw]">
                          Atraumatic Tapered Tip:
                        </p>
                        <p className="text-[1.25vw] font-light mobile:text-[4vw] ">
                          {" "}
                          for delicate tissue management.
                        </p>
                      </div>
                  </div>
                  
                     
                    </div>
                  </div>
                </div>
               
              </div>
           
          

        
          <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0  ">
            
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
