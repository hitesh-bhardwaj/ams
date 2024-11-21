import React from 'react'
import Image from 'next/image'

const Manifold = () => {
  return (
    <section className="overflow-hidden  mobile:py-[10%]" id="manifold">
    <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
      <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw]">
        <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
          <h2
            data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center"
          >
          Manifold
          </h2>
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="h-[45vw] w-[80vw] relative">
            <Image
              src="/assets/accessories/manifold.png"
              fill
              alt="Ergonomic Product"
              className="object-contain"
            />
          </div>

          <div className="absolute h-fit w-[35%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-0 top-[5%]">
            <p className="text-[2.2vw] font-light">Can connect multiple medical devices together</p>
            
          </div>
          <div className="absolute h-fit w-[35%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-0 top-[3%]">
            <p className="text-[2.2vw] font-light">Clear handle sign indicates fluid control</p>
            
          </div>
          <div className="absolute  h-fit w-[35%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] right-0 bottom-[20%]">
            <p className="text-[2.2vw] font-light">Standard luer connector</p>
          </div>
          <div className="absolute  h-fit w-[45%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism flex flex-col items-start justify-center text-[#2A2A2A] left-[2%] bottom-0">
            <p className="text-[2.2vw] font-light">Flexible luer provides better sealing performance under 500 PSI pressure</p>
          </div>
        </div>

        <div className="absolute h-[100%] w-[100vw] ">
          <Image
            src="/assets/advastapcs/ergonomic-bg.png"
            fill
            alt="Ergonomic bg"
            className="object-cover z-[-1]"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Manifold