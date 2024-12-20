import ContactDetail from '@/components/Contact/ContactDetail';
import ContactList from '@/components/Contact/ContactList';
import Hero from '@/components/Contact/Hero';
import Locations from '@/components/Contact/Locations';
import { fadeUp, paraAnim } from '@/components/gsapAnimations';

import Layout from '@/components/Layout'
import BgVideo from '@/components/Layout/BgVideo';
import { Media } from '@/components/media';
import React from 'react'

const contact = () => {

  fadeUp();
  paraAnim();

  return (
    <>
      <Layout>
        <main>
          <Hero />
          <ContactDetail />
          <ContactList />
          <Locations />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  )
}

export default contact
