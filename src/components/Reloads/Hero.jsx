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
      <section className="hero  tablet:pr-[3%] relative overflow-hidden w-screen" id="advastap-hero">
        <div className="px-[10%] hero-container overflow-hidden  tablet:px-[5%] mobile:px-[8%]">
          <div className=" flex flex-col h-screen w-full justify-center items-start  mobile:h-screen mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[70vh]">
            <div className=" absolute top-[30%] left-[12%]  mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0 mobile:top-[15%] mobile:left-0 tablet:top-[20%] tablet:left-[10%]">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center">
                <h1 className="advastap-text text-white text-[5.3vw] aeonik drop-shadow-md w-[60%] mobile:w-full fadeUp ">
                  <span 
                    className={`leading-[1.1] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[7.5vw]`}
                  >
                  ADVASTAP RELOADS
                  </span>
                </h1>
                <div className="w-[70%] h-[1px] bg-black/50 hidden mobile:block mt-[4vw]"></div>
                <p data-para-anim className="text-[1.675vw] leading-[1.2] tracking-wide mt-[1vw] font-light mobile:text-[5vw] mobile:w-full mobile:text-center mobile:py-[2%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                with tri-sure technology
                </p>
              </div>
            </div>
              <div className=" w-[100vw] h-[22vw]  scale-[1.7] absolute right-[-25%] z-[10] top-[30%] mobile:top-[40%] mobile:right-[5%] mobile:w-[60vw] mobile:h-[90vw] tablet:w-[40vw] tablet:h-[40vw] tablet:right-[10%] tablet:top-[40%] pointer-events-none">
                <Image
                  className="object-contain hero-img"
                  src="/assets/reloads/reloads-hero.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
              <div className="text-[#F2EEF9] text-[9vw] font-light -rotate-90 absolute right-[-13%] top-[46%] z-[1] mobile:text-[25vw] mobile:leading-[1] mobile:right-[-52%] mobile:top-[60%] mobile:tracking-widest tablet:text-[15vw] tablet:right-[-25%] tablet:top-[55%]">
                <p data-para-anim>TRI SURE</p>
              </div>
            

          </div>
        </div>
            <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1]">
                <Image src="/assets/reloads/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover ]"/>
            </div>
            <div className="absolute h-[100%] w-[100vw] bottom-0 right-0 z-[-1]">
                <Image src="/assets/reloads/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
