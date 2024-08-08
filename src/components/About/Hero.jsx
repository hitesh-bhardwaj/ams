import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  return (
   <>
   <section className="hero main-gradient mb-[12%]">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="">
                <h1 className="title-1 aeonik drop-shadow-md hero-anim leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                    Advancing Healthcare
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                     for Generations to Come
                  </span>
                </h1>
                <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
                  <span>
                  We are committed to transforming global patient care by enhancing outcomes through unparalleled quality, affordability, and accessibility.
                  </span>
                </p>
              </div>

              <div className="absolute w-[61%] right-0 bottom-[5%]">
                <Image
                  className="hero-img"
                  src="/assets/about/hero-image.png"
                  alt="Hero Image"
                  width= {1000}
                  height= {1000}
                />
              </div>
              
            </div>
          </div>
        </section>
   </>
  )
}

export default Hero