import React from 'react'
import Image from 'next/image'
import { fadeIn } from '../gsapAnimations'

const Versatility = () => {
  fadeIn();
  return (
    <section className="overflow-hidden py-[2%] mobile:py-[10%] relative" id="versatility">
    <div className="w-screen h-[55vw] container-lg  mobile:h-[120vh] tablet:h-[70%] ">
      <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw] mobile:h-fit mobile:static">
        <div className="w-full h-full flex flex-col items-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
          <h2
            data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center mobile:w-full"
          >
            Versatility Meets Strength
          </h2>
        </div>
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <div className="h-[40vw] w-[70vw] absolute scale-[1] left-[-10%] bottom-[-5%] mobile:order-1 mobile:w-[180vw] mobile:h-[120vw] mobile:right-[-80%] mobile:left-auto mobile:top-[45%] mobile:absolute">
            <Image
              src="/assets/reloads/reloads2.png"
              fill
              alt="Reloads Product"
              className="object-contain mobile:rotate-[-80deg] fadein"
            />
          </div>
          <div className='absolute bottom-[10%] left-[40%] mobile:bottom-[10%] mobile:left-[10%]'>
            <p className='text-[1.67vw] font-light mobile:text-[6vw] mobile:w-[50%] mobile:text-center mobile:leading-[1.2]'>Three rows of varied height staples</p>
          </div>
          <div className='absolute top-[35%] left-[5%] mobile:top-[55%]  '>
            <p   className='text-[1.67vw] font-light mobile:text-[6vw] mobile:w-[60%] mobile:text-center'><span>Drop shaped anvil pockets</span></p>
          </div>
          <div className='absolute right-[10%] top-[45%] mobile:static mobile:w-[80vw] mobile:h-[30vw] mobile:flex mobile:flex-col mobile:gap-[4vw] '>
            <Image src="/assets/reloads/stepped.png" height={200} width={200} alt="stepped" className='object-contain w-full h-full'/>
            <p data-para-anim className='text-[1.67vw] font-light mobile:text-[7vw]'>Stepped cartridge face</p>
          </div>
        </div>

      </div>
    </div>
        <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0">
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