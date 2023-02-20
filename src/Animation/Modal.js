import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css';

const Modal = ({ showModal, setShowModal, children }) => {
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const modalVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    hidden: {
      y: "-100vh",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    }
  };

  return (
    <>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          onClick={() => setShowModal(false)}
        />
      )}
      <motion.div
        className="modal"
        variants={modalVariants}
        initial="hidden"
        animate={showModal ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Modal;
