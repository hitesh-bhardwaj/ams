import React from 'react'
const Hero = () => {
  return (
    <section className=" mb-[12%] endo-container">
    <div className="px-[10%] relative">
      <div className="flex h-dvh w-full flex-col justify-center items-start">
        <div className="">
          <h1 className="title-1 aeonik drop-shadow-md  leading-[1] ">
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF] ">
            Breaking New Ground
            </span>
            <br />
            <span className="leading-[1.2] overflow-hidden text-[#FFFFFF]">
           in Endo Surgery
            </span>
          </h1>
          <p className=" max-w-[30vw] mt-[4vw] mb-[4vw] content-p ">
            <span className='text-[#FFFFFF]'>
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