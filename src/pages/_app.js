import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from 'next-seo';
import Pixifinal from "@/components/Pixifinal";
import { ReactLenis, useLenis } from "lenis/react";
import ScrollToTop from "@/components/ScrollToTop";

export default function App({ Component, pageProps, router }) {

  return (
    <>
      <DefaultSeo
        title="AMS"
        description="Advancing Healthcare"
        additionalLinkTags={[
          {
            rel: "preload",
            href: "/assets/fonts/aeonik/Aeonik-Light.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/sofia-pro/Sofia-Pro-Light.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
        ]}
      />
      <ReactLenis root options={{lerp: 0.05}}>
        <ScrollToTop key={router.route}/>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>
       <Pixifinal />
       
    </>
  );
}
