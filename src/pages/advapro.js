/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import Hero from "@/components/Advapro/Hero";
import Performance from "@/components/Advapro/Performance";
import SurgicalOutcomes from "@/components/Advapro/SurgicalOutcomes";
import AdvaproSpecifications from "@/components/Advapro/AdvaproSpecifications";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const advapro = () => {
  paraAnim();
  fadeUp();
  return (
    <>
      <NextSeo
        title="Advapro – Monofilament Polypropylene Mesh"
        description="Advapro delivers reliable and strong polypropylene mesh for
hernia repair and surgical support."
        openGraph={{
          title: "Advapro – Monofilament Polypropylene Mesh",
          description:
            "Advapro delivers reliable and strong polypropylene mesh for hernia repair and surgical support.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/advapro.png",
              width: 1918,
              height: 948,
              alt: "Advapro – Monofilament Polypropylene Mesh",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <Performance />
          <SurgicalOutcomes />
          <AdvaproSpecifications />
        </main>
      </Layout>
    </>
  );
};

export default advapro;
