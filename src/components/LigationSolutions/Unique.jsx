import Image from 'next/image'
import React from 'react'

const Unique = () => {
  return (
   <>
   <section id='unique' className='py-[8vw]'>
   <div className='h-full w-screen tablet:h-full mobile:h-full '>
          <div className='h-full w-full flex flex-col   items-center justify-center gap-[7vw] tablet:py-[5vw] tablet:h-[60%] mobile:h-full mobile:py-[20%]'>
            <div className='mobile:w-[90%] tablet:w-[70%]'>
              <h2
data-para-anim className='title-2 aeonik mobile:text-center tablet:text-center capitalize'>Unique tip first closing behavior</h2>
            </div>
            <div className='flex flex-col items-center justify-evenly px-[5vw] gap-[3vw] w-full feature-card-container mobile:flex-col tablet:flex-wrap tablet:justify-center tablet:items-start mobile:gap-[20vw] mobile:mt-[15vw]'>
                <div className=''>
                    <Image src="/assets/ligation/unique-tip.png" alt='unique-tip' width={1728} height={269} className='fadeUp'/>
                </div>
                <div className='mt-[2vw]'>
                    <p data-para-anim className='text-[#2A2A2A] font-light text-[1.65vw]'>Distinguished chevron shape for safe and precise positioning</p>
                </div>
            </div>
          </div>
        </div>
   </section>
   </>
  )
}

export default Unique