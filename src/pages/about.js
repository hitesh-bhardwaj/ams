import Connecting from '@/components/About/Connecting'
import DNA from '@/components/About/DNA'
import Genesis from '@/components/About/Genesis'
import Hero from '@/components/About/Hero'
import Molecular from '@/components/About/Molecular'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function  about () {
  return (
    <>
   <Header/>
   <main>
   <Hero/>
   <Genesis/>
   <DNA/>
   <Molecular/>
   <Connecting/>
   </main>
   <Footer/>
   </>
  )
}
