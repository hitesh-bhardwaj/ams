import ContactDetail from '@/components/Contact/ContactDetail';
import ContactList from '@/components/Contact/ContactList';
import Hero from '@/components/Contact/Hero';
import Locations from '@/components/Contact/Locations';
import { fadeUp, paraAnim } from '@/components/gsapAnimations';

import Layout from '@/components/Layout'
import BgVideo from '@/components/Layout/BgVideo';
import { Media } from '@/components/media';
import { NextSeo } from 'next-seo';
import React from 'react'

const contact = () => {

  fadeUp();
  paraAnim();

  return (
    <>
     <NextSeo
                  title="Contact Us – Advanced MedTech Solutions"
                  description="Reach out to Advanced MedTech Solutions for inquiries, support,
or collaborations. We are here to assist."
                  openGraph={{
                    title: "Contact Us – Advanced MedTech Solutions",
                    description: "Reach out to Advanced MedTech Solutions for inquiries, support,or collaborations. We are here to assist.",
                    images: [
                      {
                        url: "https://amsdev01.vercel.app/assets/seo/contact-us.png",
                        width: 1915,
                        height: 948,
                        alt: "Contact Us – Advanced MedTech Solutions",
                      },
                    ],
                  }}/>
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
