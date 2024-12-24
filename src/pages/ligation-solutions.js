import Layout from "@/components/Layout";
import AdvaclipCarousel from "@/components/LigationSolutions/AdvaclipCarousel";
import Hero from "@/components/LigationSolutions/Hero";
import Security from "@/components/LigationSolutions/Security";
import Unique from "@/components/LigationSolutions/Unique";
import React from "react";
import { paraAnim, fadeUp } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const ligationSolutions = () => {
  paraAnim();
  fadeUp();
  return (
    <>
      <NextSeo
        title="Ligation Solutions – Surgical Clip Systems"
        description="Discover secure and efficient ligation solutions with our advanced
surgical clip systems."
        openGraph={{
          title: "Ligation Solutions – Surgical Clip Systems",
          description:
            "Discover secure and efficient ligation solutions with our advanced surgical clip systems.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/ligation-solutions.png",
              width: 1918,
              height: 948,
              alt: "Ligation Solutions – Surgical Clip Systems",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <Unique />
          <Security />
          <AdvaclipCarousel />
        </main>
      </Layout>
    </>
  );
};

export default ligationSolutions;
