import Hero from '@/components/Endo/Hero'
import Product from '@/components/Endo/Product'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Capable from '@/components/layoutComponents/Capable'
import Try from '@/components/layoutComponents/Try'
import TryCard from '@/components/layoutComponents/TryCard'
import React from 'react'


export default function  trial () {
  
  return (
    <>
   <Header/>
   <main>
  <Hero/>
 {/* <TryCard/> */}
 {/* <Capable/> */}
 <Try/>
   </main>
   <Footer/>
   </>
  )
}
