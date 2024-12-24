import Ergonomic from '@/components/AdvastapCS/Ergonomic'
import Hero from '@/components/AdvastapCS/Hero'
import Specifications from '@/components/AdvastapCS/AdvastapSpecifications'
import Layout from '@/components/Layout'
import SurgicalOutcomes from '@/components/SurgicalOutcomes'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'
import { NextSeo } from 'next-seo'

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
  fadeUp();
  paraAnim();
  return (
    <>
     <NextSeo
                title="Advastap CS – Circular Stapler for Gastrointestinal Use"
                description="Advastap CS offers advanced circular stapling for reliable
anastomosis in gastrointestinal surgeries."
                openGraph={{
                  title: "Advastap CS – Circular Stapler for Gastrointestinal Use",
                  description:
                    "Advastap CS offers advanced circular stapling for reliable anastomosis in gastrointestinal surgeries.",
                  images: [
                    {
                      url: "https://amsdev01.vercel.app/assets/seo/advastapcs.png",
                      width: 1918,
                      height: 948,
                      alt: "Advastap CS – Circular Stapler for Gastrointestinal Use",
                    },
                  ],
                }}
              />
    <Layout>
    <main>
        <Hero/>
        <Ergonomic/>
        <SurgicalOutcomes  data={surgicalData} tclass={""}/>
        <Specifications/>
    </main>
  </Layout>
  </>
  )
}

export default advastapcs