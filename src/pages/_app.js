import "@/styles/fonts.css";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from 'next-seo';
import { Media, MediaContextProvider , mediaStyles } from "@/components/media";
import Pixifinal from "@/components/Pixifinal";
import { ReactLenis } from "lenis/react";
import ScrollToTop from "@/components/ScrollToTop";

export default function App({ Component, pageProps, router }) {

  return (
    <>
      <DefaultSeo
        title="Advanced Medtech Solutions"
        description="Advanced Medtech Solutions"
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
        dangerouslySetAllPagesToNoFollow={true}
        dangerouslySetAllPagesToNoIndex={true}
      />
      <style>{mediaStyles}</style>
      <MediaContextProvider>
      <ReactLenis root>
        <ScrollToTop key={router.route}/>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>
      </MediaContextProvider>
      

       
    </>
  );
}
