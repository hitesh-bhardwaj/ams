import React from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP,ScrollTrigger)

const Edge = ({ sectionheading, card1, card2, card3,visibility }) => {
  
  useGSAP(()=>{
    if(globalThis.innerWidth>1024){
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:"#edge1",
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
      <section className="overflow-hidden mobile:py-[10%] tablet:pt-[7%] tablet:pb-0 pt-[5%] pb-[10%]" id="edge1">
        <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] tablet:mb-0">
          <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw] tablet:justify-between">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2 data-para-anim className="title-2 aeonik text-center mobile:text-center">{sectionheading}</h2>
            </div>

            <div className="flex items-center justify-evenly gap-[1vw] w-full mobile:flex-col mobile:gap-[10vw]">
              <div className="edge-card1 px-[3vw] py-[3vw] h-[40vw] w-[21vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50  mobile:w-[90vw] mobile:gap-[10vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:order-1 mobile:text-center tablet:h-[50vw] tablet:w-[23vw] ">
                <div>
                  <h3 className="text-[2.5vw] font-extralight text-center leading-[1.2] mobile:text-[8.2vw] tablet:text-[2.5vw]">
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

              <div className="edge-card2 py-[3vw] px-[1vw] h-[43vw] w-[43vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50 mobile:w-[90vw] mobile:gap-[5vw] mobile:rounded-[9vw] mobile:py-[15vw] mobile:h-full  mobile:text-center tablet:h-[50vw] tablet:w-[50vw]  ">
                <div className="flex items-center justify-center mobile:flex-col mobile:gap-[5vw]">
                  <span className={`block w-[10.7vw] h-[1.65vw] relative mr-[0.5vw] mobile:w-[36vw] mobile:h-[6vw] tablet:w-[20vw] tablet:h-[3vw] ${visibility} `}>
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
                <div className={`relative  px-[1vw] py-[2vw] w-[37vw] h-[10vw] flex justify-center items-center mobile:h-[25vw] mobile:w-[85vw] ${visibility}`}>
                  <Image
                    src={card2.bgsrc}
                    alt="background"
                    fill
                    
                    className="object-fill w-[50vw] h-full top-0 left-0 "
                  />
                  <p className="relative flex mobile:flex-col text-white text-[1.1vw] font-light w-[90%] mobile:text-[3.3vw] mobile:font-extralight tablet:text-[1.4vw]">
                    <span className="block w-[10vw] h-[2vw] relative mobile:h-[5vw] mobile:w-[20vw]">
                      <Image
                        src="/assets/advacryl/advatray-white.png"
                        fill
                        alt="advatray"
                        className="object-contain"
                      />
                    </span>
                   
                      {card2.para}
                    
                  </p>
                </div>
              </div>

              <div className="edge-card3 px-[3vw] py-[3vw] h-[40vw] w-[21vw] border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50 mobile:w-[90vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:gap-[10vw] mobile:text-center mobile:order-2 tablet:h-[50vw] tablet:w-[23vw] ">
                <div>
                  <h3 className="text-[2.5vw] font-extralight text-center leading-[1.2] mobile:text-[8.2vw]  tablet:text-[2.5vw] ">
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

export default Edge;
