import React from 'react'
import Image from 'next/image'

const Capabilities = () => {
  return (
    <>
    <section className='container-lg flex flex-col items-center justify-center '>
    <div>
        <h2 className="title-2 aeonik ">
          <span>Our Capabilities</span>
        </h2>
      </div>
      <div className=' mt-[5%] flex gap-[5vw] '>
        <div className='capability-card'>
        <div className='capability-card-outer absolute'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center   bg-white/50 '>
    <div className='h-[8vw] w-[8vw] absolute'>
      <Image
        src="/assets/manufacturing/capability-1.png"
        fill
        alt='capability-1'
      />
    </div>
    <div className='mt-[12vw] absolute'>
      <p className='text-[1.5vw] font-light'>Engineering</p>
    </div>
        </div>  
  </div>

  <div className='capability-card'>
        <div className='capability-card-outer absolute'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center   bg-white/50 '>
    <div className='h-[8vw] w-[8vw] absolute'>
      <Image
        src="/assets/manufacturing/capability-2.png"
        fill
        alt='capability-1'
      />
    </div>
    <div className='mt-[12vw] absolute'>
      <p className='text-[1.5vw] font-light'>Technology</p>
    </div>
        </div>  
  </div>

  <div className='capability-card'>
        <div className='capability-card-outer absolute'></div>
        <div className='h-[20vw] w-[20vw] flex flex-col items-center justify-center   bg-white/50 '>
    <div className='h-[8vw] w-[8vw] absolute'>
      <Image
        src="/assets/manufacturing/capability-3.png"
        fill
        alt='capability-1'
      />
    </div>
    <div className='mt-[12vw] absolute'>
      <p className='text-[1.5vw] font-light'>Innovation</p>
    </div>
        </div>  
  </div>
      

      </div>

    </section>
    </>
  )
}

export default Capabilities