/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Advamesh/Hero";
import Macroporous from "@/components/Advamesh/Macroporous";
import MacroporousSpecifications from "@/components/Advamesh/MacroporousSpecifications";
import MidWeight from "@/components/Advamesh/MidWeight";
import MidWeightSpecifications from "@/components/Advamesh/MidWeightSpecifications";
import Polypropylene from "@/components/Advamesh/Polypropylene";
import PolypropyleneSpecifications from "@/components/Advamesh/PolypropyleneSpecifications";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const advamesh = () => {
  fadeUp();
  paraAnim();
  return (
    <>
      <NextSeo
        title="Advamesh – Surgical Mesh for Hernia Repair"
        description="Advamesh provides durable and flexible solutions for effective
hernia repair and tissue support."
        openGraph={{
          title: "Advamesh – Surgical Mesh for Hernia Repair",
          description:
            "Advamesh provides durable and flexible solutions for effective hernia repair and tissue support.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/advamesh.png",
              width: 1918,
              height: 948,
              alt: "Advamesh – Surgical Mesh for Hernia Repair",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <Macroporous />
          <MacroporousSpecifications />
          <MidWeight />
          <MidWeightSpecifications />
          <Polypropylene />
          <PolypropyleneSpecifications />
        </main>
      </Layout>
    </>
  );
};

export default advamesh;
