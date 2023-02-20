import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#fff", fontWeight: "bold" }}
        >
          My
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontStyle: "Italic", fontWeight: "bold", color: '#EB455F' }}
        >
          Website
        </motion.span>
      </div>
      <div
        className={menuOpen ? "menu-btn open" : "menu-btn"}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
        {menuOpen ? (
          <div className="close-icon">
            X
          </div>
        ) : null}
      </div>
      <ul className={menuOpen ? "menu open" : "menu"}>
        <li>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#"
          >
            Home
          </motion.a>
        </li>
        <li>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="#"
          >
            About
          </motion.a>
        </li>
        <li>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            href="#"
          >
            Contact
          </motion.a>
        </li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
        </motion.li>
      </ul>
    </nav>
  );
}

export default Navbar;
