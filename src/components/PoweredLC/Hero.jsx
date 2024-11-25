import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeUp } from "../gsapAnimations";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  fadeUp();
  useGSAP(() => {
    gsap.from(
      ".hero-img-1",
      {
        xPercent:2,
        yPercent:-2,
        opacity:0,
        duration: 1.5,
        delay:0.5,
        ease: "power3.out",
      });
      gsap.from(
        ".hero-img-2",
        {
          xPercent:-2,
          yPercent:2,
          opacity:0,
          duration: 1.5,
          delay:0.5,
          ease: "power3.out",
        });


    gsap.from('.lineSpan',{
      scale:0,
      duration:1,
      delay:0.5,
      transformOrigin:'left',
      ease: "power3.out",

    })
  
  });

  return (
    <>
      <section className="hero relative tablet:pr-[3%]" id="advastap-hero">
        <div className="px-[10%]  hero-container overflow-hidden  mobile:mt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className=" flex flex-col h-screen w-full justify-center items-start  mobile:h-[85vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh]">
            <div className=" relative top-[20%]  mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw]">
                <h1 className="advastap-text text-white text-[5.3vw] aeonik drop-shadow-md leading-[1] fadeup">
                  <span
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] tablet:text-[7.5vw]`}
                  >
                   ADVASTAP POWERED LC
                  </span>
                </h1>
                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1] tracking-widest font-light mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                Powered Linear Cutter 3-row
                </p>
              </div>
              <div className="flex items-center justify-end w-[57%]  mt-[-0.5vw]  mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[12vw] h-[1px] bg-[#4A4A4A] mobile:hidden tablet:w-[8vw] lineSpan"></span>
              </div>
            </div>
            <div className="flex items-center justify-center z-[5] mobile:flex-col-reverse mobile:right-[5%] mobile:top-[20%] tablet:top-[30%]">
              <div className="w-[80vw] h-[25vw]  scale-[1.8] relative left-[45%] top-[20%] mobile:bottom-0 mobile:w-[90vw] mobile:h-[80vw] tablet:w-[55vw] tablet:h-[60vw] pointer-evente-none">
                <Image
                  className="object-contain hero-img-1"
                  src="/assets/poweredlc/lc-1.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            </div>
            <div className="w-[80vw] h-[20vw] scale-[1.7] left-[-35%] bottom-[5%] relative  mobile:bottom-0 mobile:w-[90vw] mobile:h-[80vw] tablet:w-[55vw] tablet:h-[60vw] pointer-events-none ">
                <Image
                  className="object-contain hero-img-2"
                  src="/assets/poweredlc/lc-2.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div> 

          
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] top-0 right-0">
                <Image src="/assets/poweredlc/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
            <div className="absolute h-[100%] w-[100vw] bottom-0 left-0">
                <Image src="/assets/poweredlc/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
