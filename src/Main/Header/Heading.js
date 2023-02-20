import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../Image/background-image.jpg"
import Arrow from "../Arrow"
import './svg-animation.css';

function Heading() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        filter: "brightness(0.5)",
        objectPosition: "top",
      }}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to my <span style={{ color: "red" }}>awesome</span> website!
      </motion.h1>
      <motion.br></motion.br>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ color: "#420000", fontSize: "1.2rem" }}
      >
        Scroll down to explore more
 </motion.p>
      <Arrow/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#ff3c3c",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      ></motion.div>
    </motion.header>
  );
}

export default Heading;
