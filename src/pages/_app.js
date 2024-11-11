import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from 'next-seo';

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
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
