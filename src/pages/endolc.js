import Hero from '@/components/Endolc/Hero'
import Precision from '@/components/Endolc/Precision'
import Specifications from '@/components/Endolc/Specifications'
import Stapling from '@/components/Endolc/Stapling'
import Layout from '@/components/Layout'
import React from 'react'

const endolc = () => {
  return (
   <>
      <Layout>
            <main>
              <Hero/>
              <Precision/>
              <Stapling/>
              <Specifications/>
            </main>
          </Layout>
       
   </>
  )
}

export default endolc