/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Capabilities from "@/components/Manufacturing/Capabilities";
import Discover from "@/components/Manufacturing/Discover";
import State from "@/components/Manufacturing/State";
import Hero from "@/components/Hero";
import React from "react";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";
import { Media } from "@/components/media";

export default function manufacturing() {
  const content = {
    heading: "Manufacturing",
    smallpara:
      "At AMS, our robust manufacturing processes are meticulously designed to uphold stringent global testing and quality standards, ensuring that every product not only complies with but exceeds the highest regulatory requirements, establishing a new paradigm of excellence in healthcare.",
    bigpara:
      "AMS pioneers advancements in medical device manufacturing through the integration of transformative technologies like breakthrough automation, robotics and artificial intelligence, establishing benchmarks for quality and streamlined operations.",
    src: "/assets/manufacturing/manufacturing.png",
  };
  const hero = {
    title: "Ushering the next generation of medical device technology",
    src: "/assets/manufacturing/manufacturing-hero.png",
    content:
      "At AMS, we are pioneering the future of medical device technology, harnessing cutting-edge manufacturing advancements to drive unparalleled quality, innovation, and agility in our processes. ",
  };
 fadeup()

  return (
    <>
      <Layout>
        <main>
          <Hero
            title={hero.title}
            src={hero.src}
            content={hero.content}
            className="hidden"
            mode={"dark"}
          />
          <Genesis content={content} />
          <Capabilities />
          <State />
          <Discover />
        </main>
      </Layout>
      <Media at="desktop">
<Pixifinal/>
      </Media>
      
    </>
  );
}
