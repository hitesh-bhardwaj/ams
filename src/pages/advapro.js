/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import Hero from '@/components/Advapro/Hero'
import Performance from "@/components/Advapro/Performance";
import SurgicalOutcomes from "@/components/Advapro/SurgicalOutcomes";
import AdvaproSpecifications from "@/components/Advapro/AdvaproSpecifications";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";

const advapro = () => {
  paraAnim();
  fadeUp();
  return (
    <>
      <Layout>
        <main>
            <Hero/>
         <Performance/>
         <SurgicalOutcomes/>
       <AdvaproSpecifications/>
        </main>
      </Layout>
    </>
  );
};

export default advapro;
