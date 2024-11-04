import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from 'next-seo';
import Pixifinal from "@/components/Pixifinal";
import { useEffect, useState } from "react";
import gsap from "gsap";
import dynamic from 'next/dynamic';

const App = ({ Component, pageProps, router }) => {
  const [showPixi, setShowPixi] = useState(true);
  const [smoother, setSmoother] = useState(null);

  useEffect(() => {
    const initializeScrollSmoother = async () => {
      if (window.innerWidth >= 1024) {
        const { default: ScrollSmoother } = await import("gsap-trial/ScrollSmoother");
        gsap.registerPlugin(ScrollSmoother);

        const smootherInstance = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          wrapper: '#smooth-wrapper', // Optional: Use a wrapper if you need
          content: '#smooth-content',  // Optional: Target main content area if necessary
        });
        setSmoother(smootherInstance);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowPixi(false);
        smoother && smoother.kill(); // Remove smoother instance
        setSmoother(null);
      } else {
        setShowPixi(true);
        if (!smoother) initializeScrollSmoother();
      }
    };

    initializeScrollSmoother();
    window.addEventListener("resize", handleResize);

    return () => {
      smoother && smoother.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [smoother]);

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
      <AnimatePresence mode="wait">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Component {...pageProps} key={router.route} />
          </div>
        </div>
      </AnimatePresence>
      {showPixi && <Pixifinal />}
    </>
  );
};

export default App;
