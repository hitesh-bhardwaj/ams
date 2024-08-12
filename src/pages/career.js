import Discover from '@/components/Career/Discover'
import Hero from '@/components/Career/Hero'
import Jobs from '@/components/Career/Jobs'
import Work from '@/components/Career/Work'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function  career () {
  return (
    <>
   <Header/>
   <main>
   <Hero/>
   <Work/>
   <Jobs/>
   <Discover/>
   </main>
   <Footer/>
   </>
  )
}
