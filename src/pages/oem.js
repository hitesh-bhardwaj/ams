/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Hero from "@/components/Hero";
import OemCard from "@/components/Oem/OemCard";
import Offerings from "@/components/Oem/Offerings";
import FormOem from "@/components/Oem/FormOem";
import OfferingsMob from "@/components/Oem/OfferingsMob";
import Layout from "@/components/Layout";
import { fadeup } from "@/components/gsapAnimations";
import { Media } from "@/components/media";


export default function oem() {
  const content = {
    heading: "Trust Has a New Name",
    smallpara:
      "At AMS, we elevate the standards for OEM and Custom Branding Solutions with unmatched expertise and dedication. We recognize that entering the market involves a multifaceted journey, requiring meticulous planning, design, and compliance. From innovative product development and precision manufacturing to rigorous quality assurance and regulatory adherence, AMS is committed to making your vision a reality.",
    bigpara:
      "Our comprehensive range of services guarantees excellence at every step, no matter the scale or complexity of your project. Partner with AMS for unparalleled trust and reliability in your journey to market success.",
    src: "/assets/rnd/rnd-genesis-img.webp",
  };
  const hero = {
    title: "Ams Oem",
    src: "/assets/oem/oem-hero-bg.webp",
  };
 fadeup()

  return (
    <>
     
          <Layout>
            <main>
              <Hero
                title={hero.title}
                src={hero.src}
                className="hidden"
                paraWidth={"max-w-[50vw]"}
                titleHidden={"hidden"}
              />
              <Genesis content={content} />
              <OemCard />
              <Media greaterThanOrEqual="desktop" >

              <Offerings />
              </Media>
              <Media lessThan="desktop">
              <OfferingsMob />
              </Media>
              <FormOem />
            </main>
          </Layout>
       
    </>
  );
}
