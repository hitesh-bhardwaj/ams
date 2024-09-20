
/* eslint-disable react-hooks/rules-of-hooks */


import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Genesis from '@/components/layoutComponents/Genesis'
import Transition from '@/components/Transition'
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import PortfolioSwiper from '@/components/layoutComponents/PortfolioSwiper';
import Hero from '@/components/Needle/Hero'
import FeatureCards from '@/components/Needle/FeatureCards'
import Advance from '@/components/Needle/Advance'


gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function  needle () {
    const content ={
        heading : "Quantum Leap In Needle Tech",
            smallpara:"Witness the pinnacle of precision engineering behind the next generation intelligent alloy with immaculate point geometry. Employing state-of-the-art robotics and advanced manufacturing, each needle is honed to perfection, with a needle tip so incredibly sharp it breezes through tissue with remarkable ease. Pioneering needle technology stands as the culmination of innovation, surpassing industry leaders in needle penetration force data and ductility. Our extensive studies demonstrate superior consistency, ensuring no degradation of strength across multiple passes.",
            bigpara:"This alloy represents the pinnacle of research and testing, ensuring top performance across numerous medical procedures and diverse needle applications.",
            src:"/assets/needle/needle-genesis-img.webp"
      
      }
    
      const slidesData = [
        {
          title:"From Concept to Perfection",
          src: "/assets/needle/needle-carousel-img-2.webp",
          heading: "Exceptional Raw Materials",
          para: "We start with premium-grade stainless steel and alloys, renowned for their superior strength, ductility, and resistance to corrosion—forming the core of our high-quality needles."
        },
        { 
          src: "/assets/needle/needle-carousel-img-1.webp",
          heading: "Cutting-Edge Engineering & Manufacturing",
          para: "Advanced robotics and automated processes shape and sharpen each needle with intelligent alloys, achieving immaculate point geometry and unmatched precision."
        },
        { 
          src: "/assets/needle/needle-carousel-img-3.webp",
          heading: "Unparalleled Quality Control",
          para: "Each needle undergoes rigorous testing for sharpness, strength, and swage integrity, ensuring flawless performance and reliability in every surgical procedure."
        }
      ];

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
   <main>
    <Hero/>
  <Genesis content = {content} sParaWidth={"w-[60%] ml-[5%]"} bParaWidth={"w-[40%]"}/>
  <PortfolioSwiper slidesData={slidesData}/>
  <FeatureCards/>
  <Advance/>
   </main>
   <Footer/>
   <Transition/>
   </>
  )
}
