import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'

const Discover = () => {
  return (
   <section id='discover'>
    <div className='container-lg px-[5%] flex justify-between '>
        <div className='w-[45%] flex flex-col items-start justify-center gap-[3vw]'>
         <h2 className="title-2 aeonik">
            <span data-para-anim  >Discover the profound impact our work is having on patients everywhere</span>
          </h2>
          <PrimaryButton link='/' btnText="Let's Meet"/>
          </div>
        <div className='w-[50%] flex flex-col items-end justify-center gap-[2vw]'>
            <Image
            src="/assets/career/career-discover-1.png"
            width={400}
            height={400}
            alt="Discover"
            className='rounded-[40px]'/>
            <Image
            src="/assets/career/career-discover-2.png"
            width={700}
            height={700}
            alt="Discover"
            className='rounded-[40px]'
            />
        </div>
    </div>
   </section>
  )
}

export default Discover