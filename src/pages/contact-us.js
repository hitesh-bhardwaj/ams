import ContactDetail from '@/components/Contact/ContactDetail';
import Locations from '@/components/Contact/Locations';
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import React from 'react'

const contact = () => {
    const hero = {
        title: "Contact Us",
        src: "/assets/contact/contact-hero-bg.png",
        content:
          "Home > Contact Us",
      };
  return (
    <>
    <Layout>
        <main>
        <Hero
                title={hero.title}
                src={hero.src}
                content={hero.content}
                className="hidden"
              />
              <ContactDetail/>
              <Locations/>

        </main>
    </Layout>
      
    </>
  )
}

export default contact
