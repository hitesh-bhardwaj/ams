/* eslint-disable react-hooks/rules-of-hooks */
import Connecting from '@/components/About/Connecting'
import DNA from '@/components/About/DNA'
import Hero from '@/components/About/Hero'
import Molecular from '@/components/About/Molecular'
import Header from '@/components/Header'
import Genesis from '@/components/layoutComponents/Genesis'
import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Transition from '@/components/Transition'
import Layout from '@/components/Layout'
gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function  about () {
const content ={
  heading : "Our Genesis",
      smallpara:"At AMS, each decision is guided by empathy and a relentless pursuit of medical advancements, ensuring that our contributions resonate with compassion and integrity. Our journey is defined by a steadfast commitment to pushing the boundaries of what's possible in healthcare, driven by the belief that every innovation has the potential to shape a brighter, healthier future for all. ",
      bigpara:"The desire to make a difference in patients' lives led to the creation of Advanced MedTech Solutions. Our relentless pursuit of excellence drives us to transform patient care worldwide.",
      src:"/assets/about/genesis.png"

}
// const [smoother,setSmoother] = useState(null)
// useEffect(() => {
//   const initializeScrollSmoother = async () => {
//     if (window.innerWidth >= 1024) {
//       const { default: ScrollSmoother } = await import(
//         "@/components/ScrollSmoother.min.js"
//       );
//       gsap.registerPlugin(ScrollSmoother);

//       const smootherInstance = ScrollSmoother.create({
//         smooth: 1,
//         effects: true,
//         wrapper: "#smooth-wrapper",
//         content: "#smooth-content",
//       });
//       setSmoother(smootherInstance);
//     }
//   };
//   initializeScrollSmoother();

//   return () => {
//    smoother&&smoother.kill();
//   };
// }, [smoother]);

useEffect(()=>{
  const ctx = gsap.context(() => {
const fadeUps = document.querySelectorAll('.fadeUp');
  fadeUps.forEach((fadeUp) => {
    gsap.fromTo(
      fadeUp,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay:0.3,
        ease: 'Power3.out',
        scrollTrigger: {
          trigger: fadeUp,
          start: 'top 85%',
        },
      }
    );
  });
});
return () => ctx.revert();
});

  return (
    <>
   <Header/>
   <div id="smooth-wrapper">
        <div id="smooth-content">
   <Layout>
   <main>
   <Hero/>
   <Genesis content={content}/>
   <DNA/>
   <Molecular/>
   <Connecting/>
   </main>
   </Layout>
          
          </div></div>
   <Transition/>
   </>
  )
}
