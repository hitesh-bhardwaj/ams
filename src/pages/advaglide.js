import EdgeCarousel from '@/components/Advaglide/EdgeCarousel'
import Ergonomic from '@/components/Advaglide/Ergonomic'
import Hero from '@/components/Advaglide/Hero'
import Sirolimus from '@/components/Advaglide/Sirolimus'
import Layout from '@/components/Layout'
import React from 'react'

const advaglide = () => {
  return (
    <>
    <Layout>
        <main>
           <Hero/>
           <Ergonomic/>
           <EdgeCarousel/>
           <Sirolimus/>
            
        </main>
    </Layout>
      
    </>
  )
}

export default advaglide
