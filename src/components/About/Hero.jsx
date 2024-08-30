import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import { useEffect } from "react";
import { gsap } from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Hero = () => {

  useEffect(() => {
    const ctx = gsap.context(() => {
             gsap.to(".fadeUp",{
              yPercent:-10,
              opacity:1,
              delay:0.2,
              duration:1,
              scrollTrigger:{
                trigger:".fadeUp",
                start:"top 34%",
                
              }
             })
          });
          return () => ctx.revert();
    
    
  }, []); 


  paraAnim()
  return (
   <>
   <section className="hero main-gradient h-[100vh] mb-[12%]" id="hero">
          <div className="px-[10%] relative">
            <div className="flex h-dvh w-full justify-start items-center">
              <div className="">
                <h1 data-para-anim  className="title-1 aeonik drop-shadow-md leading-[1]">
                  <span className="leading-[1.2] overflow-hidden">
                    Advancing Healthcare
                  </span>
                  <br />
                  <span className="leading-[1.2] overflow-hidden">
                     for Generations to Come
                  </span > 
                </h1>
                <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p">
                  <span data-para-anim>
                  We are committed to transforming global patient care by enhancing outcomes through unparalleled quality, affordability, and accessibility.
                  </span>
                </p>
              </div>
              <div className="absolute right-0 top-[25%] fadeUp opacity-0">
              <div className="w-[55vw] h-[38vw] relative bottom-[5%] ">
                <Image
                  className="hero-img"
                  src="/assets/about/hero-image.png"
                  alt="Hero Image"
                  priority={true}
                  fill
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