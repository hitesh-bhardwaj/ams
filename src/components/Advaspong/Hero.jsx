import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fadeUp } from "../gsapAnimations";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  fadeUp();
  useGSAP(() => {
    gsap.from(".hero-img-1", {
      xPercent: 2,
      yPercent: -2,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.from(".hero-img-2", {
      xPercent: -2,
      yPercent: 2,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.from(".hero-text", {
      y: 10,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  });

  return (
    <>
      <section
        className="hero relative w-screen overflow-hidden"
        id="advastap-hero"
      >
        <div className="px-[10%] hero-container overflow-hidden  mobile:pt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="  flex flex-col h-screen w-full justify-center items-start  mobile:h-[85vh]  mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[70vh]">
            <div className=" relative top-[10%]  mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0 tablet:top-0 ">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center relative z-[1] mobile:top-[-30%]">
                <h1 className="text-[#CF181E] text-[5.3vw]  font-light aeonik drop-shadow-md leading-[1] ">
                  <span
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] tablet:text-[7.5vw]`}
                  >
                    ADVASPONG
                  </span>
                </h1>
                <p
                  data-para-anim
                  className="uppercase  text-[1.25vw] leading-[1] tracking-widest font-light mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-[60%] mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]"
                >
                  Absorbable Gelatin Sponge
                </p>
              </div>
              <div className="absolute rounded-[1.5vw] p-[1.5vw] glassmorphism w-[45vw] top-[20vw] left-[5%] mobile:w-[80vw] mobile:left-[3%] mobile:p-[3vw] mobile:rounded-[3vw] mobile:top-[150%] tablet:left-0 tablet:w-[40vw]">
                <p className="text-[1.67vw] font-light mobile:text-[4vw] tablet:text-[2.5vw]">
                  Ultra-refined gelatin-based foam <br className="tablet:hidden"/> Precise bleed management,
                  unhindered tissue healing Unmatched proficiency, supreme
                  oozing control
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center z-[5] mobile:flex-col-reverse">
              <div className="w-[80vw] h-[25vw] scale-[1.4] relative right-[-45%] bottom-[-20%] mobile:top-[180%] mobile:left-[30%] mobile:w-[60vw] mobile:h-[50vw] tablet:w-[45vw] tablet:h-[45vw] pointer-evente-none tablet:left-[120%]">
                <Image
                  className="object-contain hero-img-1"
                  src="/assets/advaspong/advaspong-hero.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
                <p className="text-[1.25vw] font-light absolute w-[25%] top-[-20%] left-[35%] mobile:text-[4vw] mobile:w-full mobile:left-[-7%] mobile:text-center mobile:top-[-100%] tablet:top-[50%] tablet:w-[70%] tablet:left-[-70%] tablet:text-[2vw] tablet:leading-[1.2]">
                Empowering haemostasis with
                confidence and precision
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] top-0 right-0">
          <Image
            src="/assets/advaspong/hero-bg-1.png"
            fill
            alt="Advastap Hero bg"
            className="object-cover z-[-1]"
          />
        </div>
        <div className="absolute h-[100%] w-[100vw] bottom-0 left-0">
          <Image
            src="/assets/advaspong/hero-bg-2.png"
            fill
            alt="Advastap Hero bg"
            className="object-cover z-[-1]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
