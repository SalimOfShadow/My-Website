import React, { useState } from "react";
import { motion, AnimatePresence, easeIn, easeInOut } from "framer-motion";
const introText = (props) => {
  const text = "Currently WIP,stay tuned!".split(" ");
  return (
    <motion.div className="intro-text" whileHover={{ scale: 1.03 }}>
      <AnimatePresence>
        {text.map((el, i) => (
          <motion.span
            className="text-word"
            initial={{
              opacity: 0,
              rotate: 200,
              y: 120,
              color: "rgb(255, 0, 0)",
            }}
            animate={{
              rotate: 100,
              opacity: 1,
              color: "#0026ff",
            }}
            transition={{
              duration: 1.5,
              delay: i / 10,
              repeat: Infinity,
              repeatDelay: 0.85,
              repeatType: "reverse",
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default introText;
