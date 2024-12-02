import Hemostasis from '@/components/Accessories/Hemostasis'
import Hero from '@/components/Accessories/Hero'
import Inflation from '@/components/Accessories/Inflation'
import Manifold from '@/components/Accessories/Manifold'
import SpecificationsHemostasis from '@/components/Accessories/SpecificationsHemostasis'
import SpecificationsInflation from '@/components/Accessories/SpecificationsInflation'
import SpecificationsManifold from '@/components/Accessories/SpecificationsManifold'
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn } from '@/components/gsapAnimations'

const accessories = () => {
  fadeIn();
  return (
    <Layout>
    <main>
        <Hero/>
        <Inflation/>
        <SpecificationsInflation/>
        <Hemostasis/>
        <SpecificationsHemostasis/>
        <Manifold/>
        <SpecificationsManifold/>
    </main>
  </Layout>
  )
}

export default accessories