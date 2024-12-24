/* eslint-disable react-hooks/rules-of-hooks */
import AdvastapHD3 from "@/components/Advastap/AdvastapHD3";
import AdvastapHD2 from "@/components/Advastap/AdvstapHD2";
import Hd2Carousel from "@/components/Advastap/Hd2Carousel";
import Hd3Carousel from "@/components/Advastap/Hd3Carousel";
import Hero from "@/components/Advastap/Hero";
import SpecificationsHd2 from "@/components/Advastap/SpecificationsHd2";
import SpecificationsHd3 from "@/components/Advastap/SpecificationsHd3";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

const advastap = () => {
  return (
    <>
      <NextSeo
        title="Advastap – Surgical Stapler for Efficient Closure"
        description="Advastap provides reliable and efficient wound closure with
precise surgical stapling solutions."
        openGraph={{
          title: "Advastap – Surgical Stapler for Efficient Closure",
          description:
            "Advastap provides reliable and efficient wound closure with precise surgical stapling solutions.",
          images: [
            {
              url: "https://amsdev01.vercel.app/assets/seo/advastap.png",
              width: 1918,
              height: 948,
              alt: "Advastap – Surgical Stapler for Efficient Closure",
            },
          ],
        }}
      />
      <Layout>
        <main>
          <Hero />
          <AdvastapHD2 />
          <Hd2Carousel />
          <SpecificationsHd2 />
          <AdvastapHD3 />
          <Hd3Carousel />
          <SpecificationsHd3 paddingBottom={"!pb-[7vw]"} />
        </main>
      </Layout>
    </>
  );
};

export default advastap;
