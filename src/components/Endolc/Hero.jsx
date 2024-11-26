import Image from "next/image";
import { paraAnim ,fadeUp } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  paraAnim();
  fadeUp();
  useGSAP(() => {
    gsap.fromTo(
      ".hero-img",
      {
        scale: 1.1,
        xPercent:10,
        opacity:0,
      },
      {
        scale: 1,
        opacity:1,
        xPercent:0,
        duration: 1.5,
        delay:0.5,
        ease: "power3.out",
      }
    );

    gsap.from('.lineSpan',{
      scale:0,
      duration:1,
      delay:0.5,
      transformOrigin:'left',
      ease: "power3.out",

    })
    gsap.from('.hero-text',{
      y:10,
      opacity:0,
      duration:1,
      ease:'power3.out',
      delay:0.5
    })
  
  });
  return (
    <>
      <section className="hero mb-[10%]  tablet:pr-[3%] relative" id="advastap-hero">
        <div className="px-[10%]  hero-container overflow-hidden w-screen  mobile:pt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="  flex flex-col h-screen w-full justify-center items-start  mobile:h-[75vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh] mobile:static">
            <div className=" mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center">
                <h1 className="advastap-text text-white text-[5.7vw] aeonik drop-shadow-md leading-[1] hero-text">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] tablet:text-[7.5vw] `}
                  >
                    advastap ENDO LC
                  </span>
                </h1>
                <div className="hidden mobile:block w-[50%] h-[4px] bg-black/30"></div>
                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1] tracking-widest font-light mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                Endoscopic Linear Cutter 3-row
                </p>
              </div>
              <div className="flex items-center justify-end mt-[-0.5vw] w-[75%] ">
                <span className="w-[12vw] h-[1px] bg-[#4A4A4A] mobile:hidden tablet:w-[8vw] lineSpan"></span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end z-[5] mobile:flex-col-reverse mobile:right-[5%] mobile:top-[20%] tablet:top-[30%]">

              <div className="w-[80vw] h-[20vw]  scale-[3] relative right-0 left-[15%] pointer-events-none mobile:bottom-0 mobile:left-auto mobile:right-[-50%] mobile:top-[70%] mobile:w-[50vw] mobile:h-[30vw] tablet:w-[55vw] tablet:h-[60vw] z-10 fadeUp ">
                <Image
                quality={100}
                  className=" hero-img object-contain drop-shadow-xl shadow-xl mobile:shadow-none mobile:drop-shadow-none mobile:rotate-[30deg]"
                  src="/assets/endolc/advastap-endo-lc.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            </div>

          
          </div>
         
        </div>
        <div className="absolute h-[100%] w-[100%] top-0 right-[-15%] mobile:w-screen mobile:h-screen mobile:right-0 z-[-1]">
                <Image src="/assets/endolc/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover "/>
            </div>
            <div className="absolute h-[100%] w-[100%] bottom-0 left-[-15%] z-[-1]">
                <Image src="/assets/endolc/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
