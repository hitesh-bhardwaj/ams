import React from 'react'
import { paraAnim } from '../gsapAnimations'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(useGSAP,ScrollTrigger)
import Image from 'next/image'
const Hero = () => {

paraAnim()
useGSAP(()=>{
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:"manufacturing-container",
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
    <section className=" mb-[12%] manufacturing-container " id='hero'>
      <div className='w-[100vw] h-[100vh] relative overflow-hidden'>
        <div className='w-screen h-screen absolute'>
        <Image
                  className="hero-img absolute object-cover"
                  src="/assets/manufacturing/manufacturing-hero.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />

        </div>
        
    <div className="px-[10%] relative">
   
      <div className="flex h-dvh w-full flex-col justify-center items-start">
        <div className="">
          <h1 data-para-anim className="title-1 aeonik drop-shadow-md  leading-[1] ">
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF] ">
           Commitment To
            </span>
            <br />
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF]">
          Global Standards
            </span>
          </h1>
          <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p ">
            <span data-para-anim className='text-[#FFFFFF]'>
            The eco-friendly AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications.
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