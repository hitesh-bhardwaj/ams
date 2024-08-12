import Portfolio from '@/components/Endo/Portfolio'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Product from '@/components/Hernia/Product'
import Genesis from '@/components/layoutComponents/Genesis'
import PortfolioSwiper from '@/components/layoutComponents/PortfolioSwiper'
import Capabilities from '@/components/Manufacturing/Capabilities'
import Discover from '@/components/Manufacturing/Discover'
import Hero from '@/components/Manufacturing/Hero'
import State from '@/components/Manufacturing/State'
import React from 'react'

export default function manufacturing () {
    const content ={
        heading : "Manufacturing",
            smallpara:"AMS operates a facility designed with LEED-certified principles to minimize environmental impact, incorporating green manufacturing practices such as energy-efficient operations, responsible waste management, wastewater recycling, and utilization of solar energy for electricity generation. This comprehensive approach underscores our commitment to sustainable manufacturing practices and environmental stewardship.",
            bigpara:"We prioritize rigorous R&D and adhere to global standards, guaranteeing our products meet the highest quality and innovation benchmarks in the industry.",
            src:"/assets/manufacturing/manufacturing.png"
      
      }
  return (
    <>
   <Header/>
   <main>
 <Hero/>
  <Genesis content = {content}/>
  <Capabilities/>
  <State/>
  <Discover/>
   </main>
   <Footer/>
   </>
  )
}
