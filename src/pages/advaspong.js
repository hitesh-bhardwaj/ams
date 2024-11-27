import AdvaspongSpecifications from '@/components/Advaspong/AdvaspongSpecifications'
import Hero from '@/components/Advaspong/Hero'
import Redefining from '@/components/Advaspong/Redefining'
import Layout from '@/components/Layout'
import React from 'react'

const advaspong = () => {
  return (
    <Layout>
    <main>
     <Hero/>
     <Redefining/>
   <AdvaspongSpecifications/>
    </main>
  </Layout>
  )
}

export default advaspong