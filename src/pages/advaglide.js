import AdvaGlideSpecifications from '@/components/Advaglide/AdvaGlideSpecifications'
import EdgeCarousel from '@/components/Advaglide/EdgeCarousel'
import Ergonomic from '@/components/Advaglide/Ergonomic'
import Hero from '@/components/Advaglide/Hero'
import Sirolimus from '@/components/Advaglide/Sirolimus'
import Layout from '@/components/Layout'
import BgVideo from '@/components/Layout/BgVideo'
import { Media } from '@/components/media'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'

const advaglide = () => {
  fadeUp();
  paraAnim();
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
