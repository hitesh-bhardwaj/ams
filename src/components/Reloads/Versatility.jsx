import React from 'react'
import Image from 'next/image'
import { fadeIn } from '../gsapAnimations'

const Versatility = () => {
  fadeIn();
  return (
    <section className="overflow-hidden relative mobile:py-[10%]" id="versatility">
    <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
      <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw]">
        <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
          <h2
            data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center"
          >
            Versatility Meets Strength
          </h2>
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="h-[50vw] w-[80vw] relative scale-[1] left-[-15%]">
            <Image
              src="/assets/reloads/reloads2.png"
              fill
              alt="Reloads Product"
              className="object-cover fadein"
            />
          </div>
          <div className='absolute bottom-[35%]'>
            <p data-para-anim className='text-[1.67vw] font-light'>Three rows of varied height staples</p>
          </div>
          <div className='absolute top-[15%] left-[5%]'>
            <p  data-para-anim className='text-[1.67vw] font-light'>Drop shaped anvil pockets</p>
          </div>
          <div className='absolute right-0 top-[15%]'>
            <Image src="/assets/reloads/stepped.png" height={200} width={350} alt="stepped"/>
            <p data-para-anim className='text-[1.67vw] font-light'>Stepped cartridge face</p>
          </div>
        </div>

       
      </div>
    </div>
    <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1]">
          <Image
            src="/assets/advastapcs/ergonomic-bg.png"
            fill
            alt="Ergonomic bg"
            className="object-cover z-[-1]"
          />
        </div>
  </section>
  )
}

export default Versatility