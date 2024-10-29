import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP,ScrollTrigger)

const Edge2 = ({ sectionheading, card1, card2, card3,className }) => {
  useGSAP(()=>{
    if(globalThis.innerWidth>1024){
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:"#edge",
          start:"top bottom",
          end:"top top",
          scrub:true,
          // markers: true,
  
        }
      })
      tl.from(".edge-card1",{
        xPercent:-50,
        opacity:0
      })
      tl.from(".edge-card2",{
        yPercent:50,
        opacity:0,
        delay:-0.5
      })
      tl.from(".edge-card3",{
        xPercent:50,
        opacity:0,
        delay:-0.5
      })

    }

  })
  return (
    <>
      <section className="overflow-hidden mobile:py-[10%]" id="edge">
        <div className="w-screen h-full container-lg mb-[10%] mobile:h-full tablet:h-[70%]">
          <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw]">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2 data-para-anim className="title-2 aeonik text-center mobile:text-center">{sectionheading}</h2>
            </div>

            <div className="flex items-center justify-evenly gap-[1vw] w-full mobile:flex-col mobile:gap-[10vw]">
              <div className="edge-card1 px-[3vw] py-[3vw] h-[40vw] w-[21vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] glassmorphism  mobile:w-[90vw] mobile:gap-[10vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:order-1 mobile:text-center tablet:h-[50vw] tablet:w-[23vw]">
                <div>
                  <h3 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[8.2vw] tablet:text-[2.5vw]">
                    {card1.title}
                  </h3>
                </div>
                <div className="w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw]">
                  <div className="w-full h-full relative">
                    <Image
                      src={card1.src}
                      fill
                      alt="Magnifying glass"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[1.65vw] font-light mobile:text-[5.5vw] tablet:text-[2vw]">
                    {card1.para}
                  </p>
                </div>
              </div>

              <div className="edge-card2 py-[3vw] px-[1vw] h-[43vw] w-[43vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] glassmorphism mobile:w-[90vw] mobile:gap-[5vw] mobile:rounded-[9vw] mobile:py-[15vw] mobile:h-full  mobile:text-center tablet:h-[50vw] tablet:w-[50vw] ">
                <div className="flex items-center justify-center mobile:flex-col mobile:gap-[5vw]">
                  <span className="block w-[10.7vw] h-[1.65vw] relative mr-[0.5vw] mobile:w-[36vw] mobile:h-[6vw] tablet:w-[20vw] tablet:h-[3vw]">
                    <Image
                      src="/assets/advacryl/advatray-blue.png"
                      fill
                      alt="advatray"
                      className=""
                    />
                  </span>
                  <p className="text-[1.5vw] font-light mobile:text-[4.2vw]  tablet:text-[2vw]">
                    {card2.title}
                  </p>
                </div>
                <div className="w-[28vw] h-[25vw] mobile:h-[50vw] mobile:w-[75vw] mobile:mt-[5vw]">
                  <div className="w-full h-full relative">
                    <Image
                      src={card2.src}
                      fill
                      alt="advacryl tray"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className={`mobile:w-[70%] ${className}`}>
                        <ul className="list-disc text-[1.15vw] font-light mobile:text-[5.5vw] mobile:text-left tablet:text-[2vw]">
                            <li>Minimal suture memory & coiling</li>
                            <li>Excellent handling & flexibility</li>
                            <li>Excellent knot security</li>
                        </ul>
                    
                </div>
              </div>

              <div className="edge-card3 px-[3vw] py-[3vw] h-[40vw] w-[21vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] glassmorphism mobile:w-[90vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:gap-[10vw] mobile:text-center mobile:order-2 tablet:h-[50vw] tablet:w-[23vw]">
                <div>
                  <h3 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[8.2vw]  tablet:text-[2.5vw] ">
                    {card3.title}
                  </h3>
                </div>
                <div className="w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw]">
                  <div className="w-full h-full relative">
                    <Image
                      src={card3.src}
                      fill
                      alt="Advacryl-graph"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[1.65vw] font-light mobile:text-[5.5vw] tablet:text-[2vw]">
                    {card3.para}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edge2;
