import Ergonomic from '@/components/AdvastapCS/Ergonomic'
import Hero from '@/components/AdvastapCS/Hero'
import Specifications from '@/components/AdvastapCS/Specifications'
import SurgicalOutcomes from '@/components/AdvastapCS/SurgicalOutcomes'
import Layout from '@/components/Layout'
import React from 'react'

const advastapcs = () => {
  return (
    <Layout>
    <main>
        <Hero/>
        <Ergonomic/>
        <SurgicalOutcomes/>
        <Specifications/>
    </main>
  </Layout>
  )
}

export default advastapcs