import React from 'react'
import Image from 'next/image'

const HD2 = () => {
  return (
   <>
   <section>
    <div className='w-screen h-screen bg-[#020F20]'>
        <div className='w-screen h-[80%] bg-white flex flex-col-reverse justify-between items-start pt-[4vw]'>
            <div className='w-[80%] h-[100%] relative'>
            <Image 
            src="/assets/advastap/hd2.png"
            fill
            alt='advastap-about'
            className='object-cover'
            />
            </div>
            <div className=" w-[50%] pl-[10vw] ">
            <h1 className="text-[3vw]   aeonik drop-shadow-lg leading-[1]">
              <span className="leading-[1.3] overflow-hidden  w-[80%] mobile:w-full mobile:text-center">
                ADVASTAP HD II
              </span>
            </h1>
            <p className=" mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] flex items-center justify-start">
              <span className=" mobile:text-center uppercase tracking-widest">
              2-Row Hemorrhoid Stapler
              </span>
            
            </p>
          </div>

        </div>
        <div className='w-screen h-[20%] flex items-center justify-center'>
        <div  className="text-white text-[2.7vw] uppercase tracking-widest gradient-text">
           <p>Safe. Superior. Precisely invasive.</p>
            </div>

        </div>

    </div>
   </section>
   </>
  )
}

export default HD2