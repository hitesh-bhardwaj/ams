import AdvaGlideSpecifications from '@/components/Advaglide/AdvaGlideSpecifications'
import EdgeCarousel from '@/components/Advaglide/EdgeCarousel'
import Ergonomic from '@/components/Advaglide/Ergonomic'
import Hero from '@/components/Advaglide/Hero'
import Sirolimus from '@/components/Advaglide/Sirolimus'
import { fadeup } from '@/components/gsapAnimations'
import Layout from '@/components/Layout'
import Pixifinal from '@/components/Pixifinal'
import React from 'react'

const advaglide = () => {
  fadeup()
  return (
    <>
    <Layout>
        <main>
           <Hero/>
           <Ergonomic/>
           <EdgeCarousel/>
           <AdvaGlideSpecifications/>
           <Sirolimus/>
            
        </main>
    </Layout>
    {/* <Pixifinal/> */}
      
    </>
  )
}

export default advaglide
