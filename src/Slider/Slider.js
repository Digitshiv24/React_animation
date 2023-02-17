import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Slider.css";

const images = [
  "https://picsum.photos/id/1000/400/300",
  "https://picsum.photos/id/1001/400/300",
  "https://picsum.photos/id/1002/400/300",
  "https://picsum.photos/id/1001/400/300",
  "https://picsum.photos/id/1002/400/300",
];


const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        <motion.button
          className="slider-btn slider-btn-prev"
          onClick={prevImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >-</motion.button>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt={`Image ${currentImage}`}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          variants={imageVariants}
          className="slider-image"
        />
        <motion.button
          className="slider-btn slider-btn-next"
          onClick={nextImage}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >+</motion.button>
        <div
          className="slider-progress-bar"
          style={{ width: `${((currentImage + 1) / images.length) * 100}%` }}
        ></div>
      </div>
      <h2 className="slider-heading">{`Image ${currentImage + 1} of ${
        images.length
      }`}</h2>
    </div>
  );
};

export default Slider;
