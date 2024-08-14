import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Molecular = () => {
    useGSAP(()=>{
        gsap.to(".molecular-left",{
            scrollTrigger:{
                trigger:".molecular",
                pin:".molecular-left",
                start:"top top",
                end:"bottom 85%",
                scrub:true,
                
            }
        })
    })
  return (
   <>
   <section className='molecular ' id='molecular'>
    <div className='container-sm py-[10%]'>
<div className="flex items-start justify-between w-full" >
        <div className='molecular-left w-[50%] space-y-[2.5vw]'>
            <div className='w-[55%]'>
        <h2 className="title-2 aeonik">
            <span>Molecular Foundations </span>
               <span> of AMS</span>
          </h2>
          </div>
            <p className='content-p w-[70%]'>
            Exploring the fundamental elements that shape AMS&apos;s ethos and culture, illustrating the core principles guiding our character and values.
            </p>

        </div>
        <div className='molecular-right w-[47%] flex flex-col gap-y-[2vw]'>
        <div className='molecular-card  px-[3vw] py-[3vw] bg-white/50 border-[1px] rounded-[40px] border-white glassmorphism'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>Pa</p>
            <p className='text-[0.75vw] mt-[-1vw]'>Patient-centric</p>

        </div>
                <h2 className='text-[2.5vw] mt-[1vw] mb-[1.5vw] font-light'>Patients at the Heart</h2>
                <p className='content-p'>Patients are the heart of our purpose, igniting every decision and innovation with unwavering compassion and dedication to transforming healthcare for the better.</p>

        </div>

        <div className='molecular-card mt-[2vw]  px-[3vw] py-[3vw]  border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>Qu</p>
            <p className='text-[0.75vw] mt-[-1vw]'>Quality-First</p>

        </div>
                <h2 className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light'>Uncompromising Quality</h2>
                <p className='content-p'>Excellence is our benchmark. Our expert team ensures each device is crafted to the highest standards, delivering safety and reliability you can trust.</p>

        </div>

        <div className='molecular-card  px-[3vw] py-[3vw] border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>In</p>
            <p className='text-[0.75vw] mt-[-1vw]'>Innovation</p>

        </div>
                <h2 className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light'>Innovative Solutions</h2>
                <p className='content-p'>Pioneering the future of Healthcare. AMS remains at the forefront of cutting-edge medical technology.</p>

        </div>

        <div className='molecular-card px-[3vw] py-[3vw] border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>Cr</p>
            <p className='text-[0.75vw] mt-[-1vw]'>Caring</p>

        </div>
                <h2 className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light '>Lorem Ipsum</h2>
                <p className='content-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>

        </div>
        </div>

        </div>
    </div>

   </section>
   </>
  )
}

export default Molecular