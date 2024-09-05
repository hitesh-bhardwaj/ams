import React,{useEffect} from 'react'
import dynamic from 'next/dynamic';
import Background from '@/components/Test/Background';
import Slider from '@/components/Test/Slider';

const Bg = dynamic(() => import('@/components/Test/Bg'), {
  ssr: false,
});

const trial = () => {
  return (
    <>
 <Slider/>
    </>
  )
}

export default trial;

