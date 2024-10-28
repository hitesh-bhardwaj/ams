
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
import OemCard from '@/components/Oem/OemCard'
import Offerings from '@/components/Oem/Offerings'
import FormOem from '@/components/Oem/FormOem'
import OfferingsMob from '@/components/Oem/OfferingsMob'

gsap.registerPlugin(ScrollTrigger, useGSAP);



export default function  oem () {
    const content ={
        heading : "Trust Has a New Name",
            smallpara:"At AMS, we elevate the standards for OEM and Custom Branding Solutions with unmatched expertise and dedication. We recognize that entering the market involves a multifaceted journey, requiring meticulous planning, design, and compliance. From innovative product development and precision manufacturing to rigorous quality assurance and regulatory adherence, AMS is committed to making your vision a reality.",
            bigpara:"Our comprehensive range of services guarantees excellence at every step, no matter the scale or complexity of your project. Partner with AMS for unparalleled trust and reliability in your journey to market success.",
            src:"/assets/rnd/rnd-genesis-img.webp"
      
      }
      const hero = {
        title:"Ams Oem",
         src:"/assets/oem/oem-hero-bg.webp",
        
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
  <Hero title={hero.title} src={hero.src} className="hidden" paraWidth={"max-w-[50vw]"} titleHidden={"hidden"}/>
  <Genesis content = {content}/>
   <OemCard/>
  <Offerings/>
  <OfferingsMob/>
  <FormOem/>
   </main>
   <Footer/>
   <Transition/>
   </>
  )
}
