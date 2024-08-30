import React from 'react'
import dynamic from 'next/dynamic';

const CanvasBg = dynamic(() => import('@/components/layoutComponents/CanvasBg'), {
    ssr: false,
  });
const trial = () => {
  return (
    <>
    <CanvasBg/>
    </>
  )
}

export default trial;

