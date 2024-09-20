import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'
import { imgAnim } from '../gsapAnimations'

const Discover = () => {
  imgAnim()
  return ( 
   <section id='discover' className='tablet:py-[7%] pb-[5%]'>
    <div className='container-lg px-[5%] flex justify-between mobile:flex-col mobile:px-[4%] border border-gray-200 glassmorphism mobile:py-[15%] rounded-[3vw] mobile:rounded-[6vw] py-[5vw]'>
        <div className='w-[45%] flex flex-col items-start justify-center gap-[4vw] mobile:order-1 mobile:w-full mobile:items-center mobile:text-center mobile:gap-[12vw] mobile:mt-[12vw] tablet:w-[47%]'>
         <h2 className="title-2 aeonik">
            <span data-para-anim  >Discover the profound impact our work is having on patients everywhere</span>
          </h2>
          <PrimaryButton link='/' btnText="Let's Meet" className={"fadeUp"}/>
          </div>
        <div className='w-[50%] flex flex-col items-end justify-center gap-[2vw] mobile:w-full mobile:items-center mobile:gap-[5vw]'>
          <div className='w-[25vw] h-[20vw] rounded-[40px] overflow-hidden relative fadeUp mobile:w-[80vw] mobile:h-[100vw] mobile:rounded-[6vw] tablet:rounded-[3vw] tablet:w-[30vw] tablet:h-[25vw]'>
          <Image
            src="/assets/career/career-discover-1.webp"
            fill
            alt="Discover"
            className='imageAnim object-cover'/>

          </div>
          <div className='w-[35vw] h-[25vw] rounded-[40px] overflow-hidden relative fadeUp mobile:w-[80vw] mobile:h-[140vw] mobile:rounded-[6vw] tablet:rounded-[3vw] tablet:w-[38vw] tablet:h-[28vw]'>
          <Image
            src="/assets/career/career-discover-2.webp"
           fill
            alt="Discover"
            className='imageAnim object-cover'
            />

          </div>
            
        </div>
    </div>
   </section>
  )
}

export default Discover