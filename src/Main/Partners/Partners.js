import React from "react";
import "./TwoColumnLayout.css";
import { motion } from "framer-motion";

function TwoColumnLayout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="assets" variants={imageVariants}>
        <img
          src="https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Adventure"
        />
      </motion.div>
      <motion.div className="content" variants={contentVariants}>
        <h2 className="heading">Adventure Awaits Title</h2>
        <p className="paragraph">
          Embrace the unknown and embark on a journey of discovery. Let your
          curiosity guide you to new experiences and push you out of your
          comfort zone. Whether it's exploring new places, trying new things, or
          meeting new people, every adventure brings with it the potential for
          growth and transformation. So, take a leap of faith and see where the
          road takes you. Adventure awaits
        </p>
        <div className="media">
          <img  className="card"
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="card"
          >
          </img>
          <img  className="card"
          src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="card"
          >
          </img>
          </div>
      </motion.div>
    </motion.div>
  );
}

export default TwoColumnLayout;
