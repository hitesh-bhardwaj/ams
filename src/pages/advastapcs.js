import Ergonomic from '@/components/AdvastapCS/Ergonomic'
import Hero from '@/components/AdvastapCS/Hero'
import Specifications from '@/components/AdvastapCS/Specifications'
import Layout from '@/components/Layout'
import SurgicalOutcomes from '@/components/SurgicalOutcomes'
import React from 'react'

const surgicalData = [
  {
    img: "/assets/poweredlc/surgical-card1.png",
    para: "Uniform Pressure ensures consistent staple line formation.",
    title:"Versatile Performance"
  },
  {
    img: "/assets/poweredlc/surgical-card2.png",
    para: "Fewer leaks and enhanced staple formation.",
    title:"Minimal Anastomotic Leakage"
  },
  {
    img: "/assets/poweredlc/surgical-card3.png",
    para: "Consistent results in challenging tissues.",
    title:"Decreased Recurrence Rates"
  },
  {
    img: "/assets/poweredlc/surgical-card4.png",
    para: "Reduced slippage during firing.",
    title:"Decreased Recurrence Rates"
  },
  {
    img: "/assets/poweredlc/surgical-card5.png",
    para: "Wider tapered pockets for improved capture.",
    title:"Decreased Recurrence Rates"
  },
  {
    img: "/assets/poweredlc/surgical-card6.png",
    para: "B-form stapling for greater efficiency.",
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