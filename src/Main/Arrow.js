import React, { useState } from "react";
import { motion, useMotionValue, useCycle } from "framer-motion";

function Arrow() {
  const [isHovered, toggleHover] = useState(false);
  const [isRotated, toggleRotate] = useCycle(false, true);

  const scale = useMotionValue(1);

  const handleHover = () => {
    toggleHover(!isHovered);
  };

  const handleTap = () => {
    toggleRotate();
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <motion.svg
      viewBox="0 0 24 24"
      style={{
        width: 50,
        height: 50,
        marginTop: 20,
        cursor: "pointer",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
      whileHover={{ scale: 1.2 }}
      onTap={handleTap}
      onHoverStart={() => {
        handleHover();
        scale.set(1.2);
      }}
      onHoverEnd={() => {
        handleHover();
        scale.set(1);
      }}
    >
      <motion.path
        d="M9 16.242l6.364-6.364a.5.5 0 0 0-.708-.708L9 14.828l-5.657-5.657a.5.5 0 0 0-.708.708l6.364 6.364a.5.5 0 0 0 .707 0z"
        fill={isHovered ? "#ff3c3c" : "black"}
        style={{ rotate: isRotated ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.svg>
  );
}

export default Arrow;
