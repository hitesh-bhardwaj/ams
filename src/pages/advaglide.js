import AdvaGlideSpecifications from '@/components/Advaglide/AdvaGlideSpecifications'
import EdgeCarousel from '@/components/Advaglide/EdgeCarousel'
import Ergonomic from '@/components/Advaglide/Ergonomic'
import Hero from '@/components/Advaglide/Hero'
import Sirolimus from '@/components/Advaglide/Sirolimus'
import { fadeup } from '@/components/gsapAnimations'
import Layout from '@/components/Layout'
import { Media } from '@/components/media'
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
           <EdgeCarousel width={"55%"}/>
           <AdvaGlideSpecifications/>
           <Sirolimus/>
            
        </main>
    </Layout>
    <Media greaterThan='tablet'>
    <Pixifinal />
    </Media>
   
      
    </>
  )
}

export default advaglide
