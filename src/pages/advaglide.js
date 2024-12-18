import AdvaGlideSpecifications from '@/components/Advaglide/AdvaGlideSpecifications'
import EdgeCarousel from '@/components/Advaglide/EdgeCarousel'
import Ergonomic from '@/components/Advaglide/Ergonomic'
import Hero from '@/components/Advaglide/Hero'
import Sirolimus from '@/components/Advaglide/Sirolimus'
import { fadeUp } from '@/components/gsapAnimations'
import Layout from '@/components/Layout'
import BgVideo from '@/components/Layout/BgVideo'
import { Media } from '@/components/media'
import React from 'react'

const advaglide = () => {
  fadeUp()
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
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  )
}

export default advaglide
