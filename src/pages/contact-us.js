import ContactDetail from '@/components/Contact/ContactDetail';
import Hero from '@/components/Contact/Hero';
import Locations from '@/components/Contact/Locations';

import Layout from '@/components/Layout'
import React from 'react'

const contact = () => {
    
  return (
    <>
    <Layout>
        <main>
          <Hero/>
              <ContactDetail/>
              <Locations/>

        </main>
    </Layout>
      
    </>
  )
}

export default contact
