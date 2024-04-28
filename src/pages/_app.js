import "@/styles/globals.css";
import ReactLenis from "@studio-freight/react-lenis";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (

    <>
      <ReactLenis root duration={1}>
        <Component {...pageProps} />
      </ReactLenis>
    </>
  )
}
