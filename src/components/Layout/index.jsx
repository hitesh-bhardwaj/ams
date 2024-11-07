import { useDevice } from "../useDevice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Header";
import Footer from "../Footer";
import Transition from "../Transition";
import gsap from "gsap";

const Layout = ({ children }) => {
  const { isDesktop } = useDevice();
  const router = useRouter();
  const [smoother, setSmoother] = useState(null);

  useEffect(() => {
    const initializeScrollSmoother = async () => {
      if (window.innerWidth >= 1024) {
        const { default: ScrollSmoother } = await import(
          "@/components/ScrollSmoother.min.js"
        );
        gsap.registerPlugin(ScrollSmoother);

        const smootherInstance = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
        });
        setSmoother(smootherInstance);
      }
    };

    initializeScrollSmoother();

    // Kill smoother on route change
    const handleRouteChange = () => {
      smoother && smoother.kill();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      smoother && smoother.kill();
    };
  }, [smoother, router.events]);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
      <Transition />
    </>
  );
};

export default Layout;
