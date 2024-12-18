import ContactDetail from '@/components/Contact/ContactDetail';
import ContactList from '@/components/Contact/ContactList';
import Hero from '@/components/Contact/Hero';
import Locations from '@/components/Contact/Locations';

import Layout from '@/components/Layout'
import React from 'react'

const contact = () => {

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
    </>
  )
}

export default contact
