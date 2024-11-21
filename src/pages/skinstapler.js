import Layout from '@/components/Layout'
import Carousel from '@/components/SkinStapler/Carousel'
import Closure from '@/components/SkinStapler/Closure'
import Hero from '@/components/SkinStapler/Hero'
import Think from '@/components/SkinStapler/Think'
import React from 'react'

const skinstapler = () => {
  return (
   <Layout>
    <main>
        <Hero/>
        <Think/>
        <Closure/>
        <Carousel/>
    </main>
   </Layout>

  )
}

export default skinstapler