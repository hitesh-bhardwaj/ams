import React from 'react'
import Image from 'next/image'

const State = () => {
  return (
    <>
      <section className='container-lg flex flex-col items-center justify-center mt-[15%] gap-[8vw]'>
        <div className='container-lg rounded-[40px] border-[1px] border-[#DADADA]  h-[30vw] px-[3vw] py-[3vw] flex bg-white/50 '>
         
          <div className='h-[100%] w-[65%] relative'>
            <Image
              src="/assets/manufacturing/state-1.png"
              fill
              alt='state-1'
           className='rounded-[30px]'
            />
          </div>

          <div className='flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]'>
            <h2 className='text-[2.5vw] font-light aeonik text-[#111111] w-[100%] leading-[1.2]'>State Of The Art Excellence</h2>
            <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
              Crafted by the visionary Spanish architect Ricardo Bofill, the AMS facility sprawls over 10.5 acres. Phase I spans 1.5 Lac sq. ft., with Phase II and III expanding by an additional 1 Lac sq. ft. each. Embracing Gold standards in Green building principles, our facility embodies sustainability fused with operational brilliance.
            </p>
          </div>

        </div>


        <div className='container-lg rounded-[40px] border-[1px] border-[#DADADA]  h-[30vw] px-[3vw] py-[3vw] flex bg-white/50 flex-row-reverse '>
         
         <div className='h-[100%] w-[65%] relative'>
           <Image
             src="/assets/manufacturing/state-2.png"
             fill
             alt='state-1'
          className='rounded-[30px]'
           />
         </div>

         <div className='flex flex-col w-[50%] mr-[5%] items-left justify-center gap-[2vw]'>
           <h2 className='text-[2.5vw] font-light aeonik text-[#111111] w-[100%] leading-[1.2]'>Cultivating High Standards</h2>
           <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
           AMS leverages global partnerships for cutting-edge technology, ensuring uncompromising quality and innovation. Our LEAN manufacturing and Class C clean room maintain precision and efficiency.
           </p>
         </div>

       </div>



       <div className='container-lg rounded-[40px] border-[1px] border-[#DADADA]  h-[30vw] px-[3vw] py-[3vw] flex bg-white/50 '>
         
         <div className='h-[100%] w-[65%] relative'>
           <Image
             src="/assets/manufacturing/state-3.png"
             fill
             alt='state-1'
          className='rounded-[30px]'
           />
         </div>

         <div className='flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]'>
           <h2 className='text-[2.5vw] font-light aeonik text-[#111111] w-[100%] leading-[1.2]'>Commitment to Quality</h2>
           <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
           Quality is our priority. We adhere to rigorous standards (Schedule M, L-1), backed by ISO 13485:2016 and CE certifications. Our advanced testing facilities ensure product safety and efficacy, reflecting our dedication to excellence. 
           </p>
         </div>

       </div>



       <div className='container-lg rounded-[40px] border-[1px] border-[#DADADA]  h-[30vw] px-[3vw] py-[3vw] flex bg-white/50 flex-row-reverse '>
         
         <div className='h-[100%] w-[65%] relative'>
           <Image
             src="/assets/manufacturing/state-4.png"
             fill
             alt='state-1'
          className='rounded-[30px]'
           />
         </div>

         <div className='flex flex-col w-[50%] mr-[5%] items-left justify-center gap-[2vw]'>
           <h2 className='text-[2.5vw] font-light aeonik text-[#111111] w-[100%] leading-[1.2]'>AMS OEM Solutions</h2>
           <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
           AMS offers comprehensive OEM solutions tailored to meet diverse client needs. With our state-of-the-art facility and expertise in manufacturing medical devices, we provide flexible and innovative OEM partnerships. From design to delivery, AMS ensures quality and compliance, empowering partners to bring their healthcare innovations to market with confidence.
           </p>
         </div>

       </div>



       <div className='container-lg rounded-[40px] border-[1px] border-[#DADADA]  h-[30vw] px-[3vw] py-[3vw] flex bg-white/50 '>
         
         <div className='h-[100%] w-[65%] relative'>
           <Image
             src="/assets/manufacturing/state-5.png"
             fill
             alt='state-1'
          className='rounded-[30px]'
           />
         </div>

         <div className='flex flex-col w-[50%] ml-[5%] items-left justify-center gap-[2vw]'>
           <h2 className='text-[2.5vw] font-light aeonik text-[#111111] w-[100%] leading-[1.2]'>Logistical Precision</h2>
           <p className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw]'>
           AMS excels in optimizing our supply chain to deliver efficient solutions for both patients and healthcare organizations. Our state-of-the-art warehousing and logistics operations ensure intense dedication, precision, and safety through continuous improvement initiatives.
           </p>
         </div>

       </div>
      </section>
    </>
  )
}

export default State
