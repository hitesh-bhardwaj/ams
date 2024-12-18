/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Offerings from "@/components/Oem/Offerings";
import FormOem from "@/components/Oem/FormOem";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import Pixifinal from "@/components/Pixifinal";
import Image from "next/image";

export default function oem() {

  const content = {
    heading: "Trust Has a New Name",
    smallpara: "At AMS, we elevate the standards for OEM and Custom Branding Solutions with unmatched expertise and dedication. We recognize that entering the market involves a multifaceted journey, requiring meticulous planning, design, and compliance. From innovative product development and precision manufacturing to rigorous quality assurance and regulatory adherence, AMS is committed to making your vision a reality.",
    bigpara: "Our comprehensive range of services guarantees excellence at every step, no matter the scale or complexity of your project. Partner with AMS for unparalleled trust and reliability in your journey to market success.",
    src: "/assets/oem/oem-genesis-bg.png",
  };

  fadeUp();
  paraAnim();

  return (
    <>
      <Layout>
        <main>
          <section className="hero-container mobile:mb-[15%] dark" id="hero">
            <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[70vh]">
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

          <Media greaterThanOrEqual="desktop" >
            <Offerings />
          </Media>

          {/* <Media lessThan="desktop">
            <OfferingsMob />
          </Media> */}

          <FormOem />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <Pixifinal/>
      </Media>
    </>
  );
}
