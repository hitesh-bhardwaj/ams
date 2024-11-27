import Image from 'next/image'
import React from 'react'

const TricCut = () => {
  return (
    <section id='tricut' className='w-screen h-[65vw] overflow-hidden py-[5%] mobile:py-[15%] relative bg-white/20 mobile:h-[135vh]'>
        <div className='container-lg flex items-center flex-col gap-[4vw] mobile:gap-[18vw]'>
            <h2 data-para-anim className='title-2 aeonik mobile:text-center'>Tri-Cut Technology</h2>
            <div className='w-full flex h-full items-center justify-start pl-[10vw] gap-[8vw] mobile:pl-0 mobile:flex-col mobile:gap-[15vw]'>
              <div className='w-fit h-fit rounded-full'>
                <div className='w-[20vw] h-[20vw] rounded-full overflow-hidden relative mobile:w-[70vw] mobile:h-[70vw]'>
                  <Image src={"/assets/advagrip/tricut-Circle.png"} alt='tricut-circle' fill/>
                </div>
              </div>
              <div className='w-[45%] h-fit px-[2vw] py-[2.5vw] glassmorphism border rounded-[2.5vw] mobile:w-[95%] mobile:px-[5vw] mobile:py-[7vw] mobile:rounded-[7vw]'>
                <p className='text-[1.8vw] w-full font-light mobile:text-[4.8vw] mobile:text-center'>Produces barbs that delivers a robust anchoring force whilst maintaining the integrity of the strand’s strength.</p>

              </div>
     

            </div>


        </div>
        <div className='absolute bottom-[10%] w-[100vw] h-[50vw] z-[-1] mobile:h-[100vw] mobile:z-[-1] mobile:w-[180vw] mobile:bottom-[20%] mobile:left-[-50%]'>
            <Image src={"/assets/advagrip/tricut-bg.png"} alt='tricut-bg' fill className='mobile:rotate-[-40deg] mobile:object-contain mobile:w-full mobile:h-full'/>
        </div>
      
    </section>
  )
}

export default TricCut
