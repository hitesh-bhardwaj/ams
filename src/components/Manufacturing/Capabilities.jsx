import React from 'react'
import Image from 'next/image'
import { paraAnim } from '../gsapAnimations'

const Capabilities = () => {
  paraAnim()
  return (
    <>
    <section id='capabilities'>
    <div className=' container-lg flex flex-col items-center justify-center py-[7%] '>
    <div>
        <h2 data-para-anim className="title-2 aeonik ">
          <span>Our Capabilities</span>
        </h2>
      </div>
      <div className=' mt-[10%] flex justify-between w-full px-[5%] '>
        <div className='capability-card group'>
        <div className='capability-card-outer absolute rotate-[10deg] transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] '></div>
        <div className='h-[20vw] w-[20vw] bg-white/50 absolute rounded-[40px] border border-gray-200 glassmorphism '></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center'>
    <div className='h-[8vw] w-[5vw] relative top-[-10%] group-hover:scale-[1.2] transition-all duartion-500 ease-in-out'>
      <Image
        src="/assets/manufacturing/capability-1.png"
        fill
        alt='capability-1'
        className='object-contain'
      />
    </div>
    <div className='mt-[12vw] absolute'>
      <p className='text-[1.5vw] font-light'>Engineering</p>
    </div>
        </div>  
  </div>

  <div className='capability-card group'>
        <div className='capability-card-outer absolute rotate-[10deg] transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] '></div>
        <div className='h-[20vw] w-[20vw] bg-white/50 absolute rounded-[40px] border border-gray-200 glassmorphism'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center'>
    <div className='h-[10vw] w-[6vw] relative top-[-10%] group-hover:scale-[1.2] transition-all duartion-500 ease-in-out'>
      <Image
        src="/assets/manufacturing/capability-2.png"
        fill
        alt='capability-1'
        className='object-contain'

      />
    </div>
    <div className='mt-[12vw] absolute'>
      <p className='text-[1.5vw] font-light'>Technology</p>
    </div>
        </div>  
  </div>

  <div className='capability-card group'>
        <div className='capability-card-outer absolute rotate-[10deg] transition-all duration-500 ease-in-out group-hover:rotate-[-10deg] '></div>
        <div className='h-[20vw] w-[20vw] bg-white/50 absolute rounded-[40px] border border-gray-200 glassmorphism'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center'>
    <div className='h-[10vw] w-[6vw] relative top-[-10%] group-hover:scale-[1.2] transition-all duartion-500 ease-in-out'>
      <Image
        src="/assets/manufacturing/capability-3.png"
        fill
        alt='capability-1'
        className='object-contain'

      />
    </div>
    <div className='mt-[12vw] absolute'>
      <p className='text-[1.5vw] font-light'>Innovation</p>
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