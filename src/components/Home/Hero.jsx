import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { paraAnim } from "../gsapAnimations";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';



gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Hero() {
  paraAnim()
 
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".hero-img-anim",{
      yPercent:10,
      opacity:0,
      delay:0.5
    })

  })

  
    return (
        <section className="hero mb-[12%] tablet:mb-[15%] mobile:mb-[0vw] overflow-hidden" id="hero">
          <div className="px-[12%] relative mobile:px-[5vw] mobile:w-[100vw] tablet:px-[10%] ">
            <div className="flex h-dvh w-full justify-start items-center mobile:h-[90vh] tablet:h-[50vh]">
              <div className="w-[60%] mobile:w-screen mobile:flex mobile:flex-col mobile:items-center mobile:justify-center tablet:w-3/4">
                <h1 data-para-anim className="title-1 aeonik drop-shadow-md leading-[0] overflow-hidden  mobile:hidden">
                  <span className="leading-[1.25] overflow-hidden">
                    Advancing the
                  </span>
                  <br />
                  <span className="leading-[1.25] overflow-hidden">
                     way we care
                  </span>
                </h1>
                <h1 className="text-[15vw] font-light aeonik drop-shadow-md leading-[0] overflow-hidden mobile:block hidden">
                  <span data-para-anim className="leading-[1.25] overflow-hidden text-center">
                    Advancing the
                  
                     way we care
                  </span>
                </h1>
                <p  className="font-light max-w-[30vw] text-[1.25vw] mt-[4vw] mb-[4vw] mobile:text-[4.5vw] mobile:max-w-[90vw] mobile:text-center mobile:mt-[10vw] mobile:px-[5vw] mobile:mb-[15vw]  tablet:text-[2vw] tablet:max-w-[40vw]">
                  <span data-para-anim className="mobile:leading-[1.8]">
                    AMS is dedicated to <strong>advancing</strong> the spectrum of healthcare by providing meaningful <strong>MedTech solutions</strong> for healthcare professionals, improving lives for <strong>patients</strong> around the <strong>world.</strong>
                  </span>
                </p>
                <PrimaryButton btnText={'Discover'} link={'/'} className={"fadeUp"} />
               
              </div>
              <div className="absolute w-[43%] right-0 bottom-0 mobile:hidden">

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
              
            </div>
          </div>
        </section>
    )
}