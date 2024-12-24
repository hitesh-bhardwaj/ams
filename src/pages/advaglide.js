import AdvaGlideSpecifications from "@/components/Advaglide/AdvaGlideSpecifications";
import EdgeCarousel from "@/components/Advaglide/EdgeCarousel";
import Ergonomic from "@/components/Advaglide/Ergonomic";
import Hero from "@/components/Advaglide/Hero";
import Sirolimus from "@/components/Advaglide/Sirolimus";
import Layout from "@/components/Layout";
import BgVideo from "@/components/Layout/BgVideo";
import { Media } from "@/components/media";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const advaglide = () => {
  fadeUp();
  paraAnim();
  return (
    <>
      <NextSeo
        title="Advaglide – Lubricated Surgical Sutures"
        description="Enhance precision and ease of use with Advaglide, lubricated
sutures for smooth tissue passage."
        openGraph={{
          title: "Advaglide – Lubricated Surgical Sutures",
          description:
            "Enhance precision and ease of use with Advaglide, lubricated sutures for smooth tissue passage.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/advaglide.png",
              width: 1918,
              height: 948,
              alt: "Advaglide – Lubricated Surgical Sutures",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <Ergonomic />
          <EdgeCarousel width={"55%"} />
          <AdvaGlideSpecifications />
          <Sirolimus />
        </main>
      </Layout>
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
};

export default advaglide;
