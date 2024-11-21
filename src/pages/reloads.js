import Layout from '@/components/Layout'
import Hero from '@/components/Reloads/Hero'
import Specifications from '@/components/Reloads/Specifications'
import Unique from '@/components/Reloads/Unique'
import Versatility from '@/components/Reloads/Versatility'
import React from 'react'

const reloads = () => {
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