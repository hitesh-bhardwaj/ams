import Portfolio from '@/components/Endo/Portfolio'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hernia/Hero'
import Product from '@/components/Hernia/Product'
import Genesis from '@/components/layoutComponents/Genesis'
import PortfolioSwiper from '@/components/layoutComponents/PortfolioSwiper'
import React from 'react'
import { paraAnim } from '@/components/gsapAnimations';

export default function  hernia () {
  paraAnim();
  
    const content ={
        heading : "Redefining Hernia  Surgery",
            smallpara:"Each product is meticulously crafted to ensure exceptional strength and resilience, with a focus on biocompatibility and infection resistance. Our advanced designs support seamless tissue integration and contribute to reduced recurrence rates. By leveraging innovative technology, we enhance the effectiveness of each repair and prioritize patient comfort and recovery. Our dedication to quality and performance ensures that our solutions meet the highest standards, empowering surgeons and improving surgical outcomes.",
            bigpara:"Trust AMS to provide reliable and effective solutions for superior hernia repair. With our ongoing commitment to research and development.",
            src:"/assets/hernia/hernia-redefine.png"
      
      }
  return (
    <>
   <Header/>
   <main>
 <Hero/>
  <Genesis content = {content}/>
  <PortfolioSwiper/>
  <Product/>
  <Portfolio/>
   </main>
   <Footer/>
   </>
  )
}
