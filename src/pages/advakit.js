/* eslint-disable react-hooks/rules-of-hooks */
import CSectionSpecifications from "@/components/Advakit/CSectionSpecifications";
import Hernia from "@/components/Advakit/Hernia";
import HerniaSpecifications from "@/components/Advakit/HerniaSpecifications";
import Hero from "@/components/Advakit/Hero";
import Ortho from "@/components/Advakit/Ortho";
import OrthoSpecifications from "@/components/Advakit/OrthoSpecifications";
import Layout from "@/components/Layout";
import { fadeUp , paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const advakit = () => {
  fadeUp();
  paraAnim();
  return (
    <>
     <NextSeo
                 title="Advakit – Comprehensive Surgical Kit"
                 description="Advakit provides a complete set of tools for efficient and precise
surgical procedures."
                 openGraph={{
                   title: "Advakit – Comprehensive Surgical Kit",
                   description:
                     "Advakit provides a complete set of tools for efficient and precise surgical procedures.",
                   images: [
                     {
                       url: "https://amsdev01.vercel.app/assets/seo/advakit.png",
                       width: 1918,
                       height: 948,
                       alt: "Advakit – Comprehensive Surgical Kit",
                     },
                   ],
                 }}
               />
      <Layout>
        <main>
           <Hero/>
            <CSectionSpecifications/>
            <Ortho/>
            <OrthoSpecifications/>
            <Hernia/>
            <HerniaSpecifications/>
        </main>
      </Layout>
    </>
  );
};

export default advakit;
