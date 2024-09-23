
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
import IcCards from '@/components/IC/IcCards'
import Portfolio from '@/components/Endo/Portfolio'

gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function ic () {
    const content ={
        heading : "Transforming Cardiac Health",
            smallpara:"Our commitment to advancing the science of flow restoration is reflected in our cutting-edge products and technologies. We focus on developing innovative solutions that address the critical needs of cardiovascular health, ensuring that every heartbeat is supported by the best possible care. By combining advanced technology with clinical expertise, AMS is dedicated to improving patient outcomes and enhancing the quality of life for those affected by cardiovascular diseases.",
            bigpara:"Our IC portfolio includes state-of-the-art devices designed to restore and maintain optimal blood flow in patients with coronary artery disease.",
            src:"/assets/ic/ic-genesis.webp"
      
      }
      const hero = {
        line1:"Advancing the science of ",
        line2:"flow restoration",
        mobileTitle:"Advancing the science of flow restoration",
        
        src:"/assets/ic/ic-hero-bg.webp",
        content:"Advanced MedTech Solutions (AMS) is at the forefront of innovation in Interventional Cardiology. Our mission is to provide meaningful solutions through continuous research and development, ultimately delivering better care and significantly impacting patients' lives."
      }
      const slidesData = [
        {
          title:"Discover How We Advance Cardiology",
          src: "/assets/ic/ic-carousel-img.webp",
          heading: "A new Era in Healthcare",
          para: "AMS has forayed into the Interventional Cardiology space with the arrival of its PTCA Balloon Catheter Rx and forthcoming launch of its Drug Eluting Stent and related accessories. Our advanced technologies, decades rich experiences of our people and partners in healthcare brings synergy to enhance confidence of Interventional Cardiologists globally."
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
  <Hero line1={hero.line1} line2={hero.line2} mobileTitle={hero.mobileTitle} src={hero.src} content={hero.content} className="hidden"/>
  <Genesis content = {content} sParaWidth={"w-[40%] ml-[6%] mobile:ml-0 tablet:ml-0"} bParaWidth={"w-[40%]"}/>
  <PortfolioSwiper slidesData={slidesData}/>
  <IcCards/>
 
  <Portfolio/>
   </main>
   <Footer/>
   <Transition/>
   </>
  )
}
