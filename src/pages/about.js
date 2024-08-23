import Connecting from '@/components/About/Connecting'
import DNA from '@/components/About/DNA'
import Hero from '@/components/About/Hero'
import Molecular from '@/components/About/Molecular'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Genesis from '@/components/layoutComponents/Genesis'
import React from 'react'




export default function  about () {
  

  
const content ={
  heading : "Our Genesis",
      smallpara:"At AMS, each decision is guided by empathy and a relentless pursuit of medical advancements, ensuring that our contributions resonate with compassion and integrity. Our journey is defined by a steadfast commitment to pushing the boundaries of what's possible in healthcare, driven by the belief that every innovation has the potential to shape a brighter, healthier future for all. ",
      bigpara:"The desire to make a difference in patients' lives led to the creation of Advanced MedTech Solutions. Our relentless pursuit of excellence drives us to transform patient care worldwide.",
      src:"/assets/about/genesis.png"

} 

  return (
    <>
   <Header/>
   <main>
   <Hero/>
   <Genesis content={content}/>
   <DNA/>
   <Molecular/>
   <Connecting/>
   </main>
   <Footer/>
   </>
  )
}
