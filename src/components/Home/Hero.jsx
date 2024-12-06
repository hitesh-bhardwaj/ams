import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { Media } from "../media";
import { useEffect, useState } from "react";
import { useDevice } from "../useDevice";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() { 
  const {isDesktop} = useDevice()
  const [isClient , setIsClient]= useState(null)
  
  useEffect(() => {
    // Create a GSAP context
    const ctx = gsap.context(() => {
      // Define your animations here within the context
      const tl = gsap.timeline();
      tl.from(".hero-img-anim", {
        yPercent: 10,
        opacity: 0,
        delay: 0.5,
      });
    });

    // Clean up the context on component unmount
    return () => ctx.revert();
  }, []);
// if(!isClient) return null;
  
    return (
        <section className="hero mobile:mb-[0vw] overflow-hidden" id="hero">
          <div className="px-[12%] relative mobile:px-[5vw] mobile:w-[100vw] tablet:px-[10%] ">
            <div className="flex h-dvh w-full justify-start items-center mobile:h-screen tablet:h-[60vh]">
              <div className="w-[55%] mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center tablet:w-3/4">
                <h1 data-para-anim className="title-1 aeonik drop-shadow-md overflow-hidden mobile:text-center mobile:text-[15vw]">
                    Advancing the way we care
                </h1>
                <p  className="font-light max-w-[30vw] text-[1.25vw] mt-[4vw] mb-[4vw] mobile:text-[4.5vw] mobile:max-w-[90vw] mobile:text-center mobile:mt-[10vw] mobile:px-[5vw] mobile:mb-[15vw]  tablet:text-[2vw] tablet:max-w-[40vw]">
                  <span data-para-anim className="mobile:leading-[1.8]">
                    AMS is dedicated to <strong>advancing</strong> the spectrum of healthcare by providing meaningful <strong>MedTech solutions</strong> for healthcare professionals, improving lives for <strong>patients</strong> around the <strong>world.</strong>
                  </span>
                </p>
                <PrimaryButton btnText={'Discover'} link={'/'} className={"fadeUp"} />
               
              </div>
             <Media greaterThan="mobile">
              <div className="absolute w-[43%] right-0 bottom-0">

              <div className=" w-[43vw] h-[38vw]  hero-img-anim  tablet:w-[45vw] tablet:h-[42vw] overflow-hidden">
                <Image
                  className="hero-img"
                  src="/assets/home/hero-image.webp"
                  alt="Hero Image"
                  width={830}
                  height={765}
                  
                  priority={true}
                />
              </div>
              </div>
             </Media>
              
            </div>
          </div>
        </section>
    )
}