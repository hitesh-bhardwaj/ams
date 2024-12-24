import AdvaspongSpecifications from '@/components/Advaspong/AdvaspongSpecifications'
import Hero from '@/components/Advaspong/Hero'
import Redefining from '@/components/Advaspong/Redefining'
import Layout from '@/components/Layout'
import { NextSeo } from 'next-seo'
import React from 'react'

const advaspong = () => {
  return (
 <>
  <NextSeo
             title="Advaspong – Absorbable Hemostatic Sponge"
             description="Advaspong, an absorbable sponge, controls bleeding and supports
efficient surgical procedures."
             openGraph={{
               title: "Advaspong – Absorbable Hemostatic Sponge",
               description:
                 "Advaspong, an absorbable sponge, controls bleeding and supports efficient surgical procedures.",
               images: [
                 {
                   url: "https://amsdev01.vercel.app/assets/seo/advaspong.png",
                   width: 1918,
                   height: 948,
                   alt: "Advaspong – Absorbable Hemostatic Sponge",
                 },
               ],
             }}
           />
    <Layout>
    <main>
     <Hero/>
     <Redefining/>
   <AdvaspongSpecifications/>
    </main>
  </Layout>
  </>
  )
}

export default advaspong