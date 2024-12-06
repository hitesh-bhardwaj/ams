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
      <style>{mediaStyles}</style>
      <MediaContextProvider>
      <ReactLenis root options={{lerp: 0.05}}>
        <ScrollToTop key={router.route}/>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>
      </MediaContextProvider>
      <Media greaterThan="tablet">

       <Pixifinal />
       <div className="w-screen h-screen fixed top-0 left-0 z-[-20] bg-gradient-to-tr from-pink-500/30 via-white/50 to-blue-500/30"></div>
      </Media>
      <Media lessThan="desktop">

       <div className="w-screen h-screen fixed top-0 left-0 z-[-20] bg-gradient-to-tr from-pink-500/30 via-white/50 to-blue-500/30"></div>
      </Media>

       
    </>
  );
}
