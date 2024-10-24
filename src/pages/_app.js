import "@/styles/globals.css";
import { useState, useEffect } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from 'next-seo';
import Pixifinal from "@/components/Pixifinal";

export default function App({ Component, pageProps, router }) {
  const [showPixi, setShowPixi] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowPixi(false);
      } else {
        setShowPixi(true);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <ReactLenis root>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ReactLenis>
      
      {showPixi && <Pixifinal />}
    </>
  );
}
