import React from 'react'
import Image from 'next/image'
import { paraAnim } from '../gsapAnimations'
const Hero = () => {
  paraAnim()
  return (
    <section className=" mb-[12%] hernia-container" id='hero'>
      <div className='w-[100vw] h-[100vh]'>
      <Image
                  className="hero-img absolute object-cover"
                  src="/assets/hernia/hernia-hero.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
    <div className="px-[12%] relative">
      <div className="flex h-dvh w-full flex-col justify-center items-start">
        <div className="">
          <h1 data-para-anim className="title-1 aeonik drop-shadow-md  leading-[1]text-shadow ">
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF]">
            Advanced Hernia Repair
            </span>
            <br />
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF]">
          Solutions for Superior Outcomes
            </span>
          </h1>
          <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p ">
            <span data-para-anim className='text-[#FFFFFF] text-shadow'>
            At AMS, we are setting new standards in hernia repair with our cutting-edge hernia solutions.
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