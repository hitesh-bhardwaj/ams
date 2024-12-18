import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Media } from "../media";
import Transition from "../Transition";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Transition />
      <Media lessThan="desktop">
        <div className="w-screen h-screen fixed top-0 left-0 z-[-20] bg-gradient-to-tr from-pink-500/30 via-white/50 to-blue-500/30"></div>
      </Media>
    </>
  );
};

export default Layout;
