import Image from 'next/image'
import React from 'react'

const CardiacCare = () => {
  return (
    <section className='py-[5%]'>
        <div className='container-lg h-full flex justify-between gap-[2.5vw]'>
            <div className='w-[45%] h-full flex flex-col gap-[3.5vw]'>
                <div className='w-full flex flex-col gap-[2vw]'>

                    <h3 data-para-anim className='aeonik text-[3vw] leading-[1.25] font-light capitalize'>How do we empower those whodedicate their lives to healing others?</h3>
                    <p data-para-anim className='content-p text-justify'>At AMA, we equip healthcare professionals with the tools, knowledge, and confidence to navigate complex clinical challenges. Together, we are creating safer surgical settings, enhancing patient care, and building a future where excellence in healthcare knows no bounds.</p>

                </div>
                <div className='w-full relative h-[35vw] rounded-[3vw] overflow-hidden fadeUp'>
                    <Image src={"/assets/ama/ama-3-1.png"} alt='ama-3-1' fill/>

                </div>

            </div>
            <div className='w-[45%] h-full flex gap-[3.5vw] flex-col-reverse'>
                <div className='w-full flex flex-col gap-[2vw]'>

                    <h3 className='aeonik text-[3vw] leading-[1.25] font-light capitalize'>How do we put patients first
                    in every aspect of care?</h3>
                    <p className='content-p text-justify'>Our ethos—“What can I do to improve patient care?”—guides every initiative. With a global network of renowned faculty, AMA provides not just learning but lifelong mentorship, supported by expert advice from the industry&apos;s most distinguished professionals.</p>

                </div>
                <div className='w-full relative h-[35vw] rounded-[3vw] overflow-hidden fadeUp'>
                    <Image src={"/assets/ama/ama-3-2.png"} alt='ama-3-2' fill/>

                </div>

            </div>

        </div>
      
    </section>
  )
}

export default CardiacCare
