import React,{useEffect} from 'react'
import dynamic from 'next/dynamic';
import Background from '@/components/Test/Background';

const Bg = dynamic(() => import('@/components/Test/Bg'), {
  ssr: false,
});

const trial = () => {
  return (
    <>
 {/* <Bg/> */}
 {/* <Background/> */}
    </>
  )
}

export default trial;

