import About from '@/components/Advastap/About'
import HD2 from '@/components/Advastap/HD2'
import Hero from '@/components/Advastap/Hero'
import Specifications from '@/components/Advastap/Specifications'
import SpecificationsCarousel from '@/components/Advastap/SpecificationsCarousel'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const advastap = () => {
  return (
   <>
   <Header/>
   <main>
    <Hero/>
    <About/>
    <SpecificationsCarousel/>
    <Specifications/>
    <HD2/>
    <SpecificationsCarousel/>
    <Specifications/>
   </main>
   <Footer/>
   </>
  )
}

export default advastap