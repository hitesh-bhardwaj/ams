import About from '@/components/Advastap/About'
import Hero from '@/components/Advastap/Hero'
import Specifications from '@/components/Advastap/Specifications'
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
    <Specifications/>
   </main>
   <Footer/>
   </>
  )
}

export default advastap