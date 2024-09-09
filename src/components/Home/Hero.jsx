import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { paraAnim } from "../gsapAnimations";
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import Link from "next/link";


gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Hero() {
  paraAnim()
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //            gsap.to(".fadeUp",{
  //             yPercent:-10,
  //             opacity:1,
  //             delay:0.2,
  //             duration:1,
  //             scrollTrigger:{
  //               trigger:".fadeUp",
  //               start:"top 34%",
                
  //             }
  //            })
  //         });
  //         return () => ctx.revert();
    
    
  // }, []); 
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".hero-img-anim",{
      yPercent:10,
      opacity:0,
      delay:0.5
    })

  })

  
    return (
        <section className="hero mb-[12%]" id="hero">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="w-1/2">
                <h1 data-para-anim className="title-1 aeonik drop-shadow-md leading-[0] overflow-hidden">
                  <span className="leading-[1.25] overflow-hidden">
                    Advancing the
                  </span>
                  <br />
                  <span className="leading-[1.25] overflow-hidden">
                     way we care
                  </span>
                </h1>
                <p  className="font-light max-w-[30vw] text-[1.25vw] mt-[4vw] mb-[4vw]">
                  <span data-para-anim>
                    AMS is dedicated to <strong>advancing</strong> the spectrum of healthcare by providing meaningful <strong>MedTech solutions</strong> for healthcare professionals, improving lives for <strong>patients</strong> around the <strong>world.</strong>
                  </span>
                </p>
                <PrimaryButton btnText={'Discover'} link={'/'}/>
               
              </div>

              <div className="absolute w-[43%] right-0 bottom-0 hero-img-anim">
                <Image
                  className="hero-img"
                  src="/assets/home/hero-image.webp"
                  alt="Hero Image"
                  width= {1000}
                  height= {1000}
                  priority={true}
                />
              </div>
              
            </div>
          </div>
        </section>
    )
}