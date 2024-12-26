/* eslint-disable react-hooks/rules-of-hooks */
import CSectionSpecifications from "@/components/Advakit/CSectionSpecifications";
import Hernia from "@/components/Advakit/Hernia";
import HerniaSpecifications from "@/components/Advakit/HerniaSpecifications";
import Hero from "@/components/Advakit/Hero";
import Ortho from "@/components/Advakit/Ortho";
import OrthoSpecifications from "@/components/Advakit/OrthoSpecifications";
import Layout from "@/components/Layout";
import MetaData from "@/components/Metadata";
import { fadeUp , paraAnim } from "@/components/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";


const advakit = () => {
  const metadata = {
    title: "Advakit – Comprehensive Surgical Kit",
    description:
      "Advakit provides a complete set of tools for efficient and precise surgical procedures.",
    img: "advakit.png",
    alt: "Advakit – Comprehensive Surgical Kit",
    slug: "advakit",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  fadeUp();
  paraAnim();
  return (
    <>
   <MetaData metadata={metadata}/>
   <WebpageJsonLd metadata={metadata}/>
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
