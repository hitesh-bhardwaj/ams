import Ergonomic from '@/components/AdvastapCS/Ergonomic'
import Hero from '@/components/AdvastapCS/Hero'
import Specifications from '@/components/AdvastapCS/AdvastapSpecifications'
import Layout from '@/components/Layout'
import SurgicalOutcomes from '@/components/SurgicalOutcomes'
import React from 'react'

const surgicalData = [
  {
    img: "/assets/advastapcs/surgical-card1.png",
    para: "Promotes effective blood flow & tissue healing.",
    title:"Consistent Perfusion Across Staple Lines"
  },
  {
    img: "/assets/advastapcs/surgical-card2.png",
    para: "Adapts to a broad range of tissue thicknesses.",
     title:"Versatile Performance"
  },
  {
    img: "/assets/advastapcs/surgical-card3.png",
    para: "Ensures secure closures & reduces post-surgical complications.",
    title:"Minimal Anastomotic Leakage"
  },
  {
    img: "/assets/advastapcs/surgical-card4.png",
    para: "Ensures long-term surgical success.",
    title:"Decreased Recurrence Rates"
  },
  
];
const advastapcs = () => {
  return (
    <Layout>
    <main>
        <Hero/>
        <Ergonomic/>
        <SurgicalOutcomes  data={surgicalData} tclass={""}/>
        <Specifications/>
    </main>
  </Layout>
  )
}

export default advastapcs