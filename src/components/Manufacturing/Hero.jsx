import React from 'react'
const Hero = () => {
  return (
    <section className=" mb-[12%] manufacturing-container" id='hero'>
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
  </section>
  )
}

export default Hero