import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'

const Sirolimus = () => {
  return (
    <>
      <section id='SiroLimus' className=' w-screen h-screen relative py-[8%] bg-white/50 overflow-hidden'>
      <div className='container-lg'>

        <div className='w-[45vw] h-[30vw] rounded-[4vw] p-[4vw] py-[8vw] flex flex-col glassmorphism-light justify-between border border-gray-400/60'>
            <div>
                
                <h3 className='text-[4vw] leading-[1.2] aeonik font-light'>ADVA PRO</h3>
            <p className='text-[1.6vw] capitalize font-extralight mb-[1.5vw]'>sirolimus drug eluting Stent system</p>
                </div>
            <PrimaryButton btnText={"See More"} link={"#"}/>
          

        </div>
      </div>
        <div className=' absolute w-[45vw] h-full right-0 top-[-15%]'>
            <Image src={"/assets/advaglide/advaglide-visit.png"} alt='advaglide-visit-bg' fill className='object-contain w-full h-full' />

        </div>

      </section>
    </>
  )
}

export default Sirolimus
