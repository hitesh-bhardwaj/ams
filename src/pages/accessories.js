import Hemostasis from "@/components/Accessories/Hemostasis";
import Hero from "@/components/Accessories/Hero";
import Inflation from "@/components/Accessories/Inflation";
import Manifold from "@/components/Accessories/Manifold";
import SpecificationsHemostasis from "@/components/Accessories/SpecificationsHemostasis";
import SpecificationsInflation from "@/components/Accessories/SpecificationsInflation";
import SpecificationsManifold from "@/components/Accessories/SpecificationsManifold";
import Layout from "@/components/Layout";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const accessories = () => {
  fadeUp();
  paraAnim();
  return (
    <>
      <NextSeo
        title="Accessories – Supporting Surgical Solutions"
        description="Explore essential surgical accessories designed to enhance
precision and efficiency during procedures."
        openGraph={{
          title: "Accessories – Supporting Surgical Solutions",
          description:
            "Explore essential surgical accessories designed to enhance precision and efficiency during procedures.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/accessories.png",
              width: 1918,
              height: 948,
              alt: "Accessories – Supporting Surgical Solutions",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <Inflation />
          <SpecificationsInflation />
          <Hemostasis />
          <SpecificationsHemostasis />
          <Manifold />
          <SpecificationsManifold />
        </main>
      </Layout>
    </>
  );
};

export default accessories;
