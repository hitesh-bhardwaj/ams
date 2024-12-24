/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Offerings from "@/components/Oem/Offerings";
import FormOem from "@/components/Oem/FormOem";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import Image from "next/image";
import BgVideo from "@/components/Layout/BgVideo";
import { NextSeo } from "next-seo";

export default function oem() {

  const content = {
    heading: "Trust Has a New Name",
    smallpara: "With a comprehensive range of services, we guarantee excellence at every step, regardless of the scale or complexity of your project. We understand that entering the market is a multifaceted journey, requiring meticulous planning, design, and compliance. From innovative product development and precision manufacturing to rigorous quality assurance and regulatory adherence, AMS is committed to turning your vision into reality.",
    bigpara: "AMS OEM features a dedicated team specializing in R&D and engineering, delivering medical device solutions tailored to OEM needs with unparalleled expertise. Our focus on performance, flexibility, and reliability drives innovation in medical technology.",
    src: "/assets/oem/oem-genesis-bg.png",
  };

  fadeUp();
  paraAnim();

  return (
    <>
      <NextSeo
            title="OEM – Custom Medical Solutions"
            description="Partner with us for custom OEM solutions designed to meet
unique healthcare needs."
            openGraph={{
              title: "OEM – Custom Medical Solutions",
              description:
                "Partner with us for custom OEM solutions designed to meet unique healthcare needs.",
              images: [
                {
                  url: "https://amsdev01.vercel.app/assets/seo/oem.png",
                  width: 1915,
                  height: 948,
                  alt: "OEM – Custom Medical Solutions",
                },
              ],
            }}
          />
      <Layout>
        <main>
          <section className="hero-container dark" id="hero">
            <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
              <Image
                className="hero-img top-0 left-0 right-0 bottom-0 object-cover h-full w-full absolute object-left"
                src="/assets/oem/oem-hero-image.png"
                alt="Hero Image"
                width={1920}
                height={1080}
                priority={true}
              />
              <h1 className="hidden">AMS OEM</h1>
            </div>
          </section>
          <Genesis content={content} />
          <Offerings />
          <FormOem />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/endo.mp4"} />
      </Media>
    </>
  );
}
