import Layout from '@/components/Layout'
import Ergonomic from '@/components/PoweredLC/Ergonomic'
import Hero from '@/components/PoweredLC/Hero'
import Specifications from '@/components/PoweredLC/Specifications'
import SurgicalOutcomes from '@/components/PoweredLC/SurgicalOutcomes'
import React from 'react'

const poweredlc = () => {
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

export default poweredlc