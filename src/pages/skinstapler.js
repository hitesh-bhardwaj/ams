import Layout from "@/components/Layout";
import Carousel from "@/components/SkinStapler/Carousel";
import Closure from "@/components/SkinStapler/Closure";
import Hero from "@/components/SkinStapler/Hero";
import SkinStaplerSpecification from "@/components/SkinStapler/SkinStaplerSpecification";
import Think from "@/components/SkinStapler/Think";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const skinstapler = () => {
  fadeUp();
  paraAnim();
  return (
    <>
      <NextSeo
        title="Skin Stapler – Quick and Secure Skin Closure"
        description="Ensure fast and effective skin closure with our high-performance
surgical skin stapler."
        openGraph={{
          title: "Skin Stapler – Quick and Secure Skin Closure",
          description:
            "Ensure fast and effective skin closure with our high-performance surgical skin stapler.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/skinstapler.png",
              width: 1918,
              height: 948,
              alt: "Skin Stapler – Quick and Secure Skin Closure",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <Think />
          <Closure />
          <Carousel />
          <SkinStaplerSpecification />
        </main>
      </Layout>
    </>
  );
};

export default skinstapler;
