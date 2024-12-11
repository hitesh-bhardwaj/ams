/* eslint-disable react-hooks/rules-of-hooks */
import Edge from "@/components/Products/Edge";
import NextGeneration from "@/components/Products/NextGeneration";
import Uncover from "@/components/Products/Uncover";
import Layout from "@/components/Layout";
import Hero from "@/components/Advagrip/Hero";
import TricCut from "@/components/Advagrip/TricCut";
import KeyFeatures from "@/components/Advagrip/KeyFeatures";
import Paradigm from "@/components/Advagrip/Paradigm";
import { fadeup } from "@/components/gsapAnimations";
import Pixifinal from "@/components/Pixifinal";

const EdgeCard = {
  card1: {
    title: "Angled Trim",
    src: "/assets/advagrip/advagrip-edge-left.png",
    para: "",
  },
  card2: {
    title: "Superior Holding Strength",
    src: "/assets/advagrip/advagrip-edge-center.png",
  
  },
  card3: {
    title: "Closer Barb Spacing",
    src: "/assets/advagrip/advagrip-edge-right.png",
    para: "18 barbs/ cm",
  },
};
const FeatureCard = {
  card1: {
    src: "/assets/advagrip/advagrip-feature-1.png",
    title: "Secured wound closure,faster than conventional suture.",
  },
  card2: {
    src: "/assets/advagrip/advagrip-feature-2.png",
    title: "Unidirectional barbs with circumferential distribution.",
  },
  card3: {
    src: "/assets/advagrip/advagrip-feature-3.png",
    title: "Maintains consistent tension across the wound.",
  },
  
};

const advaGrip = () => {
  // fadeup()
 

  return (
    <>
      
          <Layout>
            <main>
                <Hero/>
                <TricCut/>
            
              <Edge visibility={"!hidden"}
                sectionheading={"The ADVAGRIP Edge"}
                card1={EdgeCard.card1}
                card2={EdgeCard.card2}
                card3={EdgeCard.card3}
              />
              <KeyFeatures
                card1={FeatureCard.card1}
                card2={FeatureCard.card2}
                card3={FeatureCard.card3}
               
              />
              <Paradigm/>
             
              <NextGeneration />
              <Uncover />
            </main>
          </Layout>
          <Pixifinal/>
       
    </>
  );
};

export default advaGrip;
