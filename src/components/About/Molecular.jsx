import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {  paraAnim } from '../gsapAnimations';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger,useGSAP);

const Molecular = () => {
  // Register animations
  paraAnim();

  // Create refs
  const molecularLeft = useRef(null);
  const molecularContainer = useRef(null);
  useGSAP(()=>{
   const tl = gsap.timeline({
    scrollTrigger:{
      trigger:".molecular",
      pin:true,
      start:"top top",
      end:"+=2500 bottom",
      
      scrub:true
    }
   })
   tl.to(".molecular-right",{
    yPercent:-67,
    duration:3
   })
})
useGSAP(() => {
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".molecular",
        start: "top bottom",
        end:"bottom 20%",
       
        
        scrub:true
      },

    })
    tl.to(".molecular-bg-img", {
      scale:1.2,
      delay:-1

    });
    tl.to(".molecular-bg-img",{
      yPercent:30,
      delay:-1
      
    })
  
});
  return (
    <>
      <section className='molecular h-[100vh] overflow-hidden' id='molecular' ref={molecularContainer}>
        <div className='w-screen h-screen absolute z-[1] overflow-hidden'>
          <Image src={"/assets/about/molecular-bg.png"} fill alt={'molecular-bg'} className='object-cover molecular-bg-img scale-[1.3] translate-y-[-30%]'/>
        </div>
        <div className='container-sm py-[10%] relative z-[2]'>
          <div className="flex items-start justify-between w-full">
            <div className='molecular-left w-[50%] space-y-[2.5vw]' ref={molecularLeft}>
              <div className='w-[58%]'>
                <h2 data-para-anim className="title-2 aeonik">
                  <span>Molecular Foundations </span>
                  <span> of AMS</span>
                </h2>
              </div>
              <p className='content-p w-[75%]'>
                <span data-para-anim>
                  Exploring the fundamental elements that shape AMS&apos;s ethos and culture, illustrating the core principles guiding our character and values.
                </span>
              </p>
            </div>
            <div className='molecular-right w-[47%] flex flex-col gap-y-[2vw]'>
              <div className='molecular-card px-[3vw] py-[3vw] bg-white/50 border-[1px] rounded-[40px] border-white glassmorphism  '>
                <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white flex flex-col items-center justify-center'>
                  <p className='text-[3.5vw]'>Pa</p>
                  <p data-para-anim className='text-[0.75vw] mt-[-1vw] '>Patient-centric</p>
                </div>
                <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw] font-light'>Patients at the Heart</h2>
                <p data-para-anim className='content-p'>
                  Patients are the heart of our purpose, igniting every decision and innovation with unwavering compassion and dedication to transforming healthcare for the better.
                </p>
              </div>

              {/* Repeat similar card structure for other cards */}
              <div className='molecular-card mt-[2vw]  px-[3vw] py-[3vw]  border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism '>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>Qu</p>
            <p data-para-anim className='text-[0.75vw] mt-[-1vw]'>Quality-First</p>

        </div>
                <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light'>Uncompromising Quality</h2>
                <p data-para-anim className='content-p'>Excellence is our benchmark. Our expert team ensures each device is crafted to the highest standards, delivering safety and reliability you can trust.</p>

        </div>

        <div className='molecular-card  px-[3vw] py-[3vw] border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>In</p>
            <p data-para-anim className='text-[0.75vw] mt-[-1vw]'>Innovation</p>

        </div>
                <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light'>Innovative Solutions</h2>
                <p data-para-anim className='content-p'>Pioneering the future of Healthcare. AMS remains at the forefront of cutting-edge medical technology.</p>

        </div>

        <div className='molecular-card px-[3vw] py-[3vw] border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>Cr</p>
            <p className='text-[0.75vw] mt-[-1vw]'>Caring</p>

        </div>
                <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light '>Lorem Ipsum</h2>
                <p data-para-anim className='content-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>

        </div>
        </div>

        </div>
    </div>
      </section>
    </>
  );
};

export default Molecular;
