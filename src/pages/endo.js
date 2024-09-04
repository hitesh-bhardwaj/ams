
/* eslint-disable react-hooks/rules-of-hooks */
import Hero from '@/components/Endo/Hero'
import Portfolio from '@/components/Endo/Portfolio'
import PortfolioSwiper from '@/components/Endo/PortfolioSwiper'
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
// import TestSlider from '@/components/Endo/testSlider'
gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function  endo () {
  
  


    const content ={
        heading : "Redefining Endo Surgery",
            smallpara:"At AMS, we are committed to advancing endo surgery with our innovative, dependable, and precision-engineered products. By focusing on advanced technology and stringent quality standards, AMS guarantees that each tool operates with optimal reliability and effectiveness, transforming surgical practices and enhancing patient outcomes. Our continuous efforts in R&D ensure that we stay ahead in providing cutting-edge solutions. We collaborate closely with healthcare professionals to tailor our products to the specific needs of each surgical procedure.",
            bigpara:"Our extensive range of surgical staplers empowers healthcare professionals to deliver exceptional care with confidence and efficiency.",
            src:"/assets/endo/endo-redefine.png"
      
      }

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
  <Genesis content = {content}/>
  <PortfolioSwiper/>
  <Product/>
  {/* <Product2/> */}
  {/* <AmbassadorsCarousel/> */}
  {/* <TestSlider/> */}
  <Portfolio/>
   </main>
   <Footer/>
   <Transition/>
   </>
  )
}
