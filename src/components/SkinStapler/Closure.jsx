import React from 'react'
import Image from 'next/image'

const Closure = () => {
  return (
    <section className="overflow-hidden  mobile:py-[10%]" id="think">
      <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
        <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw]">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
             Closure Than You Think
            </h2>
          </div>
          <div className="absolute h-[100%] w-[100vw]">
            <Image
              src="/assets/poweredlc/ergonomic-bg.png"
              fill
              alt="Precision bg"
              className="object-cover z-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Closure