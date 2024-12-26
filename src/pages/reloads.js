import Layout from '@/components/Layout'
import Hero from '@/components/Reloads/Hero'
import Specifications from '@/components/Reloads/ReloadsSpecifications'
import Unique from '@/components/Reloads/Unique'
import Versatility from '@/components/Reloads/Versatility'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'
import MetaData from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const reloads = () => {
  const metadata = {
    title: "Reloads – Stapler Reload Cartridges",
    description:
      "Compatible and reliable reload cartridges for seamless surgical stapling operations.",
    img: "reloads.png",
    alt: "Reloads – Stapler Reload Cartridges",
    slug: "reloads",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  fadeUp();
  paraAnim();
  return (
    <>
   <MetaData metadata={metadata}/>
   <WebpageJsonLd metadata={metadata}/>
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