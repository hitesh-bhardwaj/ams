import Jobs from '@/components/Career/Jobs'
import Hero from '@/components/Endo/Hero'
import Portfolio from '@/components/Endo/Portfolio'
import PortfolioSwiper from '@/components/Endo/PortfolioSwiper'
import Product from '@/components/Endo/Product'
import Product2 from '@/components/Endo/Product2'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Genesis from '@/components/layoutComponents/Genesis'
import React from 'react'



export default function  endo () {
  
  


    const content ={
        heading : "Redefining Endo Surgery",
            smallpara:"At AMS, we are committed to advancing endo surgery with our innovative, dependable, and precision-engineered products. By focusing on advanced technology and stringent quality standards, AMS guarantees that each tool operates with optimal reliability and effectiveness, transforming surgical practices and enhancing patient outcomes. Our continuous efforts in R&D ensure that we stay ahead in providing cutting-edge solutions. We collaborate closely with healthcare professionals to tailor our products to the specific needs of each surgical procedure.",
            bigpara:"Our extensive range of surgical staplers empowers healthcare professionals to deliver exceptional care with confidence and efficiency.",
            src:"/assets/endo/endo-redefine.png"
      
      }
  return (
    <>
   <Header/>
   <main>
  <Hero/>
  <Genesis content = {content}/>
  <PortfolioSwiper/>
  {/* <Product/> */}
  <Product2/>
  <Portfolio/>
   </main>
   <Footer/>
   </>
  )
}
