import EndolcSpecifications from '@/components/Endolc/EndolcSpecifications'
import Hero from '@/components/Endolc/Hero'
import Precision from '@/components/Endolc/Precision'
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
              <EndolcSpecifications/>
            </main>
          </Layout>
       
   </>
  )
}

export default endolc