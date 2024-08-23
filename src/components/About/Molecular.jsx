import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {  paraAnim } from '../gsapAnimations';

gsap.registerPlugin(ScrollTrigger,useGSAP);

const Molecular = () => {
  // Register animations
  paraAnim();
  

  // Create refs
  const molecularLeft = useRef(null);
  const molecularContainer = useRef(null);
  useGSAP(()=>{
    gsap.to(".molecular-left",{
        scrollTrigger:{
            trigger:".molecular",
            pin:".molecular-left",
            start:"top top",
            end:"bottom 95%",
            scrub:true,
            
        }
    })
})

//   useEffect(() => {
//     // Create GSAP context
//     const ctx = gsap.context(() => {
//       // Select elements with fadeUp class
//       const content = document.querySelectorAll(".fadeUp");
//       content.forEach((content) => {
//         // Create fadeUp animation
//         gsap.to(
//           content,
          
//           {
//             yPercent: -10,  // End y position
//             opacity: 1,     // End opacity
//             delay: 0.2,     // Delay before animation starts
//             duration: 1,    // Animation duration
//             scrollTrigger: {
//               trigger: content,
//               start: "top 90%",   // Start animation when content is 90% from the top
//               end: "bottom 70%",  // End animation when content is 70% from the bottom
//               scrub: true,        // Smoothly scrubs the animation
//               markers: true,      // Display markers for debugging
//             },
//           }
//         );
//       });
//     });

//     // Clean up on component unmount
//     return () => ctx.revert();
//   }, []);  // Empty dependency array means this runs once on mount

  return (
    <>
      <section className='molecular' id='molecular' ref={molecularContainer}>
        <div className='container-sm py-[10%]'>
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
              <div className='molecular-card px-[3vw] py-[3vw] bg-white/50 border-[1px] rounded-[40px] border-white glassmorphism fadeUp '>
                <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white flex flex-col items-center justify-center'>
                  <p className='text-[3.5vw]'>Pa</p>
                  <p data-para-anim className='text-[0.75vw] mt-[-1vw]'>Patient-centric</p>
                </div>
                <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw] font-light'>Patients at the Heart</h2>
                <p data-para-anim className='content-p'>
                  Patients are the heart of our purpose, igniting every decision and innovation with unwavering compassion and dedication to transforming healthcare for the better.
                </p>
              </div>

              {/* Repeat similar card structure for other cards */}
              <div className='molecular-card mt-[2vw]  px-[3vw] py-[3vw]  border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism fadeUp'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>Qu</p>
            <p data-para-anim className='text-[0.75vw] mt-[-1vw]'>Quality-First</p>

        </div>
                <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light'>Uncompromising Quality</h2>
                <p data-para-anim className='content-p'>Excellence is our benchmark. Our expert team ensures each device is crafted to the highest standards, delivering safety and reliability you can trust.</p>

        </div>

        <div className='molecular-card  px-[3vw] py-[3vw] border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism fadeUp'>
        <div className='w-[6vw] h-[6vw] bg-[#143CA3] text-white  flex flex-col items-center justify-center '>
            <p className='text-[3.5vw]'>In</p>
            <p data-para-anim className='text-[0.75vw] mt-[-1vw]'>Innovation</p>

        </div>
                <h2 data-para-anim className='text-[2.5vw] mt-[1vw] mb-[1.5vw]  font-light'>Innovative Solutions</h2>
                <p data-para-anim className='content-p'>Pioneering the future of Healthcare. AMS remains at the forefront of cutting-edge medical technology.</p>

        </div>

        <div className='molecular-card px-[3vw] py-[3vw] border-[1px] rounded-[40px] bg-white/50 border-white glassmorphism fadeUp'>
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
