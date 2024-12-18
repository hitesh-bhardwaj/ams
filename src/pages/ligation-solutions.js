import Layout from '@/components/Layout';
import AdvaclipCarousel from '@/components/LigationSolutions/AdvaclipCarousel';
import Hero from '@/components/LigationSolutions/Hero';
import Security from '@/components/LigationSolutions/Security';
import Unique from '@/components/LigationSolutions/Unique';
import React from 'react';
import { paraAnim, fadeUp } from '@/components/gsapAnimations';

const ligationSolutions = () => {
  paraAnim();
  fadeUp();
  return (
   <>
     <Layout>
    <main>
    <Hero/>
    <Unique/>
    <Security/>
    <AdvaclipCarousel/>
    </main>
  </Layout>
   </>
  )
}

export default ligationSolutions;