import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from(
      ".hero-img",
      {
        xPercent:10,
        opacity:0,
        duration: 1.5,
        delay:0.5,
        ease: "power3.out",
      }
    );
  });
  return (
    <>
      <section className="hero tablet:pr-[3%] relative" id="advastap-hero">
        <div className=" hero-container overflow-hidden  mobile:mt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="  flex flex-col h-screen w-screen justify-center items-start  mobile:h-[85vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh]">
            <div className=" absolute top-[30%] left-[10%] mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className=" flex-col mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw]">
                <h1 className="advastap-text text-white text-[5.3vw] aeonik drop-shadow-md leading-[1]">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] tablet:text-[7.5vw]`}
                  >
                   ADVASTAP 
                  </span>
                </h1>
                <p data-para-anim className="text-[2vw] leading-[1.5] tracking-wide font-light mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                Skin Stapler
                </p>
              </div>
              
            </div>
            <div className="flex items-center justify-center z-[5] mobile:flex-col-reverse mobile:right-[5%] mobile:top-[20%] tablet:top-[30%]">
              <div className="w-[45vw] h-[25vw] scale-[1.5] absolute right-0 bottom-[15%] mobile:bottom-0 mobile:w-[90vw] mobile:h-[80vw] tablet:w-[55vw] tablet:h-[60vw] z-10 fadeUp ">
                <Image
                  className="object-contain hero-img"
                  src="/assets/skinstapler/skin-stapler.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            </div>
           
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] top-0 right-0 z-[-1]">
                <Image src="/assets/skinstapler/hero-bg.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
