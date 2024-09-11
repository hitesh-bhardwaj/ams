import React from 'react'
import Image from 'next/image'
import { paraAnim } from '../gsapAnimations'

const Capabilities = () => {
  paraAnim()
  return (
    <>
    <section id='capabilities'>
    <div className=' container-lg flex flex-col items-center justify-center py-[7%] mobile:py-[15%] '>
    <div>
        <h2 data-para-anim className="title-2 aeonik mobile:mb-[10vw] ">
          <span>Our Capabilities</span>
        </h2>
      </div>
      <div className=' mt-[10%] flex justify-between w-full px-[5%] mobile:flex-col mobile:gap-[25vw] '>
        <div className='capability-card group'>
        <div className='capability-card-outer absolute rotate-[10deg] transition-all duration-300 ease-in-out group-hover:rotate-[0deg] '></div>
        <div className='h-[20vw] w-[20vw] bg-white/50 absolute rounded-[40px] border border-gray-200 glassmorphism mobile:w-[80vw] mobile:h-[80vw]'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center mobile:w-[80vw] mobile:h-[80vw]'>
    <div className='h-[8vw] w-[5vw] relative top-[-10%] group-hover:scale-[1.5] transition-all duration-300 ease-in-out mobile:h-[40vw] mobile:w-[40vw]'>
      <Image
        src="/assets/manufacturing/capability-1.webp"
        fill
        alt='capability-1'
        className='object-contain'
      />
    </div>
    <div className='mt-[12vw] absolute mobile:mt-[50vw]'>
      <p className='text-[1.5vw] font-light mobile:text-[7vw]'>Engineering</p>
    </div>
        </div>  
  </div>

  <div className='capability-card group'>
        <div className='capability-card-outer absolute rotate-[10deg] transition-all duration-300 ease-in-out group-hover:rotate-[0deg] '></div>
        <div className='h-[20vw] w-[20vw] bg-white/50 absolute rounded-[40px] border border-gray-200 glassmorphism mobile:w-[80vw] mobile:h-[80vw]'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center mobile:w-[80vw] mobile:h-[80vw]'>
    <div className='h-[10vw] w-[6vw] relative top-[-10%] group-hover:scale-[1.5] transition-all duration-300 ease-in-out mobile:h-[30vw] mobile:w-[30vw]'>
      <Image
        src="/assets/manufacturing/capability-2.webp"
        fill
        alt='capability-1'
        className='object-contain'

      />
    </div>
    <div className='mt-[12vw] absolute mobile:mt-[50vw]'>
      <p className='text-[1.5vw] font-light mobile:text-[7vw]'>Technology</p>
    </div>
        </div>  
  </div>

  <div className='capability-card group'>
        <div className='capability-card-outer absolute rotate-[10deg] transition-all duration-300 ease-in-out group-hover:rotate-[0deg] '></div>
        <div className='h-[20vw] w-[20vw] bg-white/50 absolute rounded-[40px] border border-gray-200 glassmorphism mobile:w-[80vw] mobile:h-[80vw]'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center mobile:w-[80vw] mobile:h-[80vw]'>
    <div className='h-[10vw] w-[6vw] relative top-[-10%] group-hover:scale-[1.5] transition-all duration-300 ease-in-out mobile:h-[30vw] mobile:w-[30vw]'>
      <Image
        src="/assets/manufacturing/capability-3.webp"
        fill
        alt='capability-1'
        className='object-contain'

      />
    </div>
    <div className='mt-[12vw] absolute mobile:mt-[50vw]'>
      <p className='text-[1.5vw] font-light mobile:text-[7vw]'>Innovation</p>
    </div>
        </div>  
  </div>
      

      </div>

    </div>

    </section>
   
    </>
  )
}

export default Capabilities