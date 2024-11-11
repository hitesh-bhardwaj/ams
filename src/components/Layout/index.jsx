import React, { useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Transition from "../Transition";
import { ReactLenis } from "lenis/react";
import Pixifinal from "@/components/Pixifinal";

const Layout = ({ children }) => {

  return (
    <>
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Header />
        {children}
        <Footer />
      </ReactLenis>
      <Transition />
      {/* <Pixifinal /> */}
    </>
  );
};

export default Layout;
