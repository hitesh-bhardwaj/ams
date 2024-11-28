import React,{useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Redefining = () => {
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
        className="overflow-hidden  mobile:py-[10%] relative py-[7%]"
        id="ergonomic"
      >
        <div className="w-screen h-full container-lg z-[5] mobile:h-[130vh] tablet:h-[70%] ">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] ">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit">
              <h2
                data-para-anim
                className="title-2 aeonik text-center  mobile:text-center mobile:w-full"
              >
               ADVASPONG redefining wound care
              </h2>
            </div>
            <div className=" h-[50vw] w-[80vw] mobile:h-full flex flex-col items-center justify-end mobile:pb-[10%]">
             
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  <div className="h-[38vw] w-[50vw] relative mobile:w-[90vw] mobile:h-[90vw] mobile:left-[5%]  mobile:top-0 ">
                    <Image
                      src="/assets/advaspong/advaspong-redefining.png"
                      fill
                      alt="Redefining Product"
                      className=" fadein"
                    />
                  </div>
                  <div className="mobile:flex mobile:flex-col mobile:gap-[5vw]">

                  <div className="absolute w-[33%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[10%] top-[25%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw]">
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center"
                    >
                     Rapid platelet adhesion & aggregation,
                     achieve haemostasis within 2-3 minutes
                    </p>
                  </div>
                  <div className="absolute w-[30%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] top-[30%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw]">
                    <p className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center">
                    Extraordinary blood absorption,
                    50-60 times its molecular weight
                    </p>
                  </div>
                    <div className="absolute w-[30%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] top-[62%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw]">
                      <p className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center">
                      A biodegradable marvel, complete
                      absorption within 3-4 weeks
                      </p>
                    </div>
                   
                      <div className="absolute w-[30%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] bottom-[28%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw]">
                        <p className="text-[1.45vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center ">
                        Maximizing delicate tissue protection,
                        minimizing sponge swelling effect
                        </p>
                      </div>
                  </div>
                  
                     
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1]">
                <Image src="/assets/advaspong/redefining-bg.png"
                fill
                alt="redefining-bg"/>
                </div>
      </section>
    </>
  );
};

export default Redefining;
