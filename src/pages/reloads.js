import Layout from '@/components/Layout'
import Hero from '@/components/Reloads/Hero'
import Specifications from '@/components/Reloads/ReloadsSpecifications'
import Unique from '@/components/Reloads/Unique'
import Versatility from '@/components/Reloads/Versatility'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'
import { NextSeo } from 'next-seo'

const reloads = () => {
  fadeUp();
  paraAnim();
  return (
    <>
    <NextSeo
            title="Reloads – Stapler Reload Cartridges"
            description="Compatible and reliable reload cartridges for seamless surgical
stapling operations."
            openGraph={{
              title: "Reloads – Stapler Reload Cartridges",
              description:
                "Compatible and reliable reload cartridges for seamless surgical stapling operations.",
              images: [
                {
                  url: "https://amsdev01.vercel.app/assets/seo/reloads.png",
                  width: 1918,
                  height: 948,
                  alt: "Reloads – Stapler Reload Cartridges",
                },
              ],
            }}
          />
    <Layout>
    <main>
        <Hero/>
        <Versatility/>
        <Unique/>
        <Specifications/>
    </main>
  </Layout>
  </>
  )
}

export default reloads