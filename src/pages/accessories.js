import Hemostasis from '@/components/Accessories/Hemostasis'
import Hero from '@/components/Accessories/Hero'
import Inflation from '@/components/Accessories/Inflation'
import Manifold from '@/components/Accessories/Manifold'
import Specifications from '@/components/Accessories/Specifications'
import Layout from '@/components/Layout'
import React from 'react'

const reloads = () => {
  return (
    <Layout>
    <main>
        <Hero/>
        <Inflation/>
        <Specifications/>
        <Hemostasis/>
        <Specifications/>
        <Manifold/>
        <Specifications/>
    </main>
  </Layout>
  )
}

export default reloads