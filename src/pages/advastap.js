import About from '@/components/Advastap/About'
import Hero from '@/components/Advastap/Hero'
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
   </main>
   <Footer/>
   </>
  )
}

export default advastap