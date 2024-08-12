import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  
  return (

    <>
    <Head>
    <link rel="preload" href="/assets/fonts/aeonik/Aeonik-Light.woff" as="font" type="font/woff" crossOrigin=""/>
    </Head>
      <ReactLenis root duration={1}>
        <Component {...pageProps} />
      </ReactLenis>
    </>
  )
}
