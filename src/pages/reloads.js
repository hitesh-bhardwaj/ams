import Layout from '@/components/Layout'
import Hero from '@/components/Reloads/Hero'
import Specifications from '@/components/Reloads/ReloadsSpecifications'
import Unique from '@/components/Reloads/Unique'
import Versatility from '@/components/Reloads/Versatility'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'

const reloads = () => {
  fadeUp();
  paraAnim();
  return (
    <Layout>
    <main>
        <Hero/>
        <Versatility/>
        <Unique/>
        <Specifications/>
    </main>
  </Layout>
  )
}

export default reloads