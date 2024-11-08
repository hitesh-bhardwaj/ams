import React, { useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Transition from "../Transition";
// import gsap from "gsap";
// import ScrollSmoother from "@/components/ScrollSmoother.min.js";

// gsap.registerPlugin(ScrollSmoother);

const Layout = ({ children }) => {

  // const smoother = useRef();

  // useEffect(() => {
  //   smoother.current = ScrollSmoother.create({
  //     smooth: 2,
  //     effects: true,
  //   });
  // }, []);

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
