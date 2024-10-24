import React from "react";
import { motion } from "framer-motion";

function Transition() {
  return (
    <>
      <motion.div
        className="w-screen h-screen fixed top-0 left-0 bg-zinc-900 origin-bottom p-[5vw] z-[9999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <motion.div
        className="w-screen h-screen fixed top-0 left-0 bg-zinc-900 origin-bottom p-[5vw] z-[9999]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </>
  );
}

export default Transition;
