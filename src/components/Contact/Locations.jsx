import Image from 'next/image'
import React from 'react'

const Locations = () => {
  return (
    <>
    <section id='location' className='relative w-screen h-[45vw] pb-[5%]'>
       <div className='px-[10vw] w-full h-full flex justify-center items-center'>
        <div className='flex flex-col gap-[7vw]'>
            <h2 className='text-[4vw] text-white aeonik font-light '>Other Offices</h2>
            <div className='flex flex-wrap w-full text-white gap-y-[4vw]'>
                <div className='w-[50%] flex gap-[1.5vw] '>
                    <div className='w-[5vw] h-[5vw] relative'>
                        <Image src={"/assets/contact/location.png"} alt='location-icon' fill className='object-contain w-full h-full'/>
                    </div>
                    <div className='flex flex-col gap-[0.4vw] text-[1.2vw] aeonik font-extralight w-[72%]'>
                        <p>Corporate HQ
                        </p>
                        <p>Somerset Road, #07-08 Triple One Somerset, Singapore - 238164 T: (65) 63691080/ 891</p>

                    </div>
                </div>
                <div className='w-[50%] flex gap-[1.5vw]'>
                    <div className='w-[5vw] h-[5vw] relative'>
                        <Image src={"/assets/contact/location.png"} alt='location-icon' fill className='object-contain w-full h-full'/>
                    </div>
                    <div className='flex flex-col gap-[0.4vw] text-[1.2vw] aeonik font-extralight w-[72%]'>
                        <p>Corporate HQ
                        </p>
                        <p>Somerset Road, #07-08 Triple One Somerset, Singapore - 238164 T: (65) 63691080/ 891</p>

                    </div>
                </div>
                <div className='w-[50%] flex gap-[1.5vw]'>
                    <div className='w-[5vw] h-[5vw] relative'>
                        <Image src={"/assets/contact/location.png"} alt='location-icon' fill className='object-contain w-full h-full'/>
                    </div>
                    <div className='flex flex-col gap-[0.4vw] text-[1.2vw] aeonik font-extralight w-[72%]'>
                        <p>Corporate HQ
                        </p>
                        <p>Somerset Road, #07-08 Triple One Somerset, Singapore - 238164 T: (65) 63691080/ 891</p>

                    </div>
                </div>
                <div className='w-[50%] flex gap-[1.5vw]'>
                    <div className='w-[5vw] h-[5vw] relative'>
                        <Image src={"/assets/contact/location.png"} alt='location-icon' fill className='object-contain w-full h-full'/>
                    </div>
                    <div className='flex flex-col gap-[0.4vw] text-[1.2vw] aeonik font-extralight w-[72%]'>
                        <p>Corporate HQ
                        </p>
                        <p>Somerset Road, #07-08 Triple One Somerset, Singapore - 238164 T: (65) 63691080/ 891</p>

                    </div>
                </div>
            </div>

        </div>

       </div>
       <div className='absolute h-full w-full z-[-1] top-0 left-0'>
        <Image src={"/assets/contact/loactions-bg.png"} alt='locations-bg' fill/>

       </div>
    </section>
      
    </>
  )
}

export default Locations
