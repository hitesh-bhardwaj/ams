import EndolcSpecifications from '@/components/Endolc/EndolcSpecifications'
import Hero from '@/components/Endolc/Hero'
import Precision from '@/components/Endolc/Precision'
import Stapling from '@/components/Endolc/Stapling'
import Layout from '@/components/Layout'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'
import { NextSeo } from 'next-seo'

const endolc = () => {
fadeUp();
paraAnim();
  return (
   <>
   <NextSeo
           title="Endo LC – Endoscopic Linear Cutter Stapler"
           description="Endo LC delivers exceptional precision and ease for minimally
invasive surgical stapling."
           openGraph={{
             title: "Endo LC – Endoscopic Linear Cutter Stapler",
             description:
               "Endo LC delivers exceptional precision and ease for minimally invasive surgical stapling.",
             images: [
               {
                 url: "https://amsdev01.vercel.app/assets/seo/endolc.png",
                 width: 1918,
                 height: 948,
                 alt: "Endo LC – Endoscopic Linear Cutter Stapler",
               },
             ],
           }}
         />
      <Layout>
            <main>
              <Hero/>
              <Precision/>
              <Stapling/>
              <EndolcSpecifications/>
            </main>
          </Layout>
       
   </>
  )
}

export default endolc