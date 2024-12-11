import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  paraAnim()
  return (
    <>
      <section className="hero h-[100vh] mobile:mb-[20%] tablet:h-[60vh] mobile:h-[100vh] overflow-hidden mobile:w-full" id="hero">
        <div className="px-[10%] relative">
          <div className="flex h-dvh w-full justify-start items-center tablet:h-[50vh] mobile:flex-col mobile:justify-center  mobile:mt-[20%]">
            <div className=" w-full mobile:flex mobile:justify-center mobile:items-center mobile:flex-col mobile:text-center z-[50] ">
              <h1 data-para-anim className="title-1 aeonik drop-shadow-md leading-[1.15] mobile:text-[12.5vw] ">
                Advancing Healthcare
                for Generations to Come
              </h1>
              <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p tablet:text-[2vw] tablet:max-w-[40vw] mobile:max-w-[90vw] mobile:text-center">
                <span data-para-anim>
                  We are committed to transforming global patient care by enhancing outcomes through unparalleled quality, affordability, and accessibility.
                </span>
              </p>
            </div>
            <div className="absolute right-0 top-[15%] fadeUp opacity-0 tablet:top-[45%] mobile:relative">
              <div className="w-[50vw] h-[35vw] relative bottom-[10%] mobile:w-[100vw] mobile:h-[80vw] mobile:bottom-[50%] tablet:bottom-0 tablet:w-[65vw] tablet:h-[45vw]">
                <Image
                  className="hero-img object-cover w-full h-full"
                  src="/assets/about/hero-image.webp"
                  alt="Hero Image"
                  priority={true}
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero