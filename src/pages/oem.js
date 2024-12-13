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
import Pixifinal from "@/components/Pixifinal";


export default function oem() {
  const content = {
    heading: "Trust Has a New Name",
    smallpara:
      "With a comprehensive range of services, we guarantee excellence at every step, regardless of the scale or complexity of your project. We understand that entering the market is a multifaceted journey, requiring meticulous planning, design, and compliance. From innovative product development and precision manufacturing to rigorous quality assurance and regulatory adherence, AMS is committed to turning your vision into reality.",
    bigpara:
      "AMS OEM features a dedicated team specializing in R&D and engineering, delivering medical device solutions tailored to OEM needs with unparalleled expertise. Our focus on performance, flexibility, and reliability drives innovation in medical technology.",
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
                mode={"dark"}
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
          <Media greaterThan='tablet'>
<Pixifinal/>
          </Media>
          
       
    </>
  );
}
