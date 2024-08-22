import React from 'react'
import { paraAnim } from '../gsapAnimations'
const Hero = () => {
  paraAnim()
  return (
    <section className=" mb-[12%] endo-container" id='hero'>
    <div className="px-[12%] relative">
      <div className="flex h-dvh w-full flex-col justify-center items-start">
        <div className="">
          <h1 data-para-anim className="title-1 aeonik drop-shadow-lg  leading-[1] ">
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF] ">
            Breaking New Ground
            </span>
            <br />
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF]">
           in Endo Surgery
            </span>
          </h1>
          <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p ">
            <span data-para-anim className='text-[#FFFFFF]'>
            At AMS, we push the boundaries of endo surgery and set new benchmarks in surgical excellence with our innovative and reliable solutions.
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero