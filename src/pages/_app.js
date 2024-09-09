import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Transition from "@/components/Transition";
import dynamic from 'next/dynamic';
import Pixi from "@/components/Pixi";


const CanvasBg = dynamic(() => import('@/components/Test/CanvasBg'), {
    ssr: false,
  });

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/aeonik/Aeonik-Light.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/sofia-pro/Sofia-Pro-Light.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
      </Head>
      <ReactLenis root>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>
      {/* <Pixi/> */}
      
    </>
  );
}
