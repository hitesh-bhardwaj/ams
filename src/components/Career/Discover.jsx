import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'
import { imgAnim } from '../gsapAnimations'

const Discover = () => {
  imgAnim()
  return (
   <section id='discover'>
    <div className='container-lg px-[5%] flex justify-between '>
        <div className='w-[45%] flex flex-col items-start justify-center gap-[4vw]'>
         <h2 className="title-2 aeonik">
            <span data-para-anim  >Discover the profound impact our work is having on patients everywhere</span>
          </h2>
          <PrimaryButton link='/' btnText="Let's Meet" />
          </div>
        <div className='w-[50%] flex flex-col items-end justify-center gap-[2vw]'>
          <div className='w-[25vw] h-[20vw] rounded-[40px] overflow-hidden relative fadeUp'>
          <Image
            src="/assets/career/career-discover-1.png"
            fill
            alt="Discover"
            className='imageAnim object-cover'/>

          </div>
          <div className='w-[35vw] h-[25vw] rounded-[40px] overflow-hidden relative fadeUp'>
          <Image
            src="/assets/career/career-discover-2.png"
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