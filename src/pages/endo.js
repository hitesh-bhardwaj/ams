
/* eslint-disable react-hooks/rules-of-hooks */

import Portfolio from '@/components/Endo/Portfolio'
import Product from '@/components/Endo/Product'
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
import PortfolioSwiper from '@/components/layoutComponents/PortfolioSwiper'

gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function  endo () {
    const content ={
        heading : "Redefining Endo Surgery",
            smallpara:"At AMS, we are committed to advancing endo surgery with our innovative, dependable, and precision-engineered products. By focusing on advanced technology and stringent quality standards, AMS guarantees that each tool operates with optimal reliability and effectiveness, transforming surgical practices and enhancing patient outcomes. Our continuous efforts in R&D ensure that we stay ahead in providing cutting-edge solutions. We collaborate closely with healthcare professionals to tailor our products to the specific needs of each surgical procedure.",
            bigpara:"Our extensive range of surgical staplers empowers healthcare professionals to deliver exceptional care with confidence and efficiency.",
            src:"/assets/endo/endo-redefine.png"
      
      }
      const hero = {
        line1:"Breaking New Ground",
        line2:"in Endo Surgery",
        src:"/assets/endo/endo-hero.png",
        content:"At AMS, we push the boundaries of endo surgery and set new benchmarks in surgical excellence with our innovative and reliable solutions."
      }
      const slidesData = [
        {
          title:"Your Partner in Surgical Excellence",
          src: "/assets/endo/endo-slider-1.png",
          heading: "Advancing Patient Recovery",
          para: "Our ADVAMESH products are designed to enhance patient recovery and comfort. By offering exceptional support and promoting natural tissue integration, our meshes minimize bioreactivity and reduce recurrence rates, ensuring a smoother recovery process."
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
  <Hero line1={hero.line1} line2={hero.line2} src={hero.src} content={hero.content} className="hidden"/>
  <Genesis content = {content}/>
  <PortfolioSwiper slidesData={slidesData}/>
  <Product/>
  <Portfolio/>
   </main>
   <Footer/>
   <Transition/>
   </>
  )
}
