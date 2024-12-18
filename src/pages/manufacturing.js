/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Capabilities from "@/components/Manufacturing/Capabilities";
import Discover from "@/components/Manufacturing/Discover";
import State from "@/components/Manufacturing/State";
import React from "react";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import Hero from "@/components/Manufacturing/Hero";
import BgVideo from "@/components/Layout/BgVideo";

export default function manufacturing() {

  fadeUp();
  paraAnim();

  const content = {
    heading: "Manufacturing",
    smallpara: "At AMS, our robust manufacturing processes are meticulously designed to uphold stringent global testing and quality standards, ensuring that every product not only complies with but exceeds the highest regulatory requirements, establishing a new paradigm of excellence in healthcare. Through the seamless integration of advanced technologies and an uncompromising dedication to quality, we consistently set new benchmarks in healthcare innovation.",
    bigpara: "AMS pioneers advancements in medical device manufacturing, integrating transformative technologies like breakthrough automation, robotics and artificial intelligence, establishing benchmarks for quality and streamlined operations.",
    src: "/assets/manufacturing/manufacturing.png",
  };

  return (
    <>
      <Layout>
        <main>
          <Hero />
          <Genesis content={content} />
          <Capabilities />
          <State />
          <Discover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
}
