import Image from 'next/image'
import React from 'react'

export default function Offerings() {
  return (
    <>
    <section id='offerings' className='pb-[7%] pt-[2%]'>
        <div className='container-lg h-full flex flex-col gap-[5vw]'>
            <h2 className='title-2 font-light text-center aeonik'>OEM Offerings</h2>
            <div className='w-full flex justify-between h-full'>
                <div className='w-[20vw] h-[25vw] rounded-[3vw] px-[1vw] py-[1vw] bg-white flex flex-col justify-between '>
                    <h5 data-para-anim className='aeonik text-[1.4vw] text-center font-light mt-[1vw]'>Surgical Suture Needles</h5>
                    <div className='w-full h-[18vw] relative rounded-[2vw] overflow-hidden'>
                        <Image src="/assets/oem/suture-card-needle.webp" alt='suture-needle' className='object-cover' fill/>

                    </div>

                </div>
                <div className='w-[20vw] h-[25vw] rounded-[3vw] px-[1vw] py-[1vw] bg-white flex flex-col justify-between   '>
                    <h5 data-para-anim className='aeonik text-[1.4vw] text-center font-light mt-[1vw]'>Sternotomy Suture</h5>
                    <div className='w-full h-[18vw] relative rounded-[2vw] overflow-hidden'>
                        <Image src="/assets/oem/sternotomy.webp" alt='sternotomy' className='object-cover' fill/>

                    </div>

                </div>
                <div className='w-[20vw] h-[25vw] rounded-[3vw] px-[1vw] py-[1vw] bg-white flex flex-col justify-between   '>
                    <h5 data-para-anim className='aeonik text-[1.4vw] text-center font-light mt-[1vw]'>Hernia Solutions</h5>
                    <div className='w-full h-[18vw] relative rounded-[2vw] overflow-hidden'>
                        <Image src="/assets/oem/oem-hernia-img.webp" alt='oem-hernia' className='object-cover' fill/>

                    </div>

                </div>
                <div className='w-[20vw] h-[25vw] rounded-[3vw] px-[1vw] py-[1vw] bg-white flex flex-col justify-between   '>
                    <h5 data-para-anim className='aeonik text-[1.4vw] text-center font-light mt-[1vw]'>Stent Delivery Systems</h5>
                    <div className='w-full h-[18vw] relative rounded-[2vw] overflow-hidden'>
                        <Image src="/assets/oem/stent.webp" alt='stent' className='object-cover' fill/>

                    </div>

                </div>



            </div>
            <div className='w-full h-full relative z-[4] fadeUp'>
                <div className='absolute z-[7]'>
                    <h3 data-para-anim className='aeonik text-[2.7vw] leading-[1.25] font-light'>Surgical Suture Needles</h3>
                    <p data-para-anim className='text-[1.8vw] font-light aeonik leading-[1.25]'>The Next Generation of Needle Technology</p>
                </div>
                <div className='w-full h-[37vw] relative '>
                    <h4 data-para-anim className='absolute aeonik text-[3vw] z-[5] font-light left-[-1%] top-[54%] -rotate-90'>Feature</h4>
                    <Image src="/assets/oem/oem-card-layout.webp" alt='oem-card-layout' className='object-contain relative z-[2]' fill/>
                    <div className='absolute z-[5] left-[17%] top-[35%]'>
                        <ul  className="list-disc space-y-[0.8vw] text-[1.3vw] font-light">
                            <li data-para-anim>Advanced US & German Technology</li>
                            <li data-para-anim>Cutting-Edge Robotics and Automation</li>
                            <li data-para-anim>Robust Capacity of 60 Million Needles Annually</li>
                            <li data-para-anim>Precision Engineering & Quality Assurance</li>
                            <li data-para-anim>Expedited Turnaround and Delivery</li>
                            <li data-para-anim>60,000 sq. ft. Needle Production Facility</li>
                            <li data-para-anim>Team with Over 2-3 Decades of Expertise</li>
                        </ul>
                    </div>

                </div>
                    <div className='w-[50vw] h-[37vw] absolute top-[0.5%] right-0 z-[8] overflow-hidden'>
                        <Image src="/assets/oem/suture-needle.webp" alt='suture-needle' className='object-cover' fill/>

                    </div>


            </div>

        </div>

    </section>
      
    </>
  )
}


