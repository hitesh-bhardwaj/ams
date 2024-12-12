import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Transition from "../Transition";
import { Media } from "../media";
import Pixifinal from "../Pixifinal";
import { titleAnim } from "../gsapAnimations";


const Layout = ({ children }) => {
// titleAnim()

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
      <Media lessThan="desktop">
       <div className="w-screen h-screen fixed top-0 left-0 z-[-20] bg-gradient-to-tr from-pink-500/30 via-white/50 to-blue-500/30"></div>
      </Media>
      <div className="w-screen h-screen fixed top-0 left-0 z-[-20] bg-gradient-to-tr from-pink-500/30 via-white/50 to-blue-500/30"></div>
    </>
  );
};

export default Layout;
