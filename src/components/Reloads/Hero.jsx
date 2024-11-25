import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeUp } from "../gsapAnimations";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  fadeUp();
  useGSAP(() => {
    gsap.from(
      ".hero-img",
      {
        xPercent:5,
        opacity:0,
        duration: 1.5,
        delay:0.5,
        ease: "power3.out",
      });
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
      <section className="hero relative tablet:pr-[3%]" id="advastap-hero">
        <div className="px-[10%] hero-container overflow-hidden  mobile:mt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="relative flex flex-col h-screen w-full justify-center items-start  mobile:h-[85vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh]">
            <div className="relative top-[20%]  mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw]">
                <h1  className="advastap-text text-white text-[5.3vw] aeonik drop-shadow-md leading-[1] w-[60%] hero-text">
                  <span
                    className={` leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] tablet:text-[7.5vw] `}
                  >
                  ADVASTAP RELOADS
                  </span>
                </h1>
                <p data-para-anim className="text-[1.675vw] leading-[1] tracking-wide font-light mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                with tri-sure technology
                </p>
              </div>
            </div>
              <div className=" w-[80vw] h-[20vw]  scale-[1.7] relative right-[-35%] bottom-[15%] mobile:bottom-0 mobile:w-[90vw] mobile:h-[80vw] tablet:w-[55vw] tablet:h-[60vw] pointer-events-none">
                <Image
                  className="object-contain hero-img"
                  src="/assets/reloads/reloads-hero.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
              <div className="text-[#F2EEF9] text-[10vw] -rotate-90 absolute right-[-30%] bottom-[28%] z-[10]">
                <p data-para-anim>TRI SURE</p>
              </div>
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1">
                <Image src="/assets/reloads/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover ]"/>
            </div>
            <div className="absolute h-[100%] w-[100vw] bottom-0 right-0 z-[-1]">
                <Image src="/assets/reloads/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover "/>
            </div>
      </section>
    </>
  );
};

export default Hero;
