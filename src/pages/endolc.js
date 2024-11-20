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
              <Hero heading={"advastap ENDO LC"} tagline={"Endoscopic Linear Cutter 3-row"} src={"/assets/endolc/advastap-endo-lc.png"}/>
              <Precision/>
              <Stapling/>
              <Specifications/>
            </main>
          </Layout>
       
   </>
  )
}

export default endolc