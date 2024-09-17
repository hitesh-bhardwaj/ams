
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
import Hero from '@/components/Hero'
import PortfolioSwiper from '@/components/layoutComponents/PortfolioSwiper';
import Discover from '@/components/Ama/Discover'
import CardsCarousel from '@/components/Ama/CardsCarousel'

gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function  ama () {
    const content ={
        heading : "Empowering Healthcare",
            smallpara:"Our R&D center stands as a testament to our commitment to advancing medical technology. Equipped with the latest in research and engineering tools, this facility is designed to foster collaboration among our top scientists, engineers, and healthcare innovators. Here, we are dedicated to developing solutions that push the boundaries of what’s possible in medical technology. By integrating diverse expertise and cutting-edge advancements.",
            bigpara:"At AMS, our R&D efforts are driven by the vision of creating transformative technologies that improve patient outcomes and enhance the quality of life worldwide.",
            src:"/assets/ama/ama-genesis-bg.webp"
      
      }
      const hero = {
        line1:"Advanced MedTech Academy (AMA)",
        
        src:"/assets/ama/ama-hero-bg.webp",
        content:"At Advanced MedTech Academy, our commitment is to foster continuous learning and development for healthcare professionals who are at the forefront of patient care. Leveraging the broad expertise, resources, and dedication of the AMS family, we strive to enhance the skills and knowledge of those devoted to improving lives."
      }
      const slidesData = [
        {
          title:"Advancing the way we learn",
          src: "/assets/ama/ama-carousel-img-1.webp",
          heading: "Personalized & Insightful Training",
          para: "We provide tailored learning experiences that cater to the specific needs of healthcare practitioners. Our AMA programs deliver practical insights and advanced knowledge to keep you ahead in the ever-evolving medical field."
        },
        { 
          src: "/assets/endo/endo-slider-2.png",
          heading: "Commitment to Excellence",
          para: "AMS is dedicated to maintaining the highest standards of quality and innovation. Our rigorous quality assurance protocols guarantee that every ADVAMESH product delivers superior performance and reliability."
        },
        { 
          src: "/assets/endo/endo-slider-3.png",
          heading: "Empowering Surgical Success",
          para: "AMS partners with healthcare professionals to achieve surgical success. Our comprehensive range of ADVAMESH products is supported by extensive training and resources, enabling surgeons to perform hernia repairs with confidence and precision."
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
  <Hero line1={hero.line1} src={hero.src} content={hero.content} className="hidden" paraWidth={"max-w-[90vw]"}/>
  <Genesis content = {content}/>
  <PortfolioSwiper slidesData={slidesData}/>
  <CardsCarousel/>
  <Discover/>
   </main>
   <Footer/>
   <Transition/>
   </>
  )
}
