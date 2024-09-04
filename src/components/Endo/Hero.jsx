import React from 'react'
import Image from 'next/image'
import { paraAnim } from '../gsapAnimations'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(useGSAP,ScrollTrigger)
const Hero = () => {
  paraAnim()
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:"endo-container",
        scrub:true,
       
      }
    })
    tl.to(".hero-img",{
      yPercent:60,

    })
    gsap.fromTo(".hero-img",{
      scale:1.1,
      yPercent:-30,
    },{
      scale:1,
      yPercent:0,
      duration:1,
      delay:0.1,
      ease: "power3.out"
    })
  
  })
  return (
    <section className=" mb-[12%] endo-container" id='hero'>
      <div className='w-[100vw] h-[100vh] relative overflow-hidden'>
        <div className='w-screen h-screen absolute'>
        <Image
                  className="hero-img absolute object-cover"
                  src="/assets/endo/endo-hero.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />

        </div>
       
    <div className="px-[12%] relative">
      <div className="flex h-dvh w-full flex-col justify-center items-start">
        <div className="">
          <h1 data-para-anim className="title-1 aeonik drop-shadow-lg  leading-[1] text-shadow">
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF] ">
            Breaking New Ground
            </span>
            <br />
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF]">
           in Endo Surgery
            </span>
          </h1>
          <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p ">
            <span data-para-anim className='text-[#FFFFFF] text-shadow'>
            At AMS, we push the boundaries of endo surgery and set new benchmarks in surgical excellence with our innovative and reliable solutions.
            </span>
          </p>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default Hero